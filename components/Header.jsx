import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-6 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-6">
          {/* logo */}
          <Link href="/">
          <div className="w-full flex items-center  text-center lg:text-center">
            <Image width={60} height={60} className="w-16 h-16" alt="logo"
              src="/logo.png" />
           
              <h1 className="text-3xl sm:text-4xl whitespace-nowrap">
                <span className="font-extrabold">Abdullah</span>{" "}
                Bilal<span className="text-red-600 font-bold">.</span>
              </h1>
          </div>
          </Link>

          {/* socials */}
          <div className="w-full flex justify-center lg:justify-center">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
