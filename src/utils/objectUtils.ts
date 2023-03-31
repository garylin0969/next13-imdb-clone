const valuesToString = (obj: object): Record<string, string> => {
    return Object.entries(obj).reduce((acc: Record<string, string>, [key, value]) => {
        acc[key] = String(value);
        return acc;
    }, {});
};

const objectUtils: {
    valuesToString: (obj: object) => Record<string, string>;
} = {
    valuesToString,
};

export default objectUtils;
