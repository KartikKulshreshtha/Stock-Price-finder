import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

const StockPriceTracker = () => {
  const [stock, setStock] = useState();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchStockPrice = async () => {
      const response = await axios.get(`http://localhost:3001/api/stocks/${stock}`);
      setPrice(response.data.price);
    };

    fetchStockPrice();
  }, [stock]);

  const options = [
    { value: "AAPL", label: "Apple" },
    { value: "GOOGL", label: "Alphabet" },
    { value: "MSFT", label: "Microsoft" },
    { value: "META", label: "Meta Platforms" },
    { value: "AMZN", label: "Amazon" },
    { value: "TSLA", label: "Tesla" },
    { value: "NVDA", label: "Nvidia" },
    { value: "BRK.A", label: "Berkshire Hathaway" },
    { value: "JPM", label: "JPMorgan Chase" },
    { value: "V", label: "Visa" },
    { value: "BAC", label: "Bank of America" },
    { value: "WMT", label: "Walmart" },
    { value: "MA", label: "Mastercard" },
    { value: "KO", label: "Coca-Cola" },
    { value: "MCD", label: "McDonald's" },
    { value: "UNH", label: "UnitedHealth Group" },
    { value: "XOM", label: "ExxonMobil" },
    { value: "JNJ", label: "Johnson & Johnson" },
    { value: "PG", label: "Procter & Gamble" },
    { value: "VZ", label: "Verizon Communications" },
    { value: "T", label: "AT&T" },
  ];

  return (
    <div className="stock-price-tracker">
      <h1 className="tracker-title">Stock Price Tracker</h1>
      <p className="current-price">Current price: ${price.toFixed(2)}</p>
      <Select
        value={stock}
        onChange={(e) => setStock(e.value)}
        options={options}
        className="stock-select"
      />
    </div>
  );
};
export default StockPriceTracker;
