import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-8 sm:p-12 md:p-20">
      <div className="w-full max-w-5xl mx-auto">        <nav className="flex flex-col w-full mb-6">
          <h1 className="text-2xl font-bold font-[family-name:var(--font-geist-sans)] mb-3">IndexNavigator</h1>          <div className="flex gap-6 items-center">            <Link
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
              href="https://t.me/indexnavigator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/telegram.svg"
                alt="Telegram icon"
                width={16}
                height={16}
              />
              Telegram
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-[family-name:var(--font-geist-sans)] text-sm text-[var(--primary-solid)] transition-colors hover:text-[var(--primary-gradient-from)]"
              href="https://ct.spotware.com/copy/strategy/100843"
              target="_blank"
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
            <p className="text-xl font-semibold mb-2 font-[family-name:var(--font-geist-sans)] tracking-tight">Automated Trading in DAX & S&P 500, Perfected</p>
            <p className="text-sm">
              IndexNavigator is a fully autonomous trading bot focused on the DAX and S&P 500. Built for consistency and security, it delivers verified results through real-time market execution.
            </p>
          </div>          
            <h2 className="text-xl font-bold mt-4 font-[family-name:var(--font-geist-sans)]">Key Features</h2>
          <div className="grid grid-cols-1 gap-3 mt-3 max-w-2xl w-full mx-auto sm:mx-0">
            <div className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="mb-1">
                <span className="font-semibold text-sm/6">→ Live Market Performance</span>
              </div>                <p className="text-sm/6">
                No simulations—real trades, real results.
                </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="mb-1">
                <span className="font-semibold text-sm/6">→ Precision Algorithms</span>
              </div>
              <p className="text-sm/6">Tailored to DAX & S&P 500 behavior using proven technical signals.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="mb-1">
                <span className="font-semibold text-sm/6">→ 24/5 Automated Execution</span>
              </div>
              <p className="text-sm/6">Runs during pre-market and market hours with no manual input.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="mb-1">
                <span className="font-semibold text-sm/6">→ Built-In Risk Management</span>
              </div>
                <p className="text-sm/6">
                Every position includes a stop-loss. No use of martingale or other high-risk tactics.{" "}
                <a
                  href="/faq#risk-management"
                  className="text-[var(--primary-solid)] hover:underline hover:underline-offset-4 transition-colors hover:text-[var(--primary-gradient-from)]"
                >
                  Learn about risk management.
                </a>
                </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="mb-1">
                <span className="font-semibold text-sm/6">→ Volatility-Adaptive Logic</span>
              </div>
              <p className="text-sm/6">Adjusts to market conditions to maintain strategy integrity.</p>
            </div>
          </div>
          
          <h2 className="text-xl font-bold mt-6 font-[family-name:var(--font-geist-sans)]">Market Focus</h2>        
          <ul className="list-disc list-inside text-sm/6 text-left mb-6">
            <li className="mb-2 tracking-[-.01em]">
              <span className="font-semibold">DAX 40 (Germany):</span> Optimized for European session.
            </li>
            <li className="tracking-[-.01em]">
              <span className="font-semibold">S&P 500 (US):</span> Targets intraday & swing trades during US hours.
            </li>
          </ul>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center sm:justify-start">          
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-[var(--primary-gradient-from)] to-[var(--primary-gradient-to)] text-white gap-2 hover:opacity-90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto font-[family-name:var(--font-geist-sans)] shadow-sm"
              href="https://ct.spotware.com/copy/strategy/100843"
              target="_blank"
              rel="noopener noreferrer"
            >
              Experience Live Trading
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
