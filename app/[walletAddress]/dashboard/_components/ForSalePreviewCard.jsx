import TokenWrapper from "@/app/_components/TokenWrapper";
import { truncateText } from "@/app/utils/helpers";
import NumberWithCommas from "@/app/_components/NumberWithCommas";

const ForSalePreviewCard = ({ image, title, price, location, id, sellerWallet }) => {
  const formattedTitle = truncateText(title, 14, '...');
    return (
      <a href={`/${sellerWallet}/completedTransaction/${id}`} className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
  
        {/* Card Body */}
        <div className="px-4 py-4 bg-white flex-grow flex flex-col">
          {/* Price */}
          <p className="text-gray-500 flex items-center gap-x-1"><NumberWithCommas number={price} /><TokenWrapper value="USDC" size={20} /></p>
          
          {/* Title */}
          <h3 className="text-black text-lg font-semibold">{formattedTitle}</h3>
      
  
          {/* Last Sale */}
          <p className="text-gray-500 text-sm mt-auto">{location}</p>
        </div>
      </a>
    );
  };
  
  export default ForSalePreviewCard;