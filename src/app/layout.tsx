import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quran | Dashboard</title>

        {/* Meta SEO */}
        <meta
          name="title"
          content="Quran | Dashboard"
        />
        <meta
          name="description"
          content="Quran Apps For Everyone"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Themesberg" />

        {/* Social media share */}
        <meta
          property="og:title"
          content="Landwind - Tailwind CSS Landing Page"
        />
        <meta property="og:site_name" content="Themesberg" />
        {/* <meta
          property="og:url"
          content="https://demo.themesberg.com/landwind/"
        /> */}
        <meta
          property="og:description"
          content="Get started with a free and open-source landing page for Tailwind CSS built with the Flowbite component library featuring dark mode, hero sections, pricing cards, and more."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://themesberg.s3.us-east-2.amazonaws.com/public/github/landwind/og-image.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@themesberg" />
        <meta name="twitter:creator" content="@themesberg" />

        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        /> */}
        <link rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link href="./output.css" rel="stylesheet" />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </head>
      <body className={inter.className}>{children}
        
      {footerClass()}
      </body>
    </html>
  );

  function footerClass() {
    return (
      <>
        <footer className="bg-white dark:bg-gray-800">
          <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Developer</h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="https://github.com/DimzsArdiminda/quran-me" className="hover:underline">Source Code</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Careers</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Brand Center</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Developer</h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="https://equran.id/apidev/v2" className="hover:underline">API</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Twitter</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Facebook</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Privacy Policy</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Licensing</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Terms</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">About</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Careers</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Brand Center</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h3>
                <ul className="text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">iOS</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Android</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">Windows</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="hover:underline">MacOS</Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="text-center">
              <Link href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                <img src="./images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                Landwind
              </Link>
              <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
                © 2021-2022 Landwind™. All Rights Reserved. Built with
                <Link href="https://flowbite.com" className="text-purple-600 hover:underline dark:text-purple-500">Flowbite</Link> and
                <Link href="https://tailwindcss.com" className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</Link>.
                Distributed by
                <Link href="https://themewagon.com/" className="text-purple-600 hover:underline dark:text-purple-500">ThemeWagon</Link>
              </span>
              <ul className="flex justify-center mt-5 space-x-5">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.08 2.525c.636-.247 1.363-.416 2.427-.465C8.566 2.013 8.921 2 11.35 2h.63zm-1.62 1.802c-2.403 0-2.688.01-3.63.053-.924.042-1.426.205-1.76.341-.443.172-.76.378-1.093.71a3.098 3.098 0 00-.71 1.093c-.136.334-.299.836-.341 1.76-.043.943-.053 1.228-.053 3.63v.63c0 2.403.01 2.688.053 3.63.042.924.205 1.426.341 1.76.172.443.378.76.71 1.093.334.336.65.539 1.093.71.334.136.836.299 1.76.341.943.043 1.228.053 3.63.053h.63c2.403 0 2.688-.01 3.63-.053.924-.042 1.426-.205 1.76-.341.443-.172.76-.378 1.093-.71.336-.334.539-.65.71-1.093.136-.334.299-.836.341-1.76.043-.943.053-1.228.053-3.63v-.63c0-2.403-.01-2.688-.053-3.63-.042-.924-.205-1.426-.341-1.76a3.098 3.098 0 00-.71-1.093 3.098 3.098 0 00-1.093-.71c-.334-.136-.836-.299-1.76-.341-.943-.043-1.228-.053-3.63-.053h-.63zm0 4.542a5.931 5.931 0 110 11.862 5.931 5.931 0 010-11.862zm0 1.802a4.13 4.13 0 100 8.26 4.13 4.13 0 000-8.26zm5.843-.653a1.386 1.386 0 110 2.772 1.386 1.386 0 010-2.772zm0 1.802a.416.416 0 100 .832.416.416 0 000-.832z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2.04c-5.524 0-10 4.477-10 10 0 4.411 2.882 8.156 6.84 9.467.5.092.683-.217.683-.482 0-.237-.01-1.026-.014-1.857-2.782.604-3.37-1.342-3.37-1.342-.454-1.152-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.03-2.68-.104-.253-.446-1.27.098-2.645 0 0 .84-.27 2.75 1.025a9.565 9.565 0 012.504-.337c.85.004 1.71.115 2.504.337 1.91-1.295 2.75-1.025 2.75-1.025.544 1.375.202 2.392.1 2.645.64.7 1.03 1.59 1.03 2.68 0 3.842-2.337 4.687-4.564 4.936.36.31.68.917.68 1.848 0 1.336-.012 2.416-.012 2.745 0 .267.18.58.688.481A9.993 9.993 0 0022 12.04c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
