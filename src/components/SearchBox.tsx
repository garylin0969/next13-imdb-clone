'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

const SearchBox = () => {
    const router: AppRouterInstance = useRouter();
    const { register, handleSubmit, watch } = useForm();
    const submit = (data: FieldValues): void => {
        if (!data.search.trim()) return;
        router.push(`/search/${data.search.trim()}`);
    };
    return (
        <>
            <form className="flex max-w-6xl mx-auto justify-between items-center px-5" onSubmit={handleSubmit(submit)}>
                <input
                    className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
                    type="text"
                    {...register('search')}
                    placeholder="Search keywords..."
                />
                <button className="text-amber-600 disabled:text-gray-400" type="submit" disabled={!watch('search')}>
                    Search
                </button>
            </form>
        </>
    );
};

export default SearchBox;
