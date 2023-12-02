/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Load form data from localStorage on component mount
    const savedFormData = JSON.parse(localStorage.getItem('formData') || '{}');
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleNameChange = (event: any) => {
    setFormData((prevData) => ({ ...prevData, name: event.target.value }));
  };

  const handlePhoneChange = (event: any) => {
    setFormData((prevData) => ({ ...prevData, phone: event.target.value }));
  };

  const handleEmailChange = (event: any) => {
    setFormData((prevData) => ({ ...prevData, email: event.target.value }));
  };

  const handleFormSubmit = () => {
    // console.log("Form data:", formData);
    // Save the form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    setFormData({
      name: '',
      phone: '',
      email: '',
    });
    navigate('/secondPage');
  };

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
        <TextField
          label="Name"
          value={formData.name}
          onChange={handleNameChange}
        />
        <TextField
          label="Phone Number"
          value={formData.phone}
          onChange={handlePhoneChange}
        />
        <TextField
          label="Email"
          value={formData.email}
          onChange={handleEmailChange}
        />
        <Button
          variant={"outlined"}
          sx={{
            mt: '10px',
            color: 'black',
            '&:hover': {
              bgcolor: 'green', // Change this to the desired hover color
              color: 'white',
            },
          }}
          onClick={handleFormSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default FirstPage;
