import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import moment from "moment";

const EventHandlingInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [state, setState] = useState("tamilnadu");
  const [city, setCity] = useState("madurai");
  const [cityOptions, setCityOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [serialNumber, setSerialNumber] = useState(0);
  const [consoleOutput, setConsoleOutput] = useState([
    {
      serialNumber: 1,
      firstName: "Sachin",
      lastName: "Tendulkar",
      email: "sachin@tendulkar.com",
      phoneNumber: "1234567890",
      time: moment().format("h:mm A"),
      date: moment().format("DD-MM-YYYY"),
    },
    {
      serialNumber: 2,
      firstName: "Virat",
      lastName: "Kolhi",
      email: "virat@kolhi.com",
      phoneNumber: "9876543210",
      time: moment().format("h:mm A"),
      date: moment().format("DD-MM-YYYY"),
    },
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "phoneNumber") {
      setPhoneNumber(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "state") {
      setState(value);
      setCity("");
    } else if (name === "city") {
      setCity(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      const userData = {
        serialNumber: serialNumber + 3,
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        time: moment().format("h:mm A"),
        date: moment().format("DD-MM-YYYY"),
      };
      setConsoleOutput((prevOutput) => [...prevOutput, userData]);
      setSerialNumber((prevSerialNumber) => prevSerialNumber + 1);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate First Name
    if (!firstName.length) {
      errors.firstName = "First Name is required";
      isValid = false;
    } else if (firstName.length < 5) {
      errors.firstName = "Minimum 5 characters required";
      isValid = false;
    }

    // Validate Last Name
    if (!lastName.length) {
      errors.lastName = "Last Name is required";
      isValid = false;
    }

    // Validate Email
    if (!email.length) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid Email";
      isValid = false;
    }

    // Validate Password
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const hasNumber = /\d/.test(password);

    if (!password.length) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    } else if (!(hasUppercase && hasLowercase && hasSymbol && hasNumber)) {
      errors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one symbol, and one number";
      isValid = false;
    }

    // Validate Phone Number
    if (!phoneNumber.length) {
      errors.phoneNumber = "Phone Number is required";
      isValid = false;
    } else if (phoneNumber.length < 10) {
      errors.phoneNumber = "Phone Number must be 10 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInput = (event) => {
    const input = event.target;
    const numericValue = input.value.replace(/\D/g, "");
    setPhoneNumber(numericValue);
  };

  useEffect(() => {
    if (state === "tamilnadu") {
      setCityOptions([
        { value: "madurai", label: "Madurai" },
        { value: "chennai", label: "Chennai" },
        { value: "coimbatore", label: "Coimbatore" },
      ]);
    } else if (state === "kerala") {
      setCityOptions([
        { value: "kochi", label: "Kochi" },
        { value: "trivandrum", label: "Trivandrum" },
        { value: "kottayam", label: "Kottayam" },
      ]);
    } else if (state === "karnataka") {
      setCityOptions([
        { value: "bangalore", label: "Bangalore" },
        { value: "mysore", label: "Mysore" },
        { value: "mangalore", label: "Mangalore" },
      ]);
    } else {
      setCityOptions([]);
    }
  }, [state]);

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" align="center">
          Personal Details
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              value={email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onInput={handleInput}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={gender}
                onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>State</InputLabel>
              <Select
                label="State"
                name="state"
                value={state}
                onChange={handleChange}
              >
                <MenuItem value="tamilnadu">Tamilnadu</MenuItem>
                <MenuItem value="kerala">Kerala</MenuItem>
                <MenuItem value="karnataka">Karnataka</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {cityOptions.length > 0 && (
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>City</InputLabel>
                <Select
                  label="City"
                  name="city"
                  value={city}
                  onChange={handleChange}
                >
                  {cityOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Box mt={4}>
        <Typography variant="h6">Output:</Typography>
        <TableContainer component={Paper} style={tableContainerStyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={tableCellStyle}>Serial Number</TableCell>
                <TableCell style={tableCellStyle}>First Name</TableCell>
                <TableCell style={tableCellStyle}>Last Name</TableCell>
                <TableCell style={tableCellStyle}>Email</TableCell>
                <TableCell style={tableCellStyle}>Phone Number</TableCell>
                <TableCell style={tableCellStyle}>Date</TableCell>
                <TableCell style={tableCellStyle}>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {consoleOutput.map((userData, index) => (
                <TableRow key={index}>
                  <TableCell style={tableCellStyleNumber}>
                    {userData.serialNumber}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>
                    {userData.firstName}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>
                    {userData.lastName}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>
                    {userData.email}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>
                    {userData.phoneNumber}
                  </TableCell>
                  <TableCell style={tableCellStyle1}>{userData.date}</TableCell>
                  <TableCell style={tableCellStyle1}>{userData.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default EventHandlingInput;
const tableContainerStyle = {
  background: "linear-gradient(to top, #f2f2f2, #e0e0e0)",
  padding: "10px",
};
const tableCellStyle = {
  fontSize: "14px",
  fontWeight: "bold",
};
const tableCellStyle1 = {
  fontSize: "14px",
  color: "red",
};
const tableCellStyleNumber = {
  fontSize: "14px",
  color: "blue",
};
