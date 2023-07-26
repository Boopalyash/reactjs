import React, { useState } from "react";

const EventHandlingInput = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "male",
    city: "namakkal",
  });

  const [consoleOutput, setConsoleOutput] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newOutput = [...consoleOutput, JSON.stringify(formData)];
    setConsoleOutput(newOutput);
  };

  return (
    <div>
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
          <label style={styles.label}>City:</label>
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

const styles = {
  form: {
    maxWidth: "300px",
    margin: "0 auto",
    marginTop: "100px",
  },
  formGroup: {
    marginBottom: "10px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    display: "block",
  },
  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  console: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#f2f2f2",
  },
};

export default EventHandlingInput;
