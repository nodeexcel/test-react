import { TextField } from "@mui/material";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
interface TextFiledProps extends FieldValues {
  id: string;
  lable: string;
  minLength?: number;
  maxLength?: number;
  defaultValue: string;
  required: boolean;
}
export default function CustomTextField(props: TextFiledProps) {
  const { control } = useFormContext();
  return (
    <Controller
      rules={{
        required: props.required,
        minLength: props.minLength,
        maxLength: props.maxLength,
      }}
      control={control}
      name={props.id}
      defaultValue={props.defaultValue}
      render={({ field, fieldState: { error } }) => (
        <>
        <TextField fullWidth  sx={{width:"100%"}} {...field} label={props.lable} error={error !== undefined} />
        </>
      )}
    />
  );
}
