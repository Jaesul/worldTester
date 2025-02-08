import TokenWrapper from "@/app/_components/TokenWrapper";
import BuyBtn from "./BuyBtn";
import OfferBtn from "./OfferBtn";

export default function ForSaleCard() {
    return (
        <div className="space-y-6">
            <div className="relative">
                <div className="relative flex flex-col overflow-hidden bg-white rounded-lg  shadow-lg">
                    {/* Image */}
                    <img
                        src={"https://preview.redd.it/wts-2023-tudor-black-bay-39-79660-blue-dial-jubilee-bracelet-v0-j99wtiqfo21e1.jpeg?width=640&crop=smart&auto=webp&s=5290a4b3e130f44d10b37c26d76a892b656ab045"}
                        alt={"hello"}
                        className="w-full object-cover"
                    />
                </div>
                <a href={`/123/dashboard`} className="absolute left-3 bottom-3">
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
            <div className="flex gap-x-4 font-semibold">
                <p>26 Unique Views</p>
                <p>2 Favorites</p>
            </div>
            <h1 className="text-2xl font-semibold">2023 Tudor Black Bay 39 79660</h1>
            <div className=" flex-grow flex flex-col border border-gray-400 rounded-lg">
                <div className="px-4 py-4 border-b border-gray-400">
                    <p>Item Posed on March 9, 2025 at 9:32 AM </p>
                </div>
                <div className="px-4 py-4 space-y-4">
                    <div>
                        <label>USDC</label>
                        <p className="text-black flex items-center gap-x-2 text-2xl font-semibold">{"12,000"} <TokenWrapper value="USDC" size={30} /></p>
                    </div>

                    {/* Title */}
                    <div className="grid grid-cols-2 gap-x-4">
                        <BuyBtn />
                        <OfferBtn />
                    </div>
                </div>

            </div>
            <div>
                <h2 className="text-xl font-semibold">Item Details</h2>
                <p className="mt-4">
                    Up for sale is a 2023 Tudor Black Bay 39 79660 Blue Dial Jubilee Bracelet

                    Size: 39mm

                    Location: U.S. / NYC

                    Condition: Watch is in great condition overall. The sapphire crystal is clean with no scratches or chips. The bezel and case show minimal light scratches. The bracelet has some light scratches primarily on the clasp. This watch features the micro adjustment clasp. Comes with all links. Comes with box and papers dated 2023. Factory warranty through 10/2028.

                </p>
            </div>
        </div>
    )
}