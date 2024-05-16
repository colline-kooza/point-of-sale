import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] ">
      <main className="flex-1 ">
      <section className="relative w-full py-28 md:py-24 lg:py-32  xl:py-40 overflow-hidden bg-3">
  {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none"></div> */}
  {/* <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('pos-5.jpg')", opacity: "0.3" }}></div> */}
  
  <div className="container relative z-10 px-4 md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="space-y-5">
        <h1 className="text-3xl leading-9 font-black tracking-normal sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900 dark:text-white lg:w-[1000px]">
        The most comprehensive Sales Management Platform
        </h1>
        <p className="mx-auto max-w-[800px] font-medium dark:font-medium text-gray-800 md:text-lg dark:text-gray-200 text-sm">
          Efficient tools and customizable components for managing your sales seamlessly. Improve customer experiences and boost sales performance.
        </p>
      </div>
      <div className="space-x-5">
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 py-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/contact"
        >
          Contact us
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 py-5 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="/dashboard/order-line"
        >
         Demo Account
        </Link>
      </div>
    </div>
  </div>
</section>


        <section className="w-full lg:py-12  py-8 bg-gray-50 dark:bg-gray-950 lg:px-[6rem] ">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 grid-cols-1 lg:grid-cols-[1fr_500px] lg:gap-12  xl:grid-cols-[1fr_550px] px-2">
              <img
                alt="Point of Sale Illustration"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/pos-2.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-10 ">
                <div className="space-y-6">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Efficiency
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Accelerate Sales Processes
                  </h2>
                  <p className="max-w-[600px]  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                    Empower your team with streamlined workflows, real-time analytics, and intuitive interfaces. Enhance productivity and drive revenue growth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/contact"
                  >
                    Contact Sales
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        </section>




        
    <div className="w-full dark:bg-gray-950 bg-gray-200 py-20  bg">
      <div className="container grid items-center gap-10 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-normal lg:tracking-normal sm:text-4xl md:text-4xl">Choose perfect plan</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed text-xs xl:text-sm/relaxed dark:text-gray-400">
            Start with a 14-day free trial. No credit card required.
          </p>
        </div>
        <div className="grid max-w-sm mx-auto gap-4 sm:grid-cols-3 sm:max-w-4xl sm:gap-6 lg:gap-4 xl:gap-6">
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-4 p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">Hobbyist</h3>
                <p className="text-gray-500 dark:text-gray-400">Perfect for experimenting with personal projects</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-extrabold tracking-tighter">0</span>
                  <span className="text-gray-500 translate-y-1 dark:text-gray-400">/month</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 border-t border-gray-200 dark:border-gray-800">
              <ul className="grid gap-2 text-sm text-gray-500 divide-y dark:text-gray-400 divide-gray-200">
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Unlimited projects</span>
                </li>
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Up to 5 team members</span>
                </li>
              </ul>

                <Button size="sm" variant="outline">
                <Link href="/dashboard/order-line">

                Choose Plan
                </Link>
              </Button> 
            
             
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-4 p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">Professional</h3>
                <p className="text-gray-500 dark:text-gray-400">For growing teams and businesses</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-extrabold tracking-tighter">20</span>
                  <span className="text-gray-500 translate-y-1 dark:text-gray-400">/month</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 border-t border-gray-200 dark:border-gray-800">
              <ul className="grid gap-2 text-sm text-gray-500 divide-y dark:text-gray-400 divide-gray-200">
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Unlimited projects</span>
                </li>
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Unlimited team members</span>
                </li>
              </ul>
                <Button size="sm" variant="outline">
              <Link href="/contact">
                Choose Plan
              </Link>
              </Button>
            
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden dark:border-gray-800 dark:bg-gray-950">
            <div className="flex flex-col gap-4 p-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tighter">Enterprise</h3>
                <p className="text-gray-500 dark:text-gray-400">Advanced features for large organizations</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-extrabold tracking-tighter">100</span>
                  <span className="text-gray-500 translate-y-1 dark:text-gray-400">/month</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-6 border-t border-gray-200 dark:border-gray-800">
              <ul className="grid gap-2 text-sm text-gray-500 divide-y dark:text-gray-400 divide-gray-200">
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">Unlimited projects</span>
                </li>
                <li className="flex items-center py-2">
                  <CheckIcon className="w-4 h-4 fill-current" />
                  <span className="ml-2 line-clamp-1">SSO and advanced security</span>
                </li>
              </ul>

              <Button size="sm" variant="outline">
              <Link href="/contact">
                Choose Plan
              </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </main>
    
    </div>
  );
}
