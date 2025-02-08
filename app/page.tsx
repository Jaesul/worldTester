
import { PayBlock } from "@/app/_components/Pay";
import { SignIn } from "@/app/_components/SignIn";
import { VerifyBlock } from "@/app/_components/Verify";
import { fetchTransactionData } from "@/app/server/services/dataFetchService";
import { useEffect } from "react";
import { Button } from "@worldcoin/mini-apps-ui-kit-react";
import WordReplacer from "@/app/_components/WordReplacer";

export default async function Home() {

  const data = await fetchTransactionData("123");

  return (
    <main className="min-h-screen pt-6">
      <section>
        <div>
          <img src="https://zeztf3numh.ufs.sh/f/gXmXXD82lOXidvHsZSt2Nt4HFZOAbxnC89EjsqSYhrfBVlKQ" alt="hello" />
          <WordReplacer words={["WGS", "Worldcoin", "Worldcoin Studio", "Worldcoin Studio"]} />
        </div>
      </section>
    </main>
  );
}
