"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderCog, Home, Mail, User2Icon } from "lucide-react";

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "bg-primary rounded-[var(--radius)] shadow-lg shadow-black/25"
      : "hover:text-destructive duration-300";
  };
  return (
    <div className="z-50 flex flex-col justify-center items-center fixed top-0 w-full py-2">
      <div className="mt-2 flex w-max flex-wrap justify-center items-center space-x-3 rounded-[var(--radius)] shadow-lg shadow-black/30 bg-[#4e535324] border border-muted p-2 backdrop-blur">
        <Link href="/" passHref>
          <div
            className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive(
              "/"
            )}`}
          >
            <div className="md:hidden flex">
              <Home />
            </div>
            <div className="hidden md:flex">Home</div>
          </div>
        </Link>

        <Link href="/projects" passHref>
          <div
            className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive(
              "/projects"
            )}`}
          >
            <div className="md:hidden flex">
              <FolderCog />
            </div>
            <div className="hidden md:flex">Projects</div>
          </div>
        </Link>

        <Link href="/experience" passHref>
          <div
            className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive(
              "/experience"
            )}`}
          >
            <div className="md:hidden flex">
              <User2Icon />
            </div>
            <div className="hidden md:flex">Experience</div>
          </div>
        </Link>

        <Link href="/contact" passHref>
          <div
            className={`flex justify-center items-center font-semibold md:px-4 md:text-lg px-4 py-1 ${isActive(
              "/contact"
            )}`}
          >
            <div className="md:hidden flex">
              <Mail />
            </div>
            <div className="hidden md:flex">Contact Me</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
