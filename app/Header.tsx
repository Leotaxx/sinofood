import React from "react";
import pizzaMia from '../public/pizzaMia.png';
import koreanFood from '../public/koreanFood.png';
import boba from '../public/boba.png';
import miiwa from '../public/miiwa.png';
import peking from '../public/peking.png';
import Image from "next/image";
import Link from "next/link";
export default function Header() {

    return (
        <div className="flex flex-col justify-center items-center p-4 bg-gray-100 w-full">
            <div className="text-2xl font-bold mb-4 text-center">
                Sino Street Food - Cooking Instructions
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-10 w-full">
                <Link href="/">
                    <Image
                        src={peking}
                        alt="Peking"
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
                <Link href="/recipes/pizzamia">
                    <Image
                        src={pizzaMia}
                        alt="Pizza Mia"
                        width={100}
                        height={100}
                        priority

                    />
                </Link>
                <Link href="/recipes/koreanfood">
                    <Image
                        src={koreanFood}
                        alt="Korean Food"
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
                <Image
                    src={boba}
                    alt="Boba"
                    width={100}
                    height={100}
                    priority
                />
                <Image
                    src={miiwa}
                    alt="Miiwa"
                    width={100}
                    height={100}
                    priority
                />

            </div>
        </div >
    )
}