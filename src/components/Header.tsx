"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  // {name: "Projects", href: "/projects"},

  { name: "About", href: "/about" },
  {name: "Contact", href: "/contact"},
  // {name: "Services", href: "/services"},
  {name: "Cabinetry", href: "/cabinetry"},
  {name: "Counter Tops", href: "/counter-tops"},
  // {name: "Brands", href: "/brands"},
  // {name: "Products", href: "/products"},


];
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex items-center px-4">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900 text-2xl font-nokora",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12 mx-6">
      <Link href="/" className="relative flex items-center">
        <Image
            src="/images/header.png"
            alt="Modern kitchens miami"
            objectFit="contain"
            width={200}
            height={100}
            className="object-contain"
        />
        <div className=" bg-red-500 text-white text-md font-bold px-3 py-1">
          Nationwide
        </div>
      </Link>
      <Navigation />
    </section>
  );
};
