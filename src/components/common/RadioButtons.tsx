import { FormLabel, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Controller, useFormContext } from "react-hook-form";

interface RadioButtonProps {
  id: string;
  lable: string;
  defaultValue: string;
  required: boolean;
  items: string[];
}

export default function RadioButtons(props: RadioButtonProps) {
  const { control } = useFormContext();
  return (
    <Controller
      rules={{ required: true }}
      control={control}
      name={props.id}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControl required={props.required}>
            <FormLabel id={props.lable}>Gender</FormLabel>
            <RadioGroup {...field} sx={{display:"flex", flexDirection:"row"}}>
              {props.items.map((item, index) => (
                <FormControlLabel
                  key={`${index}-${item}`}
                  value={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Typography color="red">
            {error != undefined && "Please select your gender"}
          </Typography>
        </>
      )}
    />
  );
}
