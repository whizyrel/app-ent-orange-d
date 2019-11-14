const { ErrorResponse } from './error-response';

export interface HttpResponse {
  message?: string;
  rows?: array | object;
  error?: ErrorResponse;
  status?: number;
  ok?: boolean;
}
