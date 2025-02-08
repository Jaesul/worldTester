import CompletedTransactionCard from "./_components/CompletedTransactionCard";
import { getForSaleItemById, getSellerByWallet } from "@/app/server/services/dataFetchService";
export default async function CompletedTransactionPage({ params }) {
    const { id } = params;
    const transaction = await getForSaleItemById(id);
    if(!transaction) {
        return notFound();
    }
    const seller = await getSellerByWallet(transaction.sellerWallet);
    const buyer = await getSellerByWallet(transaction.buyerWallet);
    return (
        <main>
            <section className="py-4 px-6">
                <CompletedTransactionCard {...transaction} seller={seller} buyer={buyer}/>
            </section>
        </main>
    )
}   