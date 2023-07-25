import React from "react";

const Calculator = () => {
  return (
    <div style={containerStyle}>
      <div style={calculatorStyle}>
        <div style={displayStyle}>0</div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle}>1</button>
          <button style={buttonStyle}>2</button>
          <button style={buttonStyle}>3</button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#f0f0f0",
              color: "#666",
            }}
          >
            +
          </button>
          <button style={buttonStyle}>4</button>
          <button style={buttonStyle}>5</button>
          <button style={buttonStyle}>6</button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#f0f0f0",
              color: "#666",
            }}
          >
            -
          </button>
          <button style={buttonStyle}>7</button>
          <button style={buttonStyle}>8</button>
          <button style={buttonStyle}>9</button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#f0f0f0",
              color: "#666",
            }}
          >
            *
          </button>
          <button style={buttonStyle}>0</button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#e0e0e0",
              color: "#333",
            }}
          >
            =
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#f0f0f0",
              color: "#666",
            }}
          >
            /
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "orange",
              color: "white",
            }}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const calculatorStyle = {
  width: "250px",
  backgroundColor: "#3e5b74",
  borderRadius: "20px",
  padding: "20px",
  boxShadow: "0 2px 10px  rgba(0, 0, 0, 1)",
};

const buttonStyle = {
  fontSize: "20px",
  padding: "10px",
  border: "1px solid blue",
  borderRadius: "100px",
  cursor: "pointer",
  width: "100%",
  height: "50px",
  backgroundColor: "white",
};

const displayStyle = {
  fontSize: "24px",
  textAlign: "right",
  padding: "10px",
  backgroundColor: "#fff",
  border: "1px solid blue",
  borderRadius: "8px",
  marginBottom: "10px",
};

const buttonContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gridGap: "10px",
};
