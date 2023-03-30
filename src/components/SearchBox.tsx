'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

const SearchBox = () => {
    const router: AppRouterInstance = useRouter();
    const [search, setSearch] = useState<string>('');
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
                <input
                    className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
                    type="text"
                    value={search}
                    placeholder="Search keywords..."
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                />
                <button type="submit" disabled={!search} className="text-amber-600 disabled:text-gray-400">
                    Search
                </button>
            </form>
        </>
    );
};

export default SearchBox;
