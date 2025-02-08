import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */


const conn = "postgresql://postgres.guzairvmrynbmzbqfzzk:shanonloveshentai@aws-0-us-west-1.pooler.supabase.com:6543/postgres"

export const db = drizzle(conn, { schema });