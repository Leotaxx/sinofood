// "use client"
import React from 'react';
import Link from 'next/link';

export default function Recipes() {


    return (
        <div className="flex flex-col justify-center items-center">
            <h2>This is the Korean food starter recipes page</h2>
            <Link href="/recipes/koreanfood/starters" className="bg-green-400 text-white font-semibold m-4 py-3 px-6 rounded-lg shadow-md hover:bg-green-500 transition duration-300 ease-in-out">
                Starter
            </Link>
            <Link href="/recipes/koreanfood/main" className="bg-green-400 text-white font-semibold m-4 py-3 px-6 rounded-lg shadow-md hover:bg-green-500 transition duration-300 ease-in-out">
                Main Coures
            </Link>
        </div>
    );
}
