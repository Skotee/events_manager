import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Field, ErrorMessage, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';

// import { addEvent, AddEventAction } from '../../store/actions';
import Event from '../../types/event';
import { addEvent } from 'features/event/eventSlice';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// interface Props {
//   addEvent: (event: Event) => AddEventAction;
// }

const AddEventForm: React.FC = () => {
  // const []
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: 0,
      title: '',
      description: '',
      date: '',
      image: '',
      eventType: 'Culture',
      phoneNumber: '',
      email: '',
      location: '',
    },
    onSubmit: (values: Event) => {
      const id = Math.floor(Math.random() * 100)
      const payload = {
        id: id,
        title: values.title,
        description: values.description,
        date: values.date,
        image: values.image,
        eventType: values.eventType,
        phoneNumber: values.phoneNumber,
        email: values.email,
        location: values.location,
      };
      console.log(payload);

      dispatch(
        addEvent(payload)
      )
      navigate(-1);
      // resetForm();
    },
    validationSchema: yup.object({
      title: yup.string().required('Field required'),
      date: yup.date().required('Field required'),
      description: yup.string().required('Field required'),
      // image: yup.string().url('Invalid URL format').required('Field required'),
      eventType: yup.string().required('Field required').oneOf(['Sport', 'Culture', 'Health'], 'Invalid event type'),
      // phoneNumber: yup.string().matches(/^\d{9}$/, 'Invalid phone number').required('Field required'),
      email: yup.string().email('Invalid email address').required('Field required'),
      location: yup.string().required('Field required'),
    }),
  });

  return (
    <div>
      <h2>Add new event</h2>
      <FormikProvider value={formik}>
          <Form>
            <div>
              <label htmlFor="title">Title:</label>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="date">Event date:</label>
              <Field type="datetime-local" name="date" />
              <ErrorMessage name="date" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <Field as="textarea" name="description" />
              <ErrorMessage name="description" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="image">Image URL:</label>
              <Field type="text" name="image" />
              <ErrorMessage name="image" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="eventType">Event type:</label>
              <Field as="select" name="eventType">
                <option value="">Select event type</option>
                <option value="Sport">Sport</option>
                <option value="Culture">Culture</option>
                <option value="Health">Health</option>
              </Field>
              <ErrorMessage name="eventType" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone number:</label>
              <Field type="text" name="phoneNumber" />
              <ErrorMessage name="phoneNumber" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <Field type="text" name="location" />
              <ErrorMessage name="location" component="div" className="error" />
            </div>
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Save event</button>
            <button type="reset">Reset</button>
          </Form>
      </FormikProvider>
    </div>
  );
};

const mapDispatchToProps = {
  addEvent,
};

export default connect(null, mapDispatchToProps)(AddEventForm);
