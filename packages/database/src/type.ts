import type { NeonDatabase } from 'drizzle-orm/neon-serverless';

import type * as schema from './schemas';

export type SHAHEEN OSDatabaseSchema = typeof schema;

export type SHAHEEN OSDatabase = NeonDatabase<SHAHEEN OSDatabaseSchema>;

export type Transaction = Parameters<Parameters<SHAHEEN OSDatabase['transaction']>[0]>[0];
