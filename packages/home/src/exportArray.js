import React from "react";

export const GetArray = () => {
    const [value, setValue] = React.useState(null);
    React.useEffect(() => {
        import('logic/arrayValue')
            .then(({ arr }) => {
                setValue(arr)
            })
            .catch((err) => console.log(err));
    }, [])

    return <div>Array: {value}</div>
}
