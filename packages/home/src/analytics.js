const analyticsFunc = import("logic/analyticsFunc");
export const sendAnalytics = (msg) => {
    analyticsFunc
        .then(({ default: analyticsFunc }) => analyticsFunc(msg))
        .catch((err) => console.log(`Error sending analytics value: ${msg}`));
};
