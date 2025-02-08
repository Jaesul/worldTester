import TokenWrapper from "@/app/_components/TokenWrapper";
import { truncateText } from "@/app/utils/helpers";
const ForSalePreview = ({ imageUrl, title, price, location }) => {
  const formattedTitle = truncateText(title, 14, '...');
  return (
    <a href={`/123/forSale/123`} className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Card Body */}
      <div className="px-4 py-2 bg-white flex gap-x-2 flex-wrap align-middle items-center">
        <p className="text-gray-500 flex items-center gap-x-1"><TokenWrapper value="USDC" size={20} /> {price} </p>
        {/* Price */}

        {/* Title */}
        <h3 className="text-black text-lg font-semibold">{formattedTitle}</h3>


        {/* Last Sale */}
        <p className="text-gray-500 text-sm mt-auto">{location}</p>
      </div>
    </a>
  );
};

export default ForSalePreview;