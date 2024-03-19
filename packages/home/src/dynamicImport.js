import React from "react";
function loadComponent(scope, module) {
    return () => {
        return window[scope].get(module).then((factory) => {
            const Module = factory();
            return Module;
        });
    }
}

const useDynamicScript = (args) => {
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);

    React.useEffect(() => {
        if (!args.url) {
            return;
        }

        const element = document.createElement("script");

        element.src = args.url;
        element.type = "text/javascript";
        element.async = true;

        setReady(false);
        setFailed(false);

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${args.url}`);
            setReady(true);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${args.url}`);
            setReady(false);
            setFailed(true);
        };

        document.head.appendChild(element);

        return () => {
            console.log(`Dynamic Script Removed: ${args.url}`);
            document.head.removeChild(element);
        };
    }, [args.url]);

    return {
        ready,
        failed,
    };
};


export function System(props) {
    const { ready, failed } = useDynamicScript({
        url: props.system && props.system.url,
    });

    if (!props.system) {
        return <h2>Not system specified</h2>;
    }

    if (!ready) {
        return <h2>Loading dynamic script: {props.system.url}</h2>;
    }

    if (failed) {
        return <h2>Failed to load dynamic script: {props.system.url}</h2>;
    }

    const Component = React.lazy(
        loadComponent(props.system.scope, props.system.module)
    );

    return (
        <React.Suspense fallback="Loading System">
            <Component />
        </React.Suspense>
    );
}
