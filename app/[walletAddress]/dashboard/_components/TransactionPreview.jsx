import TokenWrapper from "@/app/_components/TokenWrapper";
import NumberWithCommas from "@/app/_components/NumberWithCommas";
import { getUserByWalletAddress } from "@/app/server/services/dataFetchService";
export default async function TransactionPreview({ buyerWalletAddress, sellerWalletAddress, price, id, img }) {
    const buyer = await getUserByWalletAddress(buyerWalletAddress);
    const seller = await getUserByWalletAddress(sellerWalletAddress);
    return (
        <a href={`/${sellerWalletAddress}/completedTransaction/${id}`} className="flex overflow-hidden shadow-lg">
            <div className="px-4 py-6 bg-white flex  w-full gap-4">
                <div className="overflow-hidden rounded-lg w-20">
                    <img src={img} alt="hello" className="object-cover" />
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="relative size-20 rounded-lg bg-white shadow-lg p-4">
                        <div className="absolute -top-3 -right-3">
                            <TokenWrapper value="WLD" size={30} />
                        </div>
                        <div class="relative w-full overflow-hidden " style={{ paddingTop: '100%' }}>
                            <img
                                src={seller.image}
                                alt="Your Image"
                                class="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="relative size-20 rounded-lg bg-white shadow-lg p-2">
                        <div className="absolute -top-3 -right-3 z-40">
                            <TokenWrapper value="WLD" size={30} />
                        </div>
                        <div class="relative w-full overflow-hidden rounded-md" style={{ paddingTop: '100%' }}>
                            <img
                                src={buyer.image}
                                alt="Your Image"
                                class="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                <p className="text-black flex items-center gap-x-2 text-2xl font-semibold"><TokenWrapper value="USDC" size={30} /> <NumberWithCommas number={price} /> </p>
                </div>

                {/* Price */}

            </div>
        </a>
    );
}