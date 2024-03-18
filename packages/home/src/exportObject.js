import React from "react";
export const ObjectValue = () => {
    const [objectValue, objectValueSet] = React.useState(null);

    React.useEffect(() => {
        import("logic/objectValue")
            .then(({ default: value }) => objectValueSet(value))
            .catch((err) => console.error(`Error getting object value: ${err}`));
    }, []);

    return <div>Object value: {JSON.stringify(objectValue)}.</div>;
};
