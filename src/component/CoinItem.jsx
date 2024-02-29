import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinItem = ({ getCoin }) => {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td>
        <AiOutlineStar />
      </td>
      <td>{getCoin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${getCoin.id}`}>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={getCoin.image}
              alt={getCoin.id}
            />
            <p className="hidden sm:table-cell">{getCoin.name}</p>
          </div>
        </Link>
      </td>
      <td>{getCoin.symbol.toUpperCase()}</td>
      <td>${getCoin.current_price.toLocaleString()}</td>
      <td>
        {getCoin.price_change_percentage_24h > 0 ? (
          <p className="text-green-500">
            {getCoin.price_change_percentage_24h.toFixed(2)}
          </p>
        ) : (
          <p className="text-red-500">{getCoin.price_change_percentage_24h.toFixed(2)}</p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">${getCoin.total_volume.toLocaleString()}</td>
      <td className="w-[180px] hidden sm:table-cell">${getCoin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={getCoin.sparkline_in_7d.price}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
