
import { Button, Drawer, DrawerClose, DrawerContent, DrawerTrigger, Typography } from "@worldcoin/mini-apps-ui-kit-react";
import TransactionPreview from "./TransactionPreview";
export default function TransactionHistoryBtn() {
    return (
        <Drawer>
            <DrawerTrigger>
                <Button variant="secondary" className="bg-white">View Transactions</Button>
            </DrawerTrigger>
            <DrawerContent className="h-[96%] pb-4">
                <div className="max-w-md px-4 w-full mx-auto rounded-t-[10px] flex flex-col items-center flex-grow">
                    <Typography component="h2" variant="heading" level={3}>
                        Transaction History
                    </Typography>
                    <div className="no-scrollbar mx-auto w-full flex flex-col flex-grow flex-basis-0 overflow-auto gap-4 p-4" style={{
                        // Explicitly setting flex-basis ensures that the remaining space in the flex container is used,
                        // height issues are fixed, and proper scrolling is enabled.
                        flexBasis: 0
                    }}>
                        <TransactionPreview
                            title="Tudor Black Bay 39"
                            price={2800.00}
                            location="New York"
                            imageUrl="https://preview.redd.it/wts-2023-tudor-black-bay-39-79660-blue-dial-jubilee-bracelet-v0-j99wtiqfo21e1.jpeg?width=640&crop=smart&auto=webp&s=5290a4b3e130f44d10b37c26d76a892b656ab045"
                        />
                        <TransactionPreview
                            title="Rolex Daytona 6239"
                            price={10000.00}
                            location="New York"
                            imageUrl="https://media2.giphy.com/media/UbaoBXXnTpXy3voUyG/giphy.gif?cid=6c09b9521jnq53h7nm1auxpxk70dgg2ruycteczzuu91xr5u&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        />
                        {/* {Array.from({
                            length: 20
                        }).map((_, i) => <DrawerClose key={i} className="block w-full">
                            <div className="py-2">Option {i + 1}</div>
                        </DrawerClose>)} */}

                    </div>

                </div>
            </DrawerContent>
        </Drawer>
    )
}