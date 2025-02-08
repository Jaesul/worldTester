import ForSaleCard from "../_components/ForSaleCard";
import { getForSaleItemById } from "@/app/server/services/dataFetchService";
import { getUserByWalletAddress } from "@/app/server/services/dataFetchService";

export default async function TransactionPage({params}) {
    const {walletAddress, id} = params;
    const item = await getForSaleItemById(id);
    const seller = await getUserByWalletAddress(item.sellerWallet);
    const buyer = await getUserByWalletAddress(item.buyerWallet);
    return (
        <main>
            <section className="py-4 px-6">
                <ForSaleCard {...item} seller={seller} buyer={buyer} />
            </section>
        </main>
    )
}