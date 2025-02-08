import TokenWrapper from "@/app/_components/TokenWrapper";

const NFTCard = ({ imageUrl, title, price, location }) => {
    return (
      <div className="flex flex-col bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
  
        {/* Card Body */}
        <div className="px-4 py-4 bg-white flex-grow flex flex-col">
          {/* Price */}
          <p className="text-gray-500 mt-2 flex items-center gap-x-1">{price} <TokenWrapper value="USDC" size={20} /></p>
          
          {/* Title */}
          <h3 className="text-black text-lg font-semibold">{title}</h3>
  
  
          {/* Last Sale */}
          <p className="text-gray-500 text-sm mt-auto">{location}</p>
        </div>
      </div>
    );
  };
  
  export default NFTCard;