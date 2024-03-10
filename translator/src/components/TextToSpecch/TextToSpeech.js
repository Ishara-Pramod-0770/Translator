import React from 'react'
import textspeech from "./textspeech.png";

export default function TextToSpeech() {
  return (
    <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={textspeech}
          width="700"
          height="60"
          style={{ alignSelf: "center", marginTop : "100px" }}
        />
      </div>
    </div>
  )
}
