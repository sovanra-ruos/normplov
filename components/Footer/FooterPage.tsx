import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function FooterPage() {
  return (
    <footer className="border-t py-4   bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4 ">
          {/* Logo and Description */}
          <div className="flex justify-center">
            <div className="space-y-4">
              <Link href="/" className="text-emerald-500 text-xl font-semibold">
                Logo
              </Link>
              <p className="text-textprimary block md:hidden lg:block text-md leading-relaxed">
                Norm Plov is a website that helps individuals better understand
                themselves and make effective decisions in pursuing their
                current and future careers.
              </p>
              <p className="text-textprimary hidden md:block lg:hidden text-md leading-relaxed">
              Norm Plov is a website that helps individuals understand themselves and make informed career decisions.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-start md:justify-center lg:justify-center ">
            <div>
              <h3 className="font-semibold text-2xl mb-4 text-textprimary">Content</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    className="text-textprimary hover:text-emerald-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/test"
                    className="text-textprimary hover:text-emerald-500"
                  >
                    Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/university"
                    className="text-textprimary hover:text-emerald-500"
                  >
                    University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jobs"
                    className="text-textprimary hover:text-emerald-500"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policy"
                    className="text-textprimary hover:text-emerald-500"
                  >
                    Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-textprimary hover:text-emerald-500"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex justify-start md:justify-center lg:justify-center">
            <div>
              <h3 className="font-semibold text-2xl mb-4 text-textprimary">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-emerald-500 mt-1" />
                  <div>
                    <p className="text-textprimary">+855978443615</p>
                    <p className="text-gray-500 text-sm">Support Number</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-emerald-500 mt-1" />
                  <div>
                    <p className="text-textprimary">normplov@gmail.com</p>
                    <p className="text-gray-500 text-sm">Support Email</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-500 mt-1" />
                  <div>
                    <p className="text-textprimary">Khan Toul Kork, Phnom</p>
                    <p className="text-textprimary">Penh. Cambodia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex justify-start md:justify-center lg:justify-center">
            <div>
              <h3 className="font-semibold text-2xl mb-4 text-textprimary">Our Sponsor</h3>
              <div className="lg:space-y-4 md:space-y-4 space-y-0  flex md:block lg:block  ">
                <Image
                  src="/assets/MPTC-logo.jpg"
                  alt="Partner logo 1"
                  width={200}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src="/assets/CBRD-logo.jpg"
                  alt="Partner logo 2"
                  width={200}
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t text-center text-textprimary">
          <p>
            2024 Copyright NormPlov by{" "}
            <span className="text-green-700">
              <Link href="https://www.cstad.edu.kh/">ISTAD</Link>
            </span>
            . All rights reserved.™
          </p>
        </div>
      </div>
    </footer>
  );
}
