import Image from 'next/image';

const VerticalPizzaMenu: React.FC = () => {
    const pizzas = [
        { src: '/mia/new.png', alt: 'Mia Spicy' },
        { src: '/mia/1.png', alt: 'Mia Special' },
        { src: '/mia/2.png', alt: 'Margherita' },
        { src: '/mia/3.png', alt: 'Pepperoni' },
        { src: '/mia/4.png', alt: 'Hot Mia' },
        { src: '/mia/5.png', alt: 'Chicken Bruno' },
        { src: '/mia/6.png', alt: 'Rustic Italian' },
        { src: '/mia/7.png', alt: 'Meat Mega' },
        { src: '/mia/8.png', alt: 'Irish Breakfast' },
        { src: '/mia/9.png', alt: 'Fisherman\'s Catch' },
        { src: '/mia/10.png', alt: 'Hawaiian' },
        { src: '/mia/11.png', alt: 'Vegetarian' },
        { src: '/mia/12.png', alt: 'BBQ Texas' },
        { src: '/mia/13.png', alt: 'Miarollnie: Crunchy C/CH' },
    ];

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-center mb-6">Pizza Recipes</h1>
            <div className="flex flex-col items-center space-y-4">
                {pizzas.map((pizza, index) => (
                    <div key={index} className="w-full max-w-sm">
                        <Image
                            src={pizza.src}
                            alt={pizza.alt}
                            width={800}
                            height={800}
                            objectFit="contain"
                            layout="responsive"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalPizzaMenu;
