import { pgSchema, uuid, varchar } from 'drizzle-orm/pg-core';

const authSchema = pgSchema('auth');

export const usersTable = authSchema.table('users', {
  id: uuid().primaryKey(),
  email: varchar({ length: 320}).notNull().unique()
})