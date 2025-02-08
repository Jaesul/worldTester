import { db } from "../db/drizzle";
import { transactionRecords } from "../db/schema";
import { eq, ilike, and } from "drizzle-orm";
import { users } from "../db/schema";
import { sql } from "drizzle-orm";

export async function fetchTransactionData(walletAddress) {
  const data = await db.select().from(transactionRecords).where(eq(transactionRecords.sellerWallet, walletAddress));
  return data;
}

export async function fetchFeaturedUsers() {
  const data = await db.execute(sql`select * from users where users.rank <= 5 ORDER BY users.rank ASC`);
  return data;
}

export async function getUserByWalletAddress(walletAddress) {
  try{
    const data = await db.select().from(users).where(eq(users.wallet, walletAddress));
    return data?.[0];
  } catch (e) {
    console.log(e);
    return null;
  }
  // return data?.[0];
  return null
}


export async function getForSaleItemsByTitle(title) {
  const data = await db.
                        select()
                        .from(transactionRecords)
                        .where(ilike(transactionRecords.title, `%${title}%`));
  return data;
}

export async function getForSaleItemById(id) {
  const data = await db.select().from(transactionRecords).where(eq(transactionRecords.id, id));
  return data?.[0];
}

export async function getForSaleItemsBySellerWallet(walletAddress, isComplete = false) {
  const data = await db.select().from(transactionRecords).where(and(eq(transactionRecords.sellerWallet, walletAddress), eq(transactionRecords.isComplete, isComplete)));
  console.log(data);
  return data;
}

export async function getSellerByWallet(walletAddress) {
  const data = await db.select().from(users).where(eq(users.wallet, walletAddress));
  return data?.[0];
}

