import React, { useState, useEffect } from "react";

const EventHandlingInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [state, setState] = useState("tamilnadu");
  const [city, setCity] = useState("namakkal");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [errors, setErrors] = useState({});

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
      setConsoleOutput([
        JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          gender,
          state,
          city,
        }),
      ]);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate First Name

    if (!firstName.trim()) {
      errors.firstName = "First Name is required ";
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
    if (!password.length) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
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
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
          {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
          {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
          {errors.password && <p style={styles.error}>{errors.password}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onInput={handleInput}
              style={styles.input}
              required
            />
          </label>
          {errors.phoneNumber && (
            <p style={styles.error}>{errors.phoneNumber}</p>
          )}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Gender:
            <select
              name="gender"
              value={gender}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>State:</label>
          <select
            name="state"
            value={state}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="tamilnadu">Tamilnadu</option>
            <option value="kerala">Kerala</option>
            <option value="karnataka">Karnataka</option>
            <option value="other">Other</option>
          </select>
        </div>

        {cityOptions.length > 0 && (
          <div style={styles.formGroup}>
            <label style={styles.label}>City:</label>
            <select
              name="city"
              value={city}
              onChange={handleChange}
              style={styles.input}
            >
              {cityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <div style={styles.formGroup}>
          <label style={styles.label}>Other:</label>
          <div>
            <label>
              <input
                type="radio"
                name="city"
                value="namakkal"
                checked={city === "namakkal"}
                onChange={handleChange}
                style={{ marginRight: "4px" }}
              />
              NAMAKKAL
            </label>
            <label>
              <input
                type="radio"
                name="city"
                value="salem"
                checked={city === "salem"}
                onChange={handleChange}
                style={{ marginRight: "4px", marginLeft: "10px" }}
              />
              SALEM
            </label>
            <label>
              <input
                type="radio"
                name="city"
                value="karur"
                checked={city === "karur"}
                onChange={handleChange}
                style={{ marginRight: "4px", marginLeft: "10px" }}
              />
              KARUR
            </label>
          </div>
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
      <div style={styles.console}>
        <h3> Output:</h3>
        {consoleOutput.map((output, index) => (
          <p key={index}>{output}</p>
        ))}
      </div>
    </div>
  );
};

export default EventHandlingInput;

const styles = {
  container: {
    background: "linear-gradient(180deg, #80b3ff, #ff8080)",
    minHeight: "100vh",
  },
  form: {
    maxWidth: "300px",
    margin: "0 auto",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    width: "100%",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  console: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#f2f2f2",
  },
  error: {
    color: "white",
    fontSize: "15px",
  },
};
