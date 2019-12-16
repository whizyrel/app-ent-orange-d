export interface FormDetails {
  title: string;
  permissionid: string;
  clientid: string;
  id: string;
  key: Array<string>;
  level:  string;
};

export interface FormTitle {
  title?: string;
  permissionLevel?: string;
  permissionId?: string;
  id?: string;
};

export interface FormRecords {
  key?: string;
  type?: string;
  id?: string;
  form_id?: string;
};
