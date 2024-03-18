const createAsyncFunc = (promise) => (...args) =>
    promise
        .then(({ default: func }) => func(...args))
        .catch((err) =>
            console.log(`Error sending analytics value: ${JSON.stringify(args)}
`)
        );
export const sendAnalytics1 = createAsyncFunc(import("logic/analyticsFunc"));

const queuedFunction = (funcPromise) => {
    let queueFunc = null;
    let queue = [];
    let pending = false;
    return (msg) => {
        if (queueFunc) {
            queueFunc(msg);
        } else {
            queue.push(msg);
            if (!pending) {
                pending = true;
                funcPromise
                    .then((func) => {
                        queueFunc = func;
                        queue.forEach(queueFunc);
                        queue = [];
                    })
                    .catch((err) => console.log(`Error getting queued function`));
            }
        }
    };
};

export const sendAnalytics2 = queuedFunction(
    import("logic/analyticsFunc").then(({ default: func }) => func)
);
