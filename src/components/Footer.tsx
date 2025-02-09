import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-zinc-800 to-zinc-900 flex flex-col text-white-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="Marvel Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-white">
            Marvel Heroes App 2025
            <br />
            Full Stack Jr Developer Trial
            <br />
            Joaquín Pérez Campos.
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h2 className="font-bold">{link.title}</h2>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 text-white">
        <p>@2024 - Marvel Heroes App. All rights reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/"
            className="text-gray-500">Privacy Policy
          </Link>
          <Link href="/"
            className="text-gray-500">Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
