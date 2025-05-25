"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { ShoppingCart } from "lucide-react";

function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
  ];
  return (
    <Container>
      <div className='flex mt-3 justify-between'>
        <div>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              className={`mr-4 ${pathname === item.href ? "text-sky-500" : ""}`}
              href={item.href}
            >
              {" "}
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/cart">
            <ShoppingCart />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
