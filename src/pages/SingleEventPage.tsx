import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Event } from "../components/Event/Event";

const SingleEventPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>SingleEventPage</h1>
      <Event></Event>
      <Button onClick={handleClick}>Go back</Button>
    </div>
    
  )
};

export default SingleEventPage;
