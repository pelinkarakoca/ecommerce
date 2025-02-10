import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterDefault() {
  return (
    <footer className="w-full border-y-1 pt-14 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Bar with Logo and Social */}
        <div className="flex justify-between items-center mb-16">
          <Link to="/" className="text-[#252b42] text-2xl font-bold">
            BrandName
          </Link>
          <div className="flex items-center gap-5">
            <Link to="#" className="text-[#23a6f0] hover:opacity-80">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-[#23a6f0] hover:opacity-80">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link to="#" className="text-[#23a6f0] hover:opacity-80">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#252b42] font-bold text-lg mb-2">
              Company Info
            </h3>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              About Us
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Carrier
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              We are hiring
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Blog
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#252b42] font-bold text-lg mb-2">Legal</h3>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              About Us
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Carrier
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              We are hiring
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Blog
            </Link>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#252b42] font-bold text-lg mb-2">Features</h3>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Business Marketing
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              User Analytic
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Live Chat
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Unlimited Support
            </Link>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#252b42] font-bold text-lg mb-2">Resources</h3>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              IOS & Android
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Watch a Demo
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              Customers
            </Link>
            <Link to="#" className="text-[#737373] hover:text-[#252b42]">
              API
            </Link>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#252b42] font-bold text-lg mb-2">
              Get In Touch
            </h3>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-[#f9f9f9] border-[#e6e6e6] text-[#737373]"
              />
              <Button className="bg-[#23a6f0] hover:bg-[#23a6f0]/90 text-white">
                Subscribe
              </Button>
              <p className="text-[#737373] text-sm">Lorem ipsum dolor amit</p>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-foreground-muted">
          <p className="text-[#737373]">
            Made With Love By Figmaland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
