"use client"

import TokenWrapper from "@/app/_components/TokenWrapper";

export default function NFTPair({ seller, buyer, buyerNft, sellerNft }) {

    return (
        <div className="relative flex flex-col gap-y-6">

            <div className="px-4 flex flex-col overflow-hidden bg-white rounded-lg  shadow-lg">
                <div className="py-2 px-4 flex justify-between items-center">
                    <TokenWrapper value="WLD" className="padding" size={50} />
                    <a href={`/${seller.wallet}/dashboard`}>
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
                {/* Image */}
                <img
                    src={sellerNft}
                    alt={"hello"}
                    className="w-full object-cover"
                />
                <h2 className="text-lg font-semibold p-2 text-center">Seller Proof of Shipment</h2>
            </div>
            <div className="px-4 flex flex-col overflow-hidden bg-white rounded-lg  shadow-lg">
                <div className="py-2 px-4 flex justify-between items-center">
                    <TokenWrapper value="WLD" className="padding" size={50} />
                    <a href={`/${buyer.wallet}/dashboard`}>
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
                {/* Image */}
                <img
                    src={buyerNft}
                    alt={"hello"}
                    className="w-full object-cover"
                />
                <h2 className="text-lg font-semibold p-2 text-center">Buyer Proof of Arrival</h2>

            </div>
        </div>
    )
}