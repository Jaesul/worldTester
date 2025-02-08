import { pgTable, foreignKey, uuid, timestamp, bigint, text, numeric, boolean, unique, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const transactionRecords = pgTable("transaction_records", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	sellerWallet: bigint("seller_wallet", { mode: "number" }).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	buyerWallet: bigint("buyer_wallet", { mode: "number" }),
	description: text(),
	title: text(),
	sellerNft: text("seller_nft"),
	buyerNft: text("buyer_nft"),
	views: numeric().default('0').notNull(),
	likes: numeric().default('0').notNull(),
	isSold: boolean("is_sold").default(false).notNull(),
	location: text(),
	isComplete: boolean("is_complete").default(false).notNull(),
	image: text(),
	price: text(),
	txid: text("TXID"),
	contractAddress: text("contract_address"),
}, (table) => [
	foreignKey({
			columns: [table.buyerWallet],
			foreignColumns: [users.id],
			name: "transaction_records_buyer_wallet_fkey"
		}),
	foreignKey({
			columns: [table.sellerWallet],
			foreignColumns: [users.id],
			name: "transaction_records_seller_wallet_fkey"
		}),
]);

export const users = pgTable("users", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).generatedByDefaultAsIdentity({ name: "users_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().primaryKey().notNull(),
	image: text().notNull(),
	volume: integer().default(0).notNull(),
	avgTransCost: numeric("avg_trans_cost").default('0').notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	rank: bigint({ mode: "number" }).default(sql`'0'`).notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	communityCount: bigint("community_count", { mode: "number" }).default(sql`'0'`).notNull(),
	backgroundImg: text("background_img").notNull(),
	wallet: text(),
}, (table) => [
	unique("users_id_key").on(table.id),
]);
