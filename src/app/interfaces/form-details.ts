export interface FormDetails {
  title: string;
  permissionid: string;
  clientid: string;
  id: string;
  key: Array<string>;
}

export interface FormTitle {
  title?: string;
  id?: string;
}

export interface FormRecords {
  key?: string;
  type?: string;
  id?: string;
  form_id?: string;
}
