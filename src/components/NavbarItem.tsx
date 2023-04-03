'use client';

import Link from 'next/link';
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

type NavbarItemProps = {
    title: string;
    param: string;
};

const NavbarItem = ({ title, param }: NavbarItemProps) => {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const genre: string | null = searchParams.get('genre');

    return (
        <div>
            <Link
                href={`/?genre=${param}`}
                className={`m-4 hover:text-amber-600 font-semibold p-2 ${
                    genre &&
                    genre === param &&
                    'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
                }`}
            >
                {title}
            </Link>
        </div>
    );
};

export default NavbarItem;
