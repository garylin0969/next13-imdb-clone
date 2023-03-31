import { baseURL } from '@/utils/constants';
import objectUtils from '@/utils/objectUtils';
import 'server-only';

const urlSearchParams = (params?: object): URLSearchParams | boolean => {
    return params ? new URLSearchParams(objectUtils.valuesToString(params)) : false;
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
