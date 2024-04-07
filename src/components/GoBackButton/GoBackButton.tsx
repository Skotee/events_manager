import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(-1)}
      variant="contained"
      color="primary"
      sx={{
        textTransform: 'none',
        borderRadius: '20px',
        padding: '10px 20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#1976d2',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      Go back
    </Button>
  );
};

export default GoBackButton;
