"use client"

import TokenWrapper from "@/app/_components/TokenWrapper";

export default function NFTPair() {

    return (
        <div className="relative flex flex-col gap-y-6">

                <div className="px-4 flex flex-col overflow-hidden bg-white rounded-lg  shadow-lg">
                    <div className="py-2 px-4 flex justify-between items-center">
                        <TokenWrapper value="WLD" className="padding" size={50} />
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
                    {/* Image */}
                    <img
                        src={"https://preview.redd.it/wts-2023-tudor-black-bay-39-79660-blue-dial-jubilee-bracelet-v0-j99wtiqfo21e1.jpeg?width=640&crop=smart&auto=webp&s=5290a4b3e130f44d10b37c26d76a892b656ab045"}
                        alt={"hello"}
                        className="w-full object-cover"
                    />
                </div>
                <div className="px-4 flex flex-col overflow-hidden bg-white rounded-lg  shadow-lg">
                    <div className="py-2 px-4 flex justify-between items-center">
                        <TokenWrapper value="WLD" className="padding" size={50} />
                        <a href={`/123/dashboard`}>
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
                    {/* Image */}
                    <img
                        src={"data:image/jpeg;base64,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"}
                        alt={"hello"}
                        className="w-full object-cover"
                    />
                </div>
        </div>
    )
}