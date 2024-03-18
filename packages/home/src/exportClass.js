const classExport = import("logic/classExport");

export const newClassObject = (...args) =>
    classExport
        .then(({ default: classRef }) => {
            return new classRef(...args);
        })
        .catch((err) => console.log(`Error getting class: ${err}`));
