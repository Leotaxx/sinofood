// components/RecipeImage.tsx
import { useState } from 'react';
import Image from 'next/image';

interface RecipeImageProps {
    name: string;
    imagePath: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ name, imagePath }) => {
    const [imgError, setImgError] = useState(false);

    return imgError ? (
        <span>{name}</span>
    ) : (
        <div className="flex flex-col items-center">
            <Image
                src={`/${imagePath}/${encodeURIComponent(name)}.png`}
                alt={name}
                width={256}
                height={256}
                className="object-cover"
                onError={() => setImgError(true)}
            />
        </div>
    );
};

export default RecipeImage;
