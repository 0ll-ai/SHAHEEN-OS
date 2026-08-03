import type { NeonDatabase } from 'drizzle-orm/neon-serverless';

import type * as schema from './schemas';

export type SHAHEENOSDatabaseSchema = typeof schema;

export type SHAHEENOSDatabase = NeonDatabase<SHAHEENOSDatabaseSchema>;

export type Transaction = Parameters<Parameters<SHAHEENOSDatabase['transaction']>[0]>[0];
