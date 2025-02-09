"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const Navbar = () => {
    const router = useRouter();

    const handleHomeClick = () => {
        router.push("/");
    };

    return (
        <header className="w-full absolute z-10">
            <nav className="bg-gradient-to-r from-zinc-800 to-zinc-900 mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <div>
                    <Link href="https://www.marvel.com/" className="flex justify-center items-center">
                        <Image src="/logo.svg" alt="Marvel Logo" width={200} height={30} className="object-contain" />
                    </Link>
                </div>
                <div>
                    <CustomButton 
                        title="Home" 
                        btnType="button" 
                        containerStyles="text-black rounded-full bg-gray-400 min-w-[130px]" 
                        handleClick={handleHomeClick}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;