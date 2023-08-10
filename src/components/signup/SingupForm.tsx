import { SingupFormSchema } from "@/types/singup.schema";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import FormField from "../common/FormField";
import style from "./styles/signupform.style.module.css";
interface SingupFormProps {
  fieldsProps: SingupFormSchema[];
}

export default function SingupForm(props: SingupFormProps) {
  const methods = useForm();
  const { handleSubmit , reset} = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    alert("form submitted");
  };

  return (
    <div className={style.formBody}>
      <FormProvider {...methods}>
        <Box px={3} py={2}>
          <Grid container>
            <Grid item sx={{ marginBottom: "2rem" }}>
              <Typography variant="h5" sx={{ flexDirection: "column" }}>
                Register Here{" "}
              </Typography>
            </Grid>
            {props.fieldsProps.map((i) => (
              <Grid item xs={12} key={i.id} sx={{ marginBottom: "2rem" }}>
                <FormField {...i} />
              </Grid>
            ))}
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              sx={{
                borderRadius: 50,
              }}
              className={style.background}
            >
              Register
            </Button>
          </Box>
        </Box>
      </FormProvider>
    </div>
  );
}
