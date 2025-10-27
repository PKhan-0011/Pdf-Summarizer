"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathName = usePathname(); // mugeh isse like pathName mil jayega jaise kon se path m hai ham, actaully..

  const isActive =
    pathName === href || (href !== "/" && pathName.startsWith("href"));

  return (
    <div>
      <Link
        href={href}
        className={cn(
          "transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500 ",
          className,
          isActive && "text-rose-500"
        )}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
