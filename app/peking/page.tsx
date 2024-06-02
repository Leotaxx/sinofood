'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Category {
    id: number;
    name: string;
}

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await fetch('/api/categories');
            const data = await res.json();
            const filteredData = data.filter((category: Category) => category.id !== 2);

            setCategories(filteredData);
        };

        fetchCategories();
    }, []);

    return (
        <div className="container mx-auto px-4 py-6">

            <ul className="space-y-4">
                {categories.map((category) => (
                    <li key={category.id} className="bg-white shadow-md rounded-lg p-4 w-80 w-full text-center hover:bg-gray-100 transition duration-300">
                        <Link href={`/peking/category/${category.id}`} className="text-xl font-semibold text-blue-600  hover:text-blue-800">
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;