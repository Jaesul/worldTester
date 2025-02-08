import { db } from "../db/drizzle";
import { transactionRecords } from "../db/schema";
import { eq } from "drizzle-orm";

export async function fetchTransactionData(walletAddress) {
  const data = await db.select().from(transactionRecords).where(eq(transactionRecords.sellerWallet, walletAddress));
  return data;
}

