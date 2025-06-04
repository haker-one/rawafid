import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Menu } from "lucide-react";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "خدماتنا" },
  { href: "/vision", label: "رؤيتنا" },
  { href: "/contact", label: "تواصل معنا" }
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b-2 border-islamic-green sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-reverse space-x-4">
            <Link href="/" className="flex items-center">
              <Moon className="text-islamic-green text-2xl ml-2" />
              <h1 className="text-2xl font-amiri font-bold text-islamic-green arabic-text-shadow">روافــد</h1>
              <span className="text-sm text-ocean-blue mr-2 font-tajawal">منصة النهضة الإسلامية</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-reverse space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`font-tajawal transition-colors cursor-pointer ${
                  location === item.href 
                    ? "text-islamic-green font-semibold" 
                    : "text-ocean-blue hover:text-islamic-green"
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <span className={`font-tajawal text-lg transition-colors cursor-pointer block py-2 ${
                      location === item.href 
                        ? "text-islamic-green font-semibold" 
                        : "text-ocean-blue hover:text-islamic-green"
                    }`}>
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
