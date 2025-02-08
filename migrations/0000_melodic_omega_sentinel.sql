-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "transaction_records" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"seller_wallet" varchar NOT NULL,
	"buyer_wallet" varchar,
	"description" text,
	"title" text,
	"seller_nft" text,
	"buyer_nft" text
);
--> statement-breakpoint
ALTER TABLE "transaction_records" ENABLE ROW LEVEL SECURITY;
*/