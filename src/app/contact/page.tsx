// import { BlogPostsPreview } from "@/components/BlogPostPreview";
// import { BlogPostsPagination } from "@/components/BlogPostsPagination";
// import { Footer } from "@/components/Footer";
// import { Header } from "@/components/Header";
// import { wisp } from "@/lib/wisp";

// const Page = async ({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) => {
//   const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
//   const result = await wisp.getPosts({ limit: 6, page });
//   return (
//     <div className="container mx-auto px-5 mb-10">
//       <Header />




//       {/* <BlogPostsPreview posts={result.posts} />
//       <BlogPostsPagination pagination={result.pagination} /> */}
//       <Footer />
//     </div>
//   );
// };

// export default Page;



import {BlogPostsPreview} from "@/components/BlogPostPreview";
import {BlogPostsPagination} from "@/components/BlogPostsPagination";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {wisp} from "@/lib/wisp";
import Image from 'next/image';

const Page = async ({
    searchParams,
}: {
    searchParams: {[key: string]: string | string[] | undefined};
}) => {
    const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
    const result = await wisp.getPosts({limit: 6, page});

    return (
        <div className="container mx-auto px-5 mb-10 border">
            <Header />

            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center h-[80vh] bg-gray-100 text-center">
                <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                        src="/images/kitchen.jpg" // Replace with your image path
                        alt="Furniture Display"
                        layout="fill"
                        objectFit="cover"
                        // quality={100}
                        className="opacity-80"
                    />
                </div>

                {/* <div className="relative z-10 max-w-lg p-10 bg-white bg-opacity-90">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">SALE</h1>
          <p className="text-xl text-gray-700 mb-6">
            Incredible deals. Top-of-the-line design for less.
          </p>
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
            See our big sale
          </button>
        </div> */}
            </div>

            <Footer />
        </div>
    );
};

export default Page;
