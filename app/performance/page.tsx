import Image from "next/image";
import Link from "next/link";

export default function Performance() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-8 sm:p-12 md:p-20">
      <div className="w-full max-w-5xl mx-auto">
        <nav className="flex flex-col w-full mb-6">
          <h1 className="text-2xl font-bold font-[family-name:var(--font-geist-sans)] mb-3">IndexNavigator</h1>
          <div className="flex gap-6 items-center">          
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-[family-name:var(--font-geist-sans)] text-sm text-[var(--primary-solid)] transition-colors hover:text-[var(--primary-gradient-from)]"
              href="/"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Home icon"
                width={16}
                height={16}
                className="text-[var(--primary-solid)]"
              />
              Home
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-[family-name:var(--font-geist-sans)] text-sm text-[var(--primary-solid)] transition-colors hover:text-[var(--primary-gradient-from)]"
              href="/faq"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
                className="text-[var(--primary-solid)]"
              />
              FAQ
            </Link>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-[family-name:var(--font-geist-sans)] text-sm text-[var(--primary-solid)] transition-colors hover:text-[var(--primary-gradient-from)]"
              href="https://ct.spotware.com/copy/strategy/100843"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Start IndexNavigator
            </a>
          </div>
        </nav>
        
        <main className="flex flex-col gap-[24px] w-full">
          <div className="py-4 px-6 border-l-4 border-[var(--primary-solid)] bg-gradient-to-r from-white to-gray-50 rounded-sm shadow-sm max-w-2xl w-full mx-auto sm:mx-0">
            <p className="text-xl font-semibold mb-2 font-[family-name:var(--font-geist-sans)] tracking-tight">Weekly Performance</p>
            <p className="text-sm">
              Track IndexNavigator's real trading performance on DAX and S&P 500 markets, updated weekly.
            </p>
          </div>          
          
          <div className="grid grid-cols-1 gap-3 mt-3 max-w-2xl w-full mx-auto sm:mx-0">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">Week of May 3 - 9, 2025</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm/6 border-b border-gray-100 pb-1">
                  <span>DAX 40</span>
                  <span className="font-semibold text-green-600">+2.8%</span>
                </div>
                <div className="flex justify-between items-center text-sm/6 border-b border-gray-100 pb-1">
                  <span>S&P 500</span>
                  <span className="font-semibold text-green-600">+1.6%</span>
                </div>
                <div className="flex justify-between items-center text-sm/6 pt-1">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-green-600">+2.1%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Trade count: 27 | Win rate: 76%</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">Week of April 26 - May 2, 2025</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm/6 border-b border-gray-100 pb-1">
                  <span>DAX 40</span>
                  <span className="font-semibold text-green-600">+1.9%</span>
                </div>
                <div className="flex justify-between items-center text-sm/6 border-b border-gray-100 pb-1">
                  <span>S&P 500</span>
                  <span className="font-semibold text-red-600">-0.4%</span>
                </div>
                <div className="flex justify-between items-center text-sm/6 pt-1">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-green-600">+0.8%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Trade count: 22 | Win rate: 68%</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">Week of April 19 - 25, 2025</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm/6 border-b border-gray-100 pb-1">
                  <span>DAX 40</span>
                  <span className="font-semibold text-green-600">+3.2%</span>
                </div>
                <div className="flex justify-between items-center text-sm/6 border-b border-gray-100 pb-1">
                  <span>S&P 500</span>
                  <span className="font-semibold text-green-600">+1.8%</span>
                </div>
                <div className="flex justify-between items-center text-sm/6 pt-1">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-green-600">+2.4%</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Trade count: 31 | Win rate: 81%</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">Monthly Performance Summary</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1">DAX 40</h3>
                  <div className="flex flex-col gap-1 text-xs">
                    <div className="flex justify-between">
                      <span>April 2025:</span>
                      <span className="font-semibold text-green-600">+7.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>March 2025:</span>
                      <span className="font-semibold text-green-600">+5.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>YTD:</span>
                      <span className="font-semibold text-green-600">+18.4%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">S&P 500</h3>
                  <div className="flex flex-col gap-1 text-xs">
                    <div className="flex justify-between">
                      <span>April 2025:</span>
                      <span className="font-semibold text-green-600">+4.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>March 2025:</span>
                      <span className="font-semibold text-green-600">+3.9%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>YTD:</span>
                      <span className="font-semibold text-green-600">+12.6%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center sm:justify-start">          
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-[var(--primary-gradient-from)] to-[var(--primary-gradient-to)] text-white gap-2 hover:opacity-90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto font-[family-name:var(--font-geist-sans)] shadow-sm"
              href="https://ct.spotware.com/copy/strategy/100843"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Trading Now
            </a>
          </div>
        </main>
      </div>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full max-w-5xl">
        <p className="text-xs text-gray-500">© 2025 <span className="text-[var(--primary-solid)]">IndexNavigator</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}
