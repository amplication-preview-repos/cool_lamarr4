import { SortOrder } from "../../util/SortOrder";

export type UsageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  usageAmount?: SortOrder;
  usageDate?: SortOrder;
  userId?: SortOrder;
  aiServiceId?: SortOrder;
};
