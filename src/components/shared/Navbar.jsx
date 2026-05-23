"use client";
import React from "react";
import NavLink from "./Navlink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

import { Avatar, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const protectedLinks = [
    { href: "/add-room", label: "Add Room" },
    { href: "/my-listings", label: "My Listings" },
    { href: "/my-bookings", label: "My Bookings" },
  ];
  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms" },
  ];
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.error("Your Session in out");
    router.refresh();
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {publicLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            {user &&
              protectedLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}

            {!user && (
              <>
                <NavLink href={"/signin"}>Sign In</NavLink>
                <NavLink href={"/signup"}>Sign Up</NavLink>
              </>
            )}
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          StudyNook
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <ul className="menu menu-horizontal px-1">
            {publicLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            {user &&
              protectedLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
          </ul>
        </ul>
      </div>
      <div className="navbar-end gap-3 hidden lg:flex items-center">
        {user ? (
          <>
            <li className="flex flex-row-reverse items-center gap-3">
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
              </Avatar>
              <span className="font-medium">{user?.name}</span>
            </li>
            <li>
              <Button variant="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </li>
          </>
        ) : (
          <>
            <Link href={"/signin"} className="btn">
              Sign In
            </Link>
            <Link href={"/signup"} className="btn btn-warning">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
