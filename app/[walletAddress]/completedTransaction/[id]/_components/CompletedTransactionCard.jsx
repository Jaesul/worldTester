import TokenWrapper from "@/app/_components/TokenWrapper";
import TruncatedAddress from "@/app/_components/TruncatesAddress";
import NFTPair from "./NFTPair";

export default function CompletedTransactionCard() {
    return (
        <div className="space-y-6">

            <div className="relative">
                <NFTPair />

            </div>
            <h1 className="text-2xl font-semibold">2023 Tudor Black Bay 39 79660</h1>
            <div className=" flex-grow flex flex-col border border-gray-400 rounded-lg">
                <div className="px-4 py-4 border-b border-gray-400">
                    <p>Item Sold on March 15, 2025 at 10:32 AM </p>
                </div>
                <div className="px-4 py-4 space-y-4">
                    <div>
                        <label>USDC</label>
                        <p className="text-black flex items-center gap-x-2 text-2xl font-semibold">{"12,000"} <TokenWrapper value="USDC" size={30} /></p>
                    </div>

                    <div>
                        <label>Contract Address</label>
                        <p className="text-black flex items-center gap-x-2 text-2xl font-semibold"><TruncatedAddress address="0x20eE7B720f4E4c4FFcB00C4065cdae55271aECCa" startLength={6} endLength={4} /></p>
                    </div>

                    <div>
                        <label>TXID</label>
                        <p className="text-black flex items-center gap-x-2 text-2xl font-semibold"><TruncatedAddress address="4ce18f49ba153a51bcda9bb80d7f978e3de6e81b5fc326f00465464530c052f4" startLength={6} endLength={4} /></p>
                    </div>
                    {/* Title */}
                    <div className="flex gap-x-6">
                        <div className="flex flex-col gap-y-2">
                            <label className="">Seller</label>
                            <a href={`/123/dashboard`}>
                                <div className="flex justify-between items-start">
                                    <div className="relative size-20 rounded-lg bg-white shadow-lg p-4">
                                        <div class="relative w-full overflow-hidden " style={{ paddingTop: '100%' }}>
                                            <img
                                                src="https://i.seadn.io/gae/uH3cc49dOTjoAptawOkMqa_rxWtD0TywbIO8NjEgr8IUjn1kUOIOzgxemPmXfewBPz4ELKK9SzTYHscQDPaPhBtWpuypQNz94Wq_yA?auto=format&dpr=1&w=1000"
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
                            <a href={`/123/dashboard`} className="">
                                <div className="flex justify-between items-start">
                                    <div className="relative size-20 rounded-lg bg-white shadow-lg p-4">
                                        <div class="relative w-full overflow-hidden " style={{ paddingTop: '100%' }}>
                                            <img
                                                src="https://media.tenor.com/J4AYBuSgo58AAAAM/akira-tetsuo.gif"
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
                            <a href={`/123/forSale/123`} className="text-blue-700 flex items-center gap-x-2 text-2xl font-semibold">
                                2023 Tudor Black Bay 39 79660
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}