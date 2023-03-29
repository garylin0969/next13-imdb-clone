import 'server-only';

const objectValuesToString = (obj: object): Record<string, string> => {
    return Object.entries(obj).reduce((acc: Record<string, string>, [key, value]) => {
        acc[key] = String(value);
        return acc;
    }, {});
};

// cache: 'force-cache'
export const staticFetching = async (url: string, params?: object) => {
    let searchParams: URLSearchParams | undefined;
    if (params) {
        searchParams = new URLSearchParams(objectValuesToString(params));
    }
    const res: Response = await fetch(params ? url + '?' + searchParams : url);
    if (!res.ok) {
        throw new Error(`Failed to fetch data on ${params ? url + '?' + searchParams : url}`);
    }
    return await res.json();
};
// revalidate cached data at a timed interval
export const revalidateFetching = async (url: string, millisecond: number, params?: object) => {
    let searchParams: URLSearchParams | undefined;
    if (params) {
        searchParams = new URLSearchParams(objectValuesToString(params));
    }
    const res: Response = await fetch(params ? url + '?' + searchParams : url, { next: { revalidate: millisecond } });
    if (!res.ok) {
        throw new Error(`Failed to fetch data on ${params ? url + '?' + searchParams : url}`);
    }
    return await res.json();
};
// fresh data on every fetch request
export const dynamicFetching = async (url: string, params?: object) => {
    let searchParams: URLSearchParams | undefined;
    if (params) {
        searchParams = new URLSearchParams(objectValuesToString(params));
    }
    const res: Response = await fetch(params ? url + '?' + searchParams : url, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`Failed to fetch data on ${params ? url + '?' + searchParams : url}`);
    }
    return await res.json();
};
