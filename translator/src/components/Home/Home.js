// import React from "react";
import home from "./home.png";
import React, { useState } from "react";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const availableLanguages = [
    { label: "English", value: "en" },
    { label: "Sinhala", value: "si" },
  ];

  // Function to handle language change
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={home}
          width="400"
          height="90"
          style={{ alignSelf: "center", marginTop : "100px" }}
        />
      </div>
      {/* Add the dropdown lists for language selection */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop : "50px" }}
      >
      </div>


      



    </div>
  );
}
