import { relations } from "drizzle-orm/relations";
import { users, transactionRecords } from "./schema";

export const transactionRecordsRelations = relations(transactionRecords, ({one}) => ({
	user_buyerWallet: one(users, {
		fields: [transactionRecords.buyerWallet],
		references: [users.id],
		relationName: "transactionRecords_buyerWallet_users_id"
	}),
	user_sellerWallet: one(users, {
		fields: [transactionRecords.sellerWallet],
		references: [users.id],
		relationName: "transactionRecords_sellerWallet_users_id"
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	transactionRecords_buyerWallet: many(transactionRecords, {
		relationName: "transactionRecords_buyerWallet_users_id"
	}),
	transactionRecords_sellerWallet: many(transactionRecords, {
		relationName: "transactionRecords_sellerWallet_users_id"
	}),
}));