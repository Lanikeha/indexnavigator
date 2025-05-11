"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function FAQPage() {
  // Add highlight effect when navigating with hash
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        // Scroll to the element
        element.scrollIntoView();
        
        // Add temporary highlight
        element.classList.add("bg-blue-50", "border-blue-200", "shadow-md");
        
        // Remove highlight after 2 seconds
        setTimeout(() => {
          element.classList.remove("bg-blue-50", "border-blue-200", "shadow-md");
        }, 2000);
      }
    }
  }, []);
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-8 sm:p-12 md:p-20">
      <div className="w-full max-w-5xl mx-auto">        <nav className="flex flex-col w-full mb-6">
          <Link href="/" className="inline-block">
            <h1 className="text-2xl font-bold font-[family-name:var(--font-geist-sans)] mb-3 hover:text-[var(--primary-solid)] transition-colors">IndexNavigator</h1>
          </Link>          <div className="flex gap-6 items-center">            <Link
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
              FAQ            </Link>
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
            <p className="text-xl font-semibold mb-2 font-[family-name:var(--font-geist-sans)] tracking-tight">Frequently Asked Questions</p>
            <p className="text-sm">
              Find answers to the most common questions about IndexNavigator, its trading approach, and how to get started.
            </p>
          </div>          
            <div className="grid grid-cols-1 gap-6 mt-3 max-w-2xl w-full mx-auto sm:mx-0">
            {/* About IndexNavigator Section */}
            <div>
              <h2 className="text-lg font-bold mb-3 font-[family-name:var(--font-geist-sans)] text-[var(--primary-solid)]">About IndexNavigator</h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="mb-2">
                    <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">What is IndexNavigator?</span>
                  </div>
                  <p className="text-sm/6">
                    IndexNavigator is a fully autonomous trading bot that focuses exclusively on the DAX and S&P 500 indexes. It uses proprietary algorithms to identify and execute trades without any manual intervention required. It is available for the cTrader platform, which is supported by popular brokers such as IC Markets, Pepperstone, FxPro, RoboForex, Fondex, OctaFX, Axi, Skilling, Tradeview Markets, Scandinavian Capital Markets, Purple Trading, Admiral Markets, ThinkMarkets, FIBO Group, Alpari, FP Markets, AAAFx, JustMarkets. Check cTrader website for complete list.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trading Strategy Section */}
            <div>
              <h2 className="text-lg font-bold mb-3 font-[family-name:var(--font-geist-sans)] text-[var(--primary-solid)]">Trading Strategy and Risk Management</h2>
              <div className="grid grid-cols-1 gap-3">                <div id="risk-management" className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow scroll-mt-24 target:bg-blue-50 target:shadow-md target:border-blue-200">
                  <div className="mb-2">
                    <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">How does IndexNavigator manage risk?</span>
                  </div>
                  <p className="text-sm/6">
                    IndexNavigator operates with high leverage, which classifies it as a high-risk strategy. However, the algorithm avoids martingale strategies and other high-risk tactics that could result in above average drawdowns or losses during market downturns. The algo employs a strategy that can involve significant daily drawdowns or losses, as it is designed to be drawdown-heavy. However, every position is protected by a server-side stop-loss, ensuring that losses are always limited. <strong>While the strategy may experience notable fluctuations on a daily basis, its performance should be assessed over a longer timeframe, such as weekly or monthly, to gain a clearer perspective on its effectiveness.</strong>
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="mb-2">
                    <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">When does IndexNavigator trade?</span>
                  </div>
                  <p className="text-sm/6">
                    IndexNavigator operates 24/5 during market hours, including pre-market sessions. It's designed to identify opportunities in both European and US trading sessions, optimized specifically for each market's characteristics. Over extended periods, it may focus exclusively on one of the two markets (DAX or S&P 500).
                  </p>
                </div>
              </div>
            </div>
            
            {/* Getting Started Section */}
            <div>
              <h2 className="text-lg font-bold mb-3 font-[family-name:var(--font-geist-sans)] text-[var(--primary-solid)]">Getting Started</h2>
              <div className="grid grid-cols-1 gap-3">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="mb-2">
                    <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">Can I test IndexNavigator with small capital, such as 100 USD?</span>
                  </div>
                  <p className="text-sm/6">
                    Yes, check details at <a href="https://ct.spotware.com/copy/strategy/100843" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-solid)] hover:underline">cTrader strategy page.</a>
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                  <div className="mb-2">
                    <span className="font-semibold text-base font-[family-name:var(--font-geist-sans)]">How can I start using IndexNavigator?</span>
                  </div>
                  <p className="text-sm/6">
                    You can start using IndexNavigator at <a href="https://ct.spotware.com/copy/strategy/100843" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-solid)] hover:underline">cTrader strategy page.</a>
                  </p>
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
              Experience Live Trading
            </a>
          </div>
        </main>
      </div>
      
    </div>
  );
}
