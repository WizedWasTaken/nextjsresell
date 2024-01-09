// NavLinks.tsx
"use client";

import { HomeIcon, CogIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { NavLinkProps } from "@/app/lib/definitions";

export default function NavLinks({ isHovered }: NavLinkProps) {
  return (
    <>
      <Link href="/">
        <p className="flex items-center space-x-2">
          <HomeIcon className="h-5 w-5" />
          {isHovered && <span>Hjem</span>}
        </p>
      </Link>
      <Link href="/settings">
        <p className="flex items-center space-x-2">
          <CogIcon className="h-5 w-5" />
          {isHovered && <span>Indstillinger</span>}
        </p>
      </Link>
      <Link href="/about">
        <p className="flex items-center space-x-2">
          <UserIcon className="h-5 w-5" />
          {isHovered && <span>Ansatte</span>}
        </p>
      </Link>
    </>
  );
}
