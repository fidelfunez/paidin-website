import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface BtcPrice {
  price: number;
  change24h: number;
  changePercent24h: number;
}

export default function BtcPriceCard() {
  const [btcPrice, setBtcPrice] = useState<BtcPrice | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        
        setBtcPrice({
          price: data.bitcoin.usd,
          change24h: data.bitcoin.usd_24h_change,
          changePercent24h: data.bitcoin.usd_24h_change,
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch BTC price:', error);
        setIsLoading(false);
      }
    };

    fetchBtcPrice();
    const interval = setInterval(fetchBtcPrice, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const isPositive = btcPrice?.changePercent24h && btcPrice.changePercent24h >= 0;

  return (
    <div className="absolute -bottom-20 -left-6 bg-gradient-to-br from-orange-500/30 to-amber-500/25 backdrop-blur-md rounded-xl p-4 shadow-xl hover:bg-orange-500/40 transition-all duration-300 hover:scale-105">
      <div className="flex items-center space-x-3">
        <img 
          src="/app - graphic designs/Bitcoin - logo.png" 
          alt="Bitcoin Logo" 
          className="h-8 w-8"
        />
        <div>
          {isLoading ? (
            <div className="text-xl font-bold text-gray-900 animate-pulse">
              Loading...
            </div>
          ) : btcPrice ? (
            <>
              <div className="text-xl font-bold text-gray-900">
                ${btcPrice.price.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
              <div className="flex items-center space-x-1">
                {isPositive ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {isPositive ? '+' : ''}{btcPrice.changePercent24h.toFixed(2)}%
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Current BTC Price</div>
            </>
          ) : (
            <>
              <div className="text-xl font-bold text-gray-900">
                $0
              </div>
              <div className="text-sm text-gray-500 mt-1">Current BTC Price</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 