import { markdownList } from '@/db/schema';
import db from '@/index';
import { eq } from 'drizzle-orm';

/**
 * ### 获取markdown列表q
 */
export const getMarkdownList = async (): Promise<(typeof markdownList.$inferSelect)[]> => {
  const markdownListData = await db.select().from(markdownList);
  return markdownListData;
};

/**
 * ### 创建markdown
 */
export const createMarkdown = async (name: string, content = '') => {
  const markdownListData = await db.insert(markdownList).values({ name, content }).returning();
  return markdownListData;
};

/**
 * ### 更新markdown
 */
export const updateMarkdown = async (id: number, name: string, content = '') => {
  const markdownListData = await db
    .update(markdownList)
    .set({ name, content })
    .where(eq(markdownList.id, id))
    .returning();
  return markdownListData;
};
