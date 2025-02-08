import { pgTable, uuid, timestamp, varchar, text } from "drizzle-orm/pg-core"

export const transactionRecords = pgTable("transaction_records", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	sellerWallet: varchar("seller_wallet").notNull(),
	buyerWallet: varchar("buyer_wallet"),
	description: text(),
	title: text(),
	sellerNft: text("seller_nft"),
	buyerNft: text("buyer_nft"),
});



