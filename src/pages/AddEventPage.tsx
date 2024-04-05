import { Button } from "@mui/material";
import AddEventForm from "components/AddEventForm/AddEventForm";
import { useNavigate } from "react-router-dom";

const AddEventPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return(
    <div>
      <h1>AddEventPage</h1>
      <AddEventForm></AddEventForm>
      <Button onClick={handleClick}>Go back</Button>
    </div>
  )
};

export default AddEventPage;

// https://formik.org/docs/tutorial