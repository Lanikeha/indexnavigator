import Image from "next/image";
import Link from "next/link";

export default function FAQ() {
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
              />              Home
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-[family-name:var(--font-geist-sans)] text-sm text-[var(--primary-solid)] transition-colors hover:text-[var(--primary-gradient-from)]"
              href="/performance"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/chart.svg"
                alt="Chart icon"
                width={16}
                height={16}
                className="text-[var(--primary-solid)]"
              />
              Performance
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
            <p className="text-xl font-semibold mb-2 font-[family-name:var(--font-geist-sans)] tracking-tight">Frequently Asked Questions</p>
            <p className="text-sm">
              Find answers to the most common questions about IndexNavigator, its trading approach, and how to get started.
            </p>
          </div>          
          
          <div className="grid grid-cols-1 gap-3 mt-3 max-w-2xl w-full mx-auto sm:mx-0">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">What is IndexNavigator?</span>
              </div>
              <p className="text-sm/6">
                IndexNavigator is a fully autonomous trading bot that focuses exclusively on the DAX and S&P 500 indexes. It uses proprietary algorithms to identify and execute trades without any manual intervention required.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">How does IndexNavigator manage risk?</span>
              </div>
              <p className="text-sm/6">
                Every position opened by IndexNavigator includes a built-in stop-loss to limit potential downside. The algorithm does not use martingale strategies or other high-risk tactics that could lead to significant account drawdowns.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">When does IndexNavigator trade?</span>
              </div>
              <p className="text-sm/6">
                IndexNavigator operates 24/5 during market hours, including pre-market sessions. It's designed to identify opportunities in both European and US trading sessions, optimized specifically for each market's characteristics.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">What's the minimum investment required?</span>
              </div>
              <p className="text-sm/6">
                While IndexNavigator can work with accounts of various sizes, we recommend a minimum of $10,000 for optimal performance. This allows for proper risk management and position sizing according to the algorithm's design.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
              <div className="mb-2">
                <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">How can I start using IndexNavigator?</span>
              </div>
              <p className="text-sm/6">
                You can start using IndexNavigator today by clicking the "Experience Live Trading" button on our homepage. This will take you to our platform where you can connect your trading account and begin automated trading immediately.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center sm:justify-start">          
            <Link
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-[var(--primary-gradient-from)] to-[var(--primary-gradient-to)] text-white gap-2 hover:opacity-90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto font-[family-name:var(--font-geist-sans)] shadow-sm"
              href="/"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </div>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full max-w-5xl">
        <p className="text-xs text-gray-500">© 2025 <span className="text-[var(--primary-solid)]">IndexNavigator</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}
