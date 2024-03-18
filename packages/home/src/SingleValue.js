import React from "react";

export const SingleValue = () => {
    const [singleValue, singleValueSet] = React.useState(null);
    React.useEffect(() => {
        import("logic/singleValue")
            .then(({ default: value }) => {
                singleValueSet(value)
            })
            .catch((err) => console.error(`Error getting single value: ${err}`));
    }, []);
    return <div>Single value: {singleValue}.</div>;
};
