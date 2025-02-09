import ForSalePreview from "./_components/ForSalePreview";
import { getForSaleItemsByTitle } from "../server/services/dataFetchService";
export default async function ResultsPage({ params, searchParams }) {

    const {query} = searchParams;
    const items = await getForSaleItemsByTitle(query);

    function renderItems(items) {
        return items.map((item) => {
            return <ForSalePreview key={item.id} {...item} />
        })
    }


    return (
        <main>
            <section className="py-4 px-6 grid grid-cols-2 gap-4">
                {renderItems(items)}
            </section>
        </main>
    )
}