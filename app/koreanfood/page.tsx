'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Category {
    id: number;
    name: string;
}

const Categories: React.FC = () => {
    // const [categories, setCategories] = useState<Category[]>([]);

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const res = await fetch('/api/categories');
    //         const data = await res.json();
    //         setCategories(data);
    //     };

    //     fetchCategories();
    // }, []);

    return (
        <div className="container mx-auto px-4 py-6">

            <ul className="space-y-4">

                <li key='1' className="bg-white shadow-md rounded-lg p-4  w-full text-center hover:bg-gray-100 transition duration-300">
                    <Link href={`/koreanfood/category/1`} className="text-xl font-semibold text-blue-600  hover:text-blue-800">
                        Starters
                    </Link>
                </li>
                <li key="2" className="bg-white shadow-md rounded-lg p-4  w-full text-center hover:bg-gray-100 transition duration-300">
                    <Link href={`/koreanfood/category/2`} className="text-xl font-semibold text-blue-600  hover:text-blue-800">
                        Main Course
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Categories;