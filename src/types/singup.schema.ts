export type fieldType = "TEXT" | "LIST";

export interface SingupFormSchema {
  id: string;
  lable: string;
  fieldType: fieldType;
  minLength?: number;
  maxLength?: number;
  defaultValue: string;
  required: boolean;
  listOfValues?: string[];
}
