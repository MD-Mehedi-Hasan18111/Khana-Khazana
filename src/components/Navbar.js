import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Learn_With_Sumit_Logo"
            className="w-[115] h-[40px]"
            width={115}
            height={40}
          />
        </Link>

        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
