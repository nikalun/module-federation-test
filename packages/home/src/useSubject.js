import React from "react";
export const useSubject = (subject, initialValue) => {
    const [value, valueSet] = React.useState(initialValue);
    React.useEffect(() => {
        const sub = subject.subscribe(valueSet);
        return () => {
            sub.unsubscribe();
        };
    }, [subject]);
    return value;
};
