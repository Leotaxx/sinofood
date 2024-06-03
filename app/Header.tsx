'use client'
import React from "react";
import pizzaMia from '../public/pizzaMia.png';
import koreanFood from '../public/koreanFood.png';
import boba from '../public/boba.png';
import miiwa from '../public/miiwa.png';
import peking from '../public/peking.png';
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    const scrollDownOneScreen = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <div className="flex flex-col justify-center items-center p-4 bg-gray-100 w-full">

            <div className="text-2xl font-bold mb-4 text-center">
                Sino Foods Cooking Instructions
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center space-y-4 md:space-y-0 md:space-x-10 w-full">
                <Link href="/peking" onClick={scrollDownOneScreen} className="hover:filter-drop-shadow">
                    <Image
                        src={peking}
                        alt="Peking"
                        width={100}
                        height={100}
                        priority
                        className="drop-shadow-lg hover:drop-shadow-xl"
                    />
                </Link>
                <Link href="/pizzamia" onClick={scrollDownOneScreen} className="hover:filter-drop-shadow">
                    <Image
                        src={pizzaMia}
                        alt="Pizza Mia"
                        width={100}
                        height={100}
                        priority
                        className="drop-shadow-lg hover:drop-shadow-xl"

                    />
                </Link>
                <Link href="/koreanfood" onClick={scrollDownOneScreen} className="hover:filter-drop-shadow">
                    <Image
                        src={koreanFood}
                        alt="Korean Food"
                        width={100}
                        height={100}
                        priority
                        className="drop-shadow-lg hover:drop-shadow-xl"
                    />
                </Link>
                <Link href="/boba" onClick={scrollDownOneScreen} className="hover:filter-drop-shadow">
                    <Image
                        src={boba}
                        alt="Boba"
                        width={100}
                        height={100}
                        priority
                        className="drop-shadow-lg hover:drop-shadow-xl"
                    />
                </Link>
                <Link href="/miiwa" onClick={scrollDownOneScreen} className="hover:filter-drop-shadow">
                    <Image
                        src={miiwa}
                        alt="Miiwa"
                        width={100}
                        height={100}
                        priority
                        className="drop-shadow-lg hover:drop-shadow-xl"
                    />
                </Link>

            </div>
        </div >
    )
}