import TokenWrapper from "@/app/_components/TokenWrapper";
import TruncatedAddress from "@/app/_components/TruncatesAddress";
import NumberWithCommas from "@/app/_components/NumberWithCommas";
import NFTPair from "./NFTPair";

export default function CompletedTransactionCard({title, image, sellerWallet, buyerWallet, price, contractAddress, id, seller, buyer, sellerNft, buyerNft}) {
    console.log(sellerNft);
    return (
        <div className="space-y-6">

            <div className="relative">
                <NFTPair seller={seller} buyer={buyer} sellerNft={sellerNft} buyerNft={buyerNft}/>

            </div>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div className=" flex-grow flex flex-col border border-gray-400 rounded-lg">
                <div className="px-4 py-4 border-b border-gray-400">
                    <p>Item Sold on March 15, 2025 at 10:32 AM </p>
                </div>
                <div className="px-4 py-4 space-y-4">
                    <div>
                        <label>USDC</label>
                        <p className="text-black flex items-center gap-x-2 text-2xl font-semibold"><NumberWithCommas number={price} /><TokenWrapper value="USDC" size={30} /></p>
                    </div>

                    <div>
                        <label>NFT Addresses</label>
                        <p className="text-black flex items-center gap-x-2 text-2xl font-semibold"><TruncatedAddress address="0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa" startLength={6} endLength={4} /></p>
                        <p className="text-black flex items-center gap-x-2 text-2xl font-semibold"><TruncatedAddress address="0x43eE7B720f4E4c4FFcB00C4065cdae44283aGCbd" startLength={6} endLength={4} /></p>

                    </div>

                    <div>
                        <label>TXID</label>
                        <p className="text-black flex items-center gap-x-2 text-2xl font-semibold"><TruncatedAddress address="4ce18f49ba153a51bcda9bb80d7f978e3de6e81b5fc326f00465464530c052f4" startLength={6} endLength={4} /></p>
                    </div>
                    {/* Title */}
                    <div className="flex gap-x-6">
                        <div className="flex flex-col gap-y-2">
                            <label className="">Seller</label>
                            <a href={`/${sellerWallet}/dashboard`}>
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
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label>Buyer</label>
                            <a href={`/${buyerWallet}/dashboard`} className="">
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
                            </a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Original Listing</label>
                            <a href={`/${sellerWallet}/forSale/${id}`} className="text-blue-700 flex items-center gap-x-2 text-2xl font-semibold">
                                {title}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}