import LeftSideBar from "@/components/signup/LeftSideBar";
import SingupForm from "@/components/signup/SingupForm";
import { SingupFormSchema } from "@/types/singup.schema";
import { Grid } from "@mui/material";

const data: SingupFormSchema[] = [
  {
    id: "36f6e7f0-3796-11ee-be56-0242ac120002",
    lable: "Full Name",
    fieldType: "TEXT",
    minLength: 1,
    maxLength: 100,
    defaultValue: "John Doe",
    required: true,
  },
  {
    id: "4063cc90-3796-11ee-be56-0242ac120002",
    lable: "Email",
    fieldType: "TEXT",
    minLength: 1,
    maxLength: 50,
    defaultValue: "hello@gmail.com",
    required: true,
  },
  {
    id: "468b7654-3796-11ee-be56-0242ac120002",
    lable: "Gender",
    fieldType: "LIST",
    defaultValue: "1",
    required: true,
    listOfValues: ["Male", "Female", "Others"],
  },
];

export default function index() {
  return (
    <>
      <Grid container spacing={2} sx={{ height: "100vh" }}>
        <Grid item xs={6} sx={{ display: { xs: "none", md: "block" } }}>
          <LeftSideBar />
        </Grid>
        <Grid item xs={12} md={6}>
          <SingupForm fieldsProps={data} />
        </Grid>
      </Grid>
    </>
  );
}
