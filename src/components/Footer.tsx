"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="w-full bg-neutral-400 py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-start px-4 h-28">
        <div className="text-md font-semibold text-white text-muted-foreground">
          © {config.blog.copyright} {new Date().getFullYear()}
        </div>
        <div className="text-sm text-white text-muted-foreground hidden lg:block">
          <Link
            href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
          >
            {/* Blog powered by wisp */}
          </Link>
        </div>
      </div>
    </footer>
    // <section className="mt-8 md:mt-16 mb-12 px-4 bg-neutral-300">
    //   <div className="flex items-center justify-between ">
    //     <div className="text-sm text-muted-foreground">
    //       © {config.blog.copyright} {new Date().getFullYear()}
    //     </div>
    //     <div className="text-xs text-muted-foreground hidden lg:block">
    //       <Link
    //         href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
    //       >
    //         {/* Blog powered by wisp */}
    //       </Link>
    //     </div>

    //   </div>
    //   <div className="text-xs text-muted-foreground lg:hidden">
    //     <Link
    //       href={`https://wisp.blog/?utm_source=next-js-template&utm_medium=web&utm_campaign=${config.baseUrl}`}
    //     >
          
    //     </Link>
    //   </div>
    // </section>
  );
};
