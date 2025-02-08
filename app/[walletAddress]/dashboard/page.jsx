import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route";
import TruncatedAddress from "@/app/_components/TruncatesAddress";
import TokenWrapper from "@/app/_components/TokenWrapper";
import ForSalePreviewCard from "./_components/ForSalePreviewCard";
import TransactionHistoryBtn from "./_components/TransactionHistoryBtn";

export default async function Dashboard() {
    const session = await getServerAuthSession();
    console.log(session);
    return (
        <main className="overflow-y-scroll">
            <section className="pt-20 px-10 pb-10 flex flex-col gap-y-4 bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('https://media2.giphy.com/media/JVBV02JFVmWrut9H8j/200w.gif?cid=6c09b952ky3xxr2gejzy2d8jm63hp3gzxroqou9aqpgedkhu&ep=v1_stickers_search&rid=200w.gif&ct=s')" }}>
                <div className="flex justify-between items-start">
                    <div className="relative size-24 rounded-lg bg-white shadow-lg p-4">
                        <div className="absolute -top-3 -right-3">
                            <TokenWrapper value="WLD" size={30} />
                        </div>
                        <div class="relative w-full overflow-hidden " style={{ paddingTop: '100%' }}>
                            <img
                                src="https://i.seadn.io/gae/uH3cc49dOTjoAptawOkMqa_rxWtD0TywbIO8NjEgr8IUjn1kUOIOzgxemPmXfewBPz4ELKK9SzTYHscQDPaPhBtWpuypQNz94Wq_yA?auto=format&dpr=1&w=1000"
                                alt="Your Image"
                                class="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <TransactionHistoryBtn />
                </div>
                <div className="font-bold">
                    <TruncatedAddress address={session?.user?.id ?? "0xCc9Dbf6d07b6b6F1F968f648cf6fD81477195505"} className="text-white text-xl" />
                </div>
                <div className="border-t border-white border-opacity-90"></div>
                <div className="flex gap-6 flex-wrap">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-white font-bold flex items-center gap-x-2">
                            <span className="text-2xl">6,942.02</span>
                        </div>
                        <div className="text-white font-bold opacity-80 flex items-center gap-x-1">
                            <TokenWrapper value="USDC" size={22} />
                            <span>Avg. Price</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-white font-bold flex items-center gap-x-2">
                            <span className="text-2xl">28</span>
                        </div>
                        <div className="text-white font-bold opacity-80">
                            Volume
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="text-white font-bold flex items-center gap-x-2">
                            <span className="text-2xl">22</span>
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
                    <p className="text-xl font-bold">4 Available Pickups</p>
                </div>
                <div className=" grid grid-cols-2 gap-4">
                    <ForSalePreviewCard
                        title="Tudor Black Bay 39"
                        price={2800.00}
                        location="New York"
                        imageUrl="https://preview.redd.it/wts-2023-tudor-black-bay-39-79660-blue-dial-jubilee-bracelet-v0-j99wtiqfo21e1.jpeg?width=640&crop=smart&auto=webp&s=5290a4b3e130f44d10b37c26d76a892b656ab045"
                    />
                    <ForSalePreviewCard
                        title="Longines 1890's"
                        price={1200.00}
                        location="New York"
                        imageUrl="https://preview.redd.it/wts-longines-1890s-conversion-marriage-watch-by-lothar-v0-j7etzantzrhe1.jpg?width=640&crop=smart&auto=webp&s=6e93f5044d19677e09bca70fabb75a288ef07c9e"
                    />
                    <ForSalePreviewCard
                        title="Lange 1815 Chronograph Flyback 414.028"
                        price={15000.00}
                        location="New York"
                        imageUrl="https://preview.redd.it/wts-lange-1815-chronograph-flyback-414-028-v0-lswdjjwy3tge1.jpeg?width=640&crop=smart&auto=webp&s=9fbddd6e2538d9553c8e875fcbb489e552eb96c7"
                    />
                    <ForSalePreviewCard
                        title="1960s Blancpain Aqualung No Radiation Dial"
                        price={13000.00}
                        location="New York"
                        imageUrl="https://preview.redd.it/wts-1960s-blancpain-aqualung-no-radiation-dial-v0-pjk1ub7mzihe1.jpeg?width=640&crop=smart&auto=webp&s=8afde8f2565935e006c8dd82c097c8c8356e50e8"
                    />
                </div>
            </section>
        </main>
    )
}

