"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/test", label: "Test" },
  { href: "/university", label: "University" },
  { href: "/jobs", label: "Jobs" },
  { href: "/policy", label: "Policy" },
  { href: "/about-us", label: "About us" },
];

export default function NavbarPage() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userUUID] = useState("");

  return (
    <div className="w-full bg-slate-50">
      <header className="flex items-center justify-between py-4 px-4 md:px-6 lg:px-8  mx-auto">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6 lg:space-x-8">
          {/* Logo */}
          {userUUID === "" ? (
            <Link
              href="/"
              className="text-lg lg:text-xl text-green-700 font-bold"
            >
              Logo
            </Link>
          ) : (
            <div>
              <Image
                src="/logo.png"
                alt="Logo"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          )}

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base lg:text-lg ${
                  pathname === link.href
                    ? "text-green-700 font-bold  border-green-700"
                    : "text-gray-800 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Language Selector and Sign-in */}
        <div className="hidden md:block lg:flex items-center space-x-6">
          {/* LanguageSelector hidden on md (iPad) */}
          <LanguageSelector />
          {/* Sign in button */}
          <Link
            href="/login"
            className="bg-emerald-500 text-white text-base lg:text-lg rounded-xl px-5 py-2"
          >
            Sign in
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="w-full md:hidden px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base ${
                  pathname === link.href
                    ? "text-green-700 font-bold"
                    : "text-gray-800 hover:text-green-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <LanguageSelector />
            <Link
              href="/login"
              className="bg-emerald-500 text-white text-base rounded-xl px-4 py-2"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function LanguageSelector() {
  return (
    <div className="flex md:hidden lg:flex items-center space-x-4">
      <LanguageOption flag="/assets/khmer-flag.png" label="Khmer" />
      <div className="h-6 border-l border-slate-400"></div>
      <LanguageOption flag="/assets/english-flag.png" label="English" />
    </div>
  );
}

function LanguageOption({ flag, label }: { flag: string; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src={flag}
        alt={`${label} flag`}
        width={24}
        height={24}
        className="w-6 h-6 object-cover rounded-full"
      />
      <span className="text-base lg:text-lg text-gray-800">{label}</span>
    </div>
  );
}
