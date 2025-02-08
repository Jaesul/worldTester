import ForSalePreview from "./_components/ForSalePreview";

export default function ResultsPage() {
    return (
        <main>
            <section className="py-4 px-6 grid grid-cols-2 gap-4">
                <ForSalePreview 
                imageUrl="https://preview.redd.it/wts-2023-tudor-black-bay-39-79660-blue-dial-jubilee-bracelet-v0-j99wtiqfo21e1.jpeg?width=640&crop=smart&auto=webp&s=5290a4b3e130f44d10b37c26d76a892b656ab045" 
                title="Tudor Black Bay 39" price="1200" location="New York" />
            </section>
        </main>
    )
}