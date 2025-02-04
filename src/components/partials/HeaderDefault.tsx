"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Search, ShoppingCart } from "lucide-react";
//TODO renklerini değştir

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function HeaderDefault() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full border-b sticky top-0 left-0 bg-gray-50 z-999999999999">
      <div className="container flex h-16 items-center justify-between px-4 bg-gray-50">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#252b42]">BrandName</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#23a6f0]",
                    isActive("/") && "text-[#23a6f0]"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#23a6f0]">
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-3 p-4">
                    <li>
                      <Link
                        to="/shop/new"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shop/popular"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        Popular
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#23a6f0]",
                    isActive("/about") && "text-[#23a6f0]"
                  )}
                >
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/blog"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#23a6f0]",
                    isActive("/blog") && "text-[#23a6f0]"
                  )}
                >
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#23a6f0]",
                    isActive("/contact") && "text-[#23a6f0]"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/pages"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#23a6f0]",
                    isActive("/pages") && "text-[#23a6f0]"
                  )}
                >
                  Pages
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden md:block text-sm font-medium text-[#23a6f0] hover:underline"
          >
            Login / Register
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#23a6f0]">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#23a6f0] relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#23a6f0] text-[10px] font-medium text-white flex items-center justify-center">
                1
              </span>
              <span className="sr-only">Cart</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#23a6f0] relative"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#23a6f0] text-[10px] font-medium text-white flex items-center justify-center">
                1
              </span>
              <span className="sr-only">Wishlist</span>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-sm font-medium hover:text-[#23a6f0]"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="text-sm font-medium hover:text-[#23a6f0]"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-medium hover:text-[#23a6f0]"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="text-sm font-medium hover:text-[#23a6f0]"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-medium hover:text-[#23a6f0]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/pages"
                  className="text-sm font-medium hover:text-[#23a6f0]"
                  onClick={() => setIsOpen(false)}
                >
                  Pages
                </Link>
                <Link
                  to="/login"
                  className="text-sm font-medium text-[#23a6f0] hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Login / Register
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

HeaderDefault.displayName = "HeaderDefault";
