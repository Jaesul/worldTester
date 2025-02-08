import TokenWrapper from "@/app/_components/TokenWrapper";
import BuyBtn from "./BuyBtn";
import OfferBtn from "./OfferBtn";
import NumberWithCommas from "@/app/_components/NumberWithCommas";
export default function ForSaleCard({ image, title, price, location, sellerWallet, buyerWallet, id, views, likes, description, isComplete, seller, buyer }) {
    const status = isComplete ? "Sold" : "Posted";
    return (
        <div className="space-y-6">
            <div className="relative">
                <div className="relative flex flex-col overflow-hidden bg-white rounded-lg  shadow-lg">
                    {/* Image */}
                    <img
                        src={image}
                        alt={"hello"}
                        className="w-full object-cover"
                    />
                </div>
                <a href={`/${sellerWallet}/dashboard`} className="absolute left-3 bottom-3">
                    <div className="flex justify-between items-start">
                        <div className="relative size-20 rounded-lg bg-white shadow-lg p-4">
                            <div class="relative w-full overflow-hidden " style={{ paddingTop: '100%' }}>
                                <img
                                    src={seller.image}
                                    alt="Your Image"
                                    class="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </a>
                {buyer && <a href={`/${buyerWallet}/dashboard`} className="absolute right-3 bottom-3">
                    <div className="flex justify-between items-start">
                        <div className="relative size-20 rounded-lg bg-white shadow-lg p-4">
                            <div class="relative w-full overflow-hidden " style={{ paddingTop: '100%' }}>
                                <img
                                    src={buyer.image}
                                    alt="Your Image"
                                    class="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </a>}
            </div>
            <div className="flex gap-x-4 font-semibold">
                <p>{views} Unique Views</p>
                <p>{likes} Favorites</p>
            </div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div className={` flex-grow flex flex-col border border-gray-400 rounded-lg ${isComplete ? "bg-gray-600 text-white" : "bg-white"}`}>
                <div className="px-4 py-4 border-b border-gray-400">
                    <p>Item {status} on March 9, 2025 at 9:32 AM </p>
                </div>
                <div className="px-4 py-4 space-y-4">
                    <div>
                        <label>USDC</label>
                        <p className=" flex items-center gap-x-2 text-2xl font-semibold"><NumberWithCommas number={price} /> <TokenWrapper value="USDC" size={30} /></p>
                    </div>
                    {isComplete ?
                        <div>
                            <a className="text-blue-500" href={`/${sellerWallet}/completedTransaction/${id}`}>View Completed Transaction</a>
                        </div> 
                        :
                        <div className="grid grid-cols-2 gap-x-4">
                            <BuyBtn />
                            <OfferBtn />
                        </div>
                    }
                    {/* Title */}
                </div>

            </div>
            <div>
                <h2 className="text-xl font-semibold">Item Details</h2>
                <p className="mt-4">
                    {description}
                </p>
            </div>
        </div>
    )
}