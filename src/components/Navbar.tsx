import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="bg-gray-900  mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <div>
                    <Link href="/" className="flex justify-center items-center">
                        <Image src="/logo.svg" alt="Marvel Logo" width={200} height={30} className="object-contain" />
                    </Link>
                </div>
                <div>
                    <CustomButton title="Sign in" btnType="button" containerStyles="text-black rounded-full bg-gray-400 min-w-[130px]" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar