
import Image from 'next/image';

interface Category {
    id: number;
    name: string;
}

const Categories: React.FC = () => {

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold my-6 text-center">Pizza Recipes</h1>
            <div className="relative w-full overflow-x-auto">
                <div className="flex">
                    <div className="relative min-w-[3000px] h-auto" style={{ height: 'auto', minHeight: '100vh' }}>
                        <Image
                            src="/mia/landscape.jpg"
                            alt="Pizza Recipes"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
