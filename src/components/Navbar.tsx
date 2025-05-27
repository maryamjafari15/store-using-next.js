"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { ShoppingCart } from "lucide-react";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

function Navbar() {
  const pathname = usePathname();
  const { cartTotalQty } = useShoppingCartContext();

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
        <div className='flex justify-center items-center gap-1 mr-1'>
         
          <Link href='/cart'>
            <ShoppingCart />
          </Link>
          <span className='px-3 py-1 bg-sky-100 rounded-full'>{cartTotalQty}</span>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
