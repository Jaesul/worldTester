import TokenWrapper from "./TokenWrapper";
import TruncatedAddress from "./TruncatesAddress";
import NumberWithCommas from "./NumberWithCommas";
export default function WGCFeatured({ img, volume, community, avgCost, rank, backgroundImage, walletAddress }) {
    return (
        <a href={`/${walletAddress}/dashboard`} className="p-4 relative rounded-lg overflow-hidden items-center flex gap-x-6 bg-gray-600 bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            <div className="z-10">
                <div className="flex justify-between items-start">
                    <div className="relative size-24 rounded-lg bg-white shadow-lg p-4">
                        <div className="absolute -top-3 -right-3">
                            <TokenWrapper value="WLD" size={30} />
                        </div>
                        <div class="relative w-full overflow-hidden " style={{ paddingTop: '100%' }}>
                            <img
                                src={img}
                                alt="Your Image"
                                class="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-x-6 gap-y-2 flex-wrap z-10">
                <div className="flex flex-col gap-y-1">
                    <div className="text-white font-bold flex items-center gap-x-2">
                        <span className="text-2xl">{rank}</span>
                    </div>
                    <div className="text-white font-bold opacity-80">
                        Rank
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="text-white font-bold flex items-center gap-x-2">
                        <span className="text-2xl">{volume}</span>
                    </div>
                    <div className="text-white font-bold opacity-80">
                        Volume
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="text-white font-bold flex items-center gap-x-2">
                        <span className="text-2xl">{community}</span>
                    </div>
                    <div className="text-white font-bold opacity-80">
                        Community
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    <div className="text-white font-bold flex items-center gap-x-2">
                        <span className="text-2xl">
                            <NumberWithCommas number={avgCost} />
                        </span>
                    </div>
                    <div className="text-white font-bold opacity-80 flex items-center gap-x-1">
                        <TokenWrapper value="USDC" size={22} />
                        <span>Avg. Price</span>
                    </div>
                </div>
            </div>
        </a>
    );
}

