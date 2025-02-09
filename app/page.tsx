
import { fetchTransactionData } from "@/app/server/services/dataFetchService";
import WordReplacer from "@/app/_components/WordReplacer";
import WGCFeatured from "@/app/_components/WGCFeatured";
import { fetchFeaturedUsers } from "@/app/server/services/dataFetchService";

export default async function Home() {

  const featuredUsers = await fetchFeaturedUsers();
  function parseFeaturedUsers(users: any) {
    return users.map((user: any) => {
      return <WGCFeatured walletAddress={user.wallet} key={user.id} img={user.image}  volume={user.volume} rank={user.rank} community={user.community_count} avgCost={user.avg_trans_cost} backgroundImage={user.background_img} />
    })
  }


  return (
    <main className="min-h-screen pt-2">
      <section>
        <div>
          <div className="p-6">
            <h1 className="text-8xl mt-8 mb-2 font-bold">World General Store</h1>
            <p className="text-4xl">
              <span >A World Chain powered used marketplace for</span>
            </p>
            <WordReplacer classes="ml-1 text-4xl font-bold" words={["Selling", "Security", "Buying", "Trading", "Community"]} />
          </div>
        </div>
      </section>
{/* 
      <section className="p-4 mt-14">
        <h2 className="text-2xl font-bold pb-4">WGC Hottest sellers 🔥</h2>
        <div className="space-y-4">
          {parseFeaturedUsers(featuredUsers)}
        </div>
      </section> */}
    </main>
  );
}
