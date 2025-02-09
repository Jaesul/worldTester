import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "../db/schema.ts/schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */


const conn = process.env.DATABASE_URL ?? "";

export const db = drizzle(conn, { schema });