import Image from "next/image";
import Link from "next/link";

export default function Home() {  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 pb-24 gap-8 sm:p-12 sm:pb-28 md:p-20 md:pb-32">
      <div className="w-full max-w-5xl mx-auto"><nav className="flex flex-col w-full mb-6">
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
            </Link>            <a
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
              Telegram (weekly updates)
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
        
        <main className="flex flex-col gap-[24px] w-full">          <div className="py-4 px-6 border-l-4 border-[var(--primary-solid)] bg-gradient-to-r from-white to-gray-50 rounded-sm shadow-sm max-w-2xl w-full mx-auto sm:mx-0">
            <p className="text-xl font-semibold mb-2 font-[family-name:var(--font-geist-sans)] tracking-tight">Automated Trading in DAX & S&P 500, Perfected</p>
            <p className="text-sm">
              IndexNavigator is a fully autonomous long-biased trading bot focused on the DAX and S&P 500. Built for consistency and security, it delivers verified results through real-time market execution.{" "}
                <a
                href="/faq#why-share"
                className="text-[var(--primary-solid)] hover:underline hover:underline-offset-4 transition-colors hover:text-[var(--primary-gradient-from)]"
                >
                Why do you share algo that is profitable?
                </a>
            </p>
          </div>

          <h2 className="text-xl font-bold mt-6 font-[family-name:var(--font-geist-sans)]">2025 Monthly Performance</h2>
          <div className="bg-white rounded-lg border border-gray-200 max-w-2xl w-full mx-auto sm:mx-0 overflow-hidden">
            <div className="grid grid-cols-4 sm:grid-cols-9 gap-0.5 p-2">
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">Apr</span>
                <span className="text-sm font-bold text-green-600">44.8%</span>
              </div>
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">May</span>
                <span className="text-xs text-gray-400">31.2%</span>
              </div>
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">Jun</span>
                <span className="text-xs text-gray-400">Pending</span>
              </div>
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">Jul</span>
                <span className="text-xs text-gray-400"></span>
              </div>
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">Aug</span>
                <span className="text-xs text-gray-400"></span>
              </div>
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">Sep</span>
                <span className="text-xs text-gray-400"></span>
              </div>
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">Oct</span>
                <span className="text-xs text-gray-400"></span>
              </div>
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">Nov</span>
                <span className="text-xs text-gray-400"></span>
              </div>
              <div className="flex flex-col items-center py-2 px-1 rounded bg-gray-50">
                <span className="text-xs font-medium mb-1">Dec</span>
                <span className="text-xs text-gray-400"></span>
              </div>
            </div>            <div className="bg-gray-50 border-t border-gray-100 px-4 py-2 flex justify-between">
              <span className="text-sm font-semibold">All time:</span>              
              <span className="text-sm font-bold text-green-600">+90% ROI</span>            
            </div>          
          </div>
          <div className="text-xs text-gray-500 max-w-2xl w-full mx-auto sm:mx-0 -mt-3 text-right pr-4">
            6 April → last update: 23 May 2025
          </div>
          
          <h2 className="text-xl font-bold mt-6 font-[family-name:var(--font-geist-sans)]">Key Features</h2>
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
              <p className="text-sm/6">Tailored to DAX & S&P 500 behavior using trend following patterns.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="mb-1">
                <span className="font-semibold text-sm/6">→ 24/5 Automated Execution</span>
              </div>
              <p className="text-sm/6">Runs during pre-market and market hours with no manual input. 95% of the time does not leave positions overnight to reduce risk.</p>
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
            <div className="flex gap-4 items-center flex-col sm:flex-row w-full justify-center sm:justify-start mb-10 sm:mb-16">          
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gradient-to-r from-[var(--primary-gradient-from)] to-[var(--primary-gradient-to)] text-white gap-2 hover:opacity-90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto font-[family-name:var(--font-geist-sans)] shadow-sm"
              href="https://ct.spotware.com/copy/strategy/100843"
              target="_blank"
              rel="noopener noreferrer"
            >
              Experience Live Trading
            </a>          </div>
        </main>      </div>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center w-full max-w-5xl mt-16 pt-8 pb-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center max-w-3xl">
          <span className="font-semibold">Disclaimer:</span> Trading involves significant risk and is not suitable for all investors. Past performance is not indicative of future results. IndexNavigator's automated strategy carries specific risks related to algorithmic trading. The author does not provide any investing advice, and IndexNavigator is shared on the cTrader platform purely for educational purposes to demonstrate that it is possible to achieve positive returns using automated trading strategies. Any decisions you make based on information provided are at your own risk. The author is not responsible for any losses, damages, or other consequences resulting from trading activities or investment decisions.
          <br /><br />
          <span className="font-semibold">Learn more about trading risks:</span>{" "}
          <a href="https://www.cftc.gov/LearnAndProtect/riskresources" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-solid)] hover:underline">CFTC</a>{" "}|{" "}
          <a href="https://www.fca.org.uk/investsmart/understanding-high-risk-investments" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-solid)] hover:underline">FCA</a>{" "}|{" "}
          <a href="https://www.investor.gov/introduction-investing/investing-basics/investment-products" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-solid)] hover:underline">SEC</a>
        </p>
      </footer>
    </div>
  );
}
