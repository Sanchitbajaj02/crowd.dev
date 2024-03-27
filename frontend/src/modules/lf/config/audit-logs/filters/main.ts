import { FilterConfig } from '@/shared/modules/filters/types/FilterConfig';
import user from './user/config';
import entityId from './entityId/config';

export const auditLogsFilters: Record<string, FilterConfig> = {
  entityId,
  user,
};