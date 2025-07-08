import { eq } from 'drizzle-orm';
import db from '../../db';
import { sandBoxTable } from '../../db/schema';

export const getSandBoxData = async (userId: string) => {
  const data = await db.select().from(sandBoxTable).where(eq(sandBoxTable.userId, userId));
  return data;
};
export const getAllSandBoxData = async () => {
  const data = await db.select().from(sandBoxTable);
  return data;
};
