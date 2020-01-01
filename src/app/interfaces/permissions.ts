export interface Permissions {
  clientid: string;
  level: string;
  id: string;
}

export interface PermissionsUrls {
  changePermissionLevel: string;
  listPermissionLevels: string;
  addPermissionLevel: string;
  deletePermissionLevel: string;
  addPermissionRecord: string;
  listPermissionRecords: string;
  deletePermissionRecord: string;
}

export interface PermissionRecordsProps {
  id: string;
  forms_id: string;
  permissions_id: string;
  client_id: string;
  level: string;
  forms: Array<string>;
}
