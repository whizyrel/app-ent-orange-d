import { ErrorResponse } from './error-response';
import { ClientDetails } from './client-details';
import { FormDetails } from './form-details';
import { Permissions, PermissionRecordsProps } from './permissions';

export interface HttpResponse {
  message?: string;
  rows?: Array<any>;
  forms?: Array<FormDetails>;
  error?: ErrorResponse;
  status?: number;
  ok?: boolean;
  details: ClientDetails;
  permissions: Array<Permissions>;
  data: ClientDetails;
  records: Array<PermissionRecordsProps>;
}
