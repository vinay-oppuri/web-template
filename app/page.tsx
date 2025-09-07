"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Home = () => {
  const [mounted, setMounted] = useState(false)

  const navitems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const toater = () => {
    toast("Toast Successful...")
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">
        <div className="font-bold">Logo</div>

        <nav className="flex items-center border px-8 py-4 rounded-full gap-6">
          {navitems.map((item) => (
            <a
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild className="rounded-full">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </header>

      <div className="font-sans min-h-screen flex flex-col items-center justify-center px-8 pt-24 sm:px-20">
        <main className="flex flex-col gap-8 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>

            <Button variant="outline" onClick={toater} className="rounded-full">
              Toast
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;