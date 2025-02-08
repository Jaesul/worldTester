import TruncatedAddress from "@/app/_components/TruncatesAddress";
import TokenWrapper from "@/app/_components/TokenWrapper";
import ForSalePreviewCard from "./_components/ForSalePreviewCard";
import TransactionHistoryBtn from "./_components/TransactionHistoryBtn";
import { notFound } from "next/navigation";
import { getUserByWalletAddress, getForSaleItemsBySellerWallet } from "@/app/server/services/dataFetchService";
import NumberWithCommas from "@/app/_components/NumberWithCommas";

export default async function Dashboard({ params }) {
    const session = null;
    const user = await getUserByWalletAddress(params.walletAddress);
    if(!user) {
        return notFound();
    }
    const forSaleItems = await getForSaleItemsBySellerWallet(params.walletAddress);

    function renderForSaleItems(forSaleItems) {
        return forSaleItems.map((item) => {
            return <ForSalePreviewCard key={item.id} {...item} />
        })
    }
    return ( 
        <main className="overflow-y-scroll">
            <section className="pt-20 px-10 pb-10 flex flex-col gap-y-4 bg-gray-600 bg-cover bg-center" style={{ backgroundImage: `url('${user.backgroundImg}')` }}>
                <div className="flex justify-between items-start">
                    <div className="relative size-24 rounded-lg bg-white shadow-lg p-4">
                        <div className="absolute -top-3 -right-3">
                            <TokenWrapper value="WLD" size={30} />
                        </div>
                        <div class="relative w-full overflow-hidden " style={{ paddingTop: '100%' }}>
                            <img
                                src={user.image}
                                alt="Your Image"
                                class="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <TransactionHistoryBtn walletAddress={params.walletAddress} />
                </div>
                <div className="font-bold">
                    <TruncatedAddress address={session?.user?.id ?? "0xCc9Dbf6d07b6b6F1F968f648cf6fD81477195505"} className="text-white text-xl" />
                </div>
                <div className="border-t border-white border-opacity-90"></div>
                <div className="flex gap-6 flex-wrap">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-white font-bold flex items-center gap-x-2">
                            <span className="text-2xl"><NumberWithCommas number={user.avgTransCost} /></span>
                        </div>
                        <div className="text-white font-bold opacity-80 flex items-center gap-x-1">
                            <TokenWrapper value="USDC" size={22} />
                            <span>Avg. Price</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-white font-bold flex items-center gap-x-2">
                            <span className="text-2xl">{user.volume}</span>
                        </div>
                        <div className="text-white font-bold opacity-80">
                            Volume
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-white font-bold flex items-center gap-x-2">
                            <span className="text-2xl">{user.communityCount}</span>
                        </div>
                        <div className="text-white font-bold opacity-80">
                            Community
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-white font-bold flex items-center gap-x-2">
                            <span className="text-2xl">1</span>
                        </div>
                        <div className="text-white font-bold opacity-80">
                            Volume Rank
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-5 py-10 space-y-4">
                <div>
                    <p className="text-xl font-bold">{forSaleItems.length} Available Pickups</p>
                </div>
                <div className=" grid grid-cols-2 gap-4">
                    {renderForSaleItems(forSaleItems)}

                </div>
            </section>
        </main>
    )
}

