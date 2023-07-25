import React from "react";

const EventHandling = () => {
  const handleButtonClick = (e) => {
    const isButtonClicked =
      e.target.style.backgroundColor === "rgb(0, 86, 179)";

    if (isButtonClicked) {
      e.target.style.backgroundColor = "#007bff";
      e.target.innerText = "Click Me";
    } else {
      e.target.style.backgroundColor = "#0056b3";
      e.target.innerText = "Button Clicked!";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Event Handling</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          transition: "background-color 0.3s ease",
        }}
        onClick={handleButtonClick}
      >
        Click Me
      </button>
    </div>
  );
};

export default EventHandling;
