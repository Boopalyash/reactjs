import React, { useState, useEffect } from "react";

const EventHandlingInput = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "male",
    state: "tamilnadu",
    city: "namakkal",
  });

  const [consoleOutput, setConsoleOutput] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setConsoleOutput([JSON.stringify(formData)]);
  };

  const handleInput = (event) => {
    const input = event.target;
    const numericValue = input.value.replace(/\D/g, "");
    setFormData((previousFormData) => ({
      ...previousFormData,
      [input.name]: numericValue,
    }));
  };

  useEffect(() => {
    if (formData.state === "tamilnadu") {
      setCityOptions([
        { value: "madurai", label: "Madurai" },
        { value: "chennai", label: "Chennai" },
        { value: "coimbatore", label: "Coimbatore" },
      ]);
    } else if (formData.state === "kerala") {
      setCityOptions([
        { value: "kochi", label: "Kochi" },
        { value: "trivandrum", label: "Trivandrum" },
        { value: "kottayam", label: "Kottayam" },
      ]);
    } else if (formData.state === "karnataka") {
      setCityOptions([
        { value: "bangalore", label: "Bangalore" },
        { value: "mysore", label: "Mysore" },
        { value: "mangalore", label: "Mangalore" },
      ]);
    } else {
      setCityOptions([]);
    }
  }, [formData.state]);

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </label>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onInput={handleInput}
              style={styles.input}
              required
            />
          </label>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Gender:
            <select
              name="gender"
              value={formData.gender}
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
            value={formData.state}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="tamilnadu">Tamilnadu</option>
            <option value="kerala">Kerala</option>
            <option value="karnataka">karnataka</option>
            <option value="other">Other</option>
          </select>
        </div>

        {cityOptions.length > 0 && (
          <div style={styles.formGroup}>
            <label style={styles.label}>City:</label>
            <select
              name="city"
              value={formData.city}
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
                checked={formData.city === "namakkal"}
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
                checked={formData.city === "salem"}
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
                checked={formData.city === "karur"}
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
    background: "linear-gradient(45deg, #ff8080, #80b3ff)",
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
};
