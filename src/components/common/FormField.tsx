import { SingupFormSchema } from "@/types/singup.schema";
import RadioButtons from "./RadioButtons";
import CustomTextField from "./TextField";

interface FormFieldProps extends SingupFormSchema {}
export default function FormField(props: FormFieldProps): JSX.Element {
  switch (props.fieldType) {
    case "TEXT":
      return <CustomTextField {...props} />;
    case "LIST":
      return props.listOfValues && Array.isArray(props.listOfValues) ? (
        <RadioButtons
          defaultValue={props.defaultValue}
          id={props.id}
          items={props.listOfValues}
          lable={props.lable}
          required={props.required}
        />
      ) : (
        <></>
      );
    default:
      return <></>;
  }
}
