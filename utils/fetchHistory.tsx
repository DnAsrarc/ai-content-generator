import { db } from './db';
import { AIOutput } from './schema';
import { eq } from 'drizzle-orm';

interface HistoryItem {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string | null;
  createdAt: string | null;
}

export const fetchHistory = async (): Promise<HistoryItem[]> => {
  try {
    const history = await db.select().from(AIOutput);
    return history.map((item: any) => ({
      id: item.id,
      formData: item.formData,
      aiResponse: item.aiResponse,
      templateSlug: item.templateSlug,
      createdBy: item.createdBy,
      createdAt: item.createdAt,
    }));
  } catch (error) {
    console.error('Error fetching history:', error);
    return [];
  }
};
