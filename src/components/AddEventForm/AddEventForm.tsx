import React from 'react';
import { Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';

import Event from '../../types/event';
import { addNewEvent } from 'features/event/eventSlice';
import { AppDispatch } from 'store/store';
import { phoneRegExp } from 'helpers/regex';

const StyledForm = styled('div')({
  maxWidth: 400,
  margin: 'auto',
  padding: '16px',
  border: '1px solid #3f51b5',
  borderRadius: 4,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ffffff',
});

const StyledTitle = styled(Typography)({
  marginBottom: '16px',
});

const StyledInput = styled(TextField)({
  marginBottom: '16px',
});

const StyledSelect = styled(FormControl)({
  marginBottom: '16px',
  '& .MuiInputLabel-root': {
    marginBottom: '8px',
  },
});

const StyledButton = styled(Button)({
  marginRight: '8px',
});

const AddEventForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      id: 0,
      title: '',
      description: '',
      date: '',
      image: 'https://picsum.photos/600/200',
      eventType: 'Culture',
      phoneNumber: '',
      email: '',
      location: '',
    },
    onSubmit: (values: Event) => {
      const id = Math.floor(Math.random() * 100);
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
      dispatch(addNewEvent(payload));
      navigate(-1);
    },
    validationSchema: yup.object({
      title: yup.string().required('Field required'),
      date: yup.date().required('Field required'),
      description: yup.string().required('Field required'),
      eventType: yup.string().required('Field required').oneOf(['Sport', 'Culture', 'Health'], 'Invalid event type'),
      phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Field required'),
      email: yup.string().email('Invalid email address').required('Field required'),
      location: yup.string().required('Field required'),
    }),
  });

  return (
    <StyledForm>
      <StyledTitle variant="h4" align="center" gutterBottom>
        Add New Event
      </StyledTitle>
      <FormikProvider value={formik}>
        <Form>
          <StyledInput
            fullWidth
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <StyledInput
            fullWidth
            id="date"
            name="date"
            type="datetime-local"
            label="Event date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={formik.handleChange}
            value={formik.values.date}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
          <StyledInput
            fullWidth
            id="description"
            name="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.description}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
          <StyledInput
            fullWidth
            id="image"
            name="image"
            label="Image URL"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={formik.handleChange}
            value={formik.values.image}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
          <em>This url will generate random image. You can replace it with different url</em>
          <em>Recommend size for image is 600x200</em>
          <br />
          <br />
          <StyledSelect variant="outlined" fullWidth>
            <InputLabel id="eventType-label">Event type</InputLabel>
            <Select
              labelId="eventType-label"
              id="eventType"
              label="Event type"
              name="eventType"
              value={formik.values.eventType}
              onChange={formik.handleChange}
              error={formik.touched.eventType && Boolean(formik.errors.eventType)}
            >
              <MenuItem value="Sport">Sport</MenuItem>
              <MenuItem value="Culture">Culture</MenuItem>
              <MenuItem value="Health">Health</MenuItem>
            </Select>
            {formik.touched.eventType && Boolean(formik.errors.eventType) && (
              <FormHelperText error>{formik.errors.eventType}</FormHelperText>
            )}
          </StyledSelect>
          <StyledInput
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <StyledInput
            fullWidth
            id="email"
            name="email"
            label="Email address"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <StyledInput
            fullWidth
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.location}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
          />
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Save event
          </StyledButton>
          <StyledButton
            type="reset"
            variant="contained"
            color="secondary"
            onClick={formik.handleReset}
          >
            Reset
          </StyledButton>
        </Form>
      </FormikProvider>
    </StyledForm>
  );
};

export default AddEventForm;
