import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import EventComponent from "../components/Event/Event";
import { fetchEventById, selectEventById } from "features/event/eventSlice";
import { useEffect } from "react";
import { AppDispatch } from "store/store";
import GoBackButton from "components/GoBackButton/GoBackButton";

const SingleEventPage = () => {
  const event = useSelector(selectEventById)
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams()
  const eventId = Number(id);

  useEffect(() => {
    dispatch(fetchEventById(eventId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <GoBackButton />
      <EventComponent event={event}></EventComponent>
    </div>
    
  )
};

export default SingleEventPage;
