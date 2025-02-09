
import { Button, Drawer, DrawerClose, DrawerContent, DrawerTrigger, Typography } from "@worldcoin/mini-apps-ui-kit-react";
import TransactionPreview from "./TransactionPreview";
import { getForSaleItemsBySellerWallet } from "@/app/server/services/dataFetchService";
export default async function TransactionHistoryBtn({ walletAddress }) {   

    const soldItems = await getForSaleItemsBySellerWallet(walletAddress, true);
    console.log(soldItems);
    return (
        <Drawer>
            <DrawerTrigger>
                <Button variant="secondary" className="bg-white">Reciepts</Button>
            </DrawerTrigger>
            <DrawerContent className="h-[96%] pb-4">
                <div className="max-w-md px-4 w-full mx-auto rounded-t-[10px] flex flex-col items-center flex-grow">
                    <Typography component="h2" variant="heading" level={3}>
                        Reciepts
                    </Typography>
                    <div className="no-scrollbar mx-auto w-full flex flex-col flex-grow flex-basis-0 overflow-auto gap-4 p-4" style={{
                        // Explicitly setting flex-basis ensures that the remaining space in the flex container is used,
                        // height issues are fixed, and proper scrolling is enabled.
                        flexBasis: 0
                    }}>
                        {soldItems.map((item) => (
                            <TransactionPreview
                                buyerWalletAddress={item.buyerWallet}
                                sellerWalletAddress={item.sellerWallet}
                                price={item.price}
                                id={item.id}
                                img={item.image}
                            />
                        ))}

                    </div>

                </div>
            </DrawerContent>
        </Drawer>
    )
}