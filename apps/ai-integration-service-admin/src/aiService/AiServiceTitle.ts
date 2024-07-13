import { AiService as TAiService } from "../api/aiService/AiService";

export const AISERVICE_TITLE_FIELD = "name";

export const AiServiceTitle = (record: TAiService): string => {
  return record.name?.toString() || String(record.id);
};
