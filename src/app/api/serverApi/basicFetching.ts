import 'server-only';

const baseURL: string = 'https://api.themoviedb.org/3';

const objectValuesToString = (obj: object): Record<string, string> => {
    return Object.entries(obj).reduce((acc: Record<string, string>, [key, value]) => {
        acc[key] = String(value);
        return acc;
    }, {});
};

const urlSearchParams = (params?: object): URLSearchParams | boolean => {
    return params ? new URLSearchParams(objectValuesToString(params)) : false;
};

// cache: 'force-cache'
const staticFetching = async (url: string, params?: object): Promise<any> => {
    const searchParams: URLSearchParams | boolean = urlSearchParams(params);
    const apiURL = params ? url + '?' + searchParams : url;
    const res: Response = await fetch(baseURL + apiURL);
    if (!res.ok) throw new Error(`Failed to fetch data on ${baseURL + apiURL}`);
    return await res.json();
};
// revalidate cached data at a timed interval
const revalidateFetching = async (url: string, millisecond: number, params?: object): Promise<any> => {
    const searchParams: URLSearchParams | boolean = urlSearchParams(params);
    const apiURL = params ? url + '?' + searchParams : url;
    const res: Response = await fetch(baseURL + apiURL, { next: { revalidate: millisecond } });
    if (!res.ok) throw new Error(`Failed to fetch data on ${baseURL + apiURL}`);
    return await res.json();
};
// fresh data on every fetch request
const dynamicFetching = async (url: string, params?: object): Promise<any> => {
    const searchParams: URLSearchParams | boolean = urlSearchParams(params);
    const apiURL = params ? url + '?' + searchParams : url;
    const res: Response = await fetch(baseURL + apiURL, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch data on ${baseURL + apiURL}`);
    return await res.json();
};

export { staticFetching, revalidateFetching, dynamicFetching };
