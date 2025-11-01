import React from "react";

const BackgroundTest = () => {
  return (
    <>
      {/* Teal Glow Right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "transparent",
          backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(173, 109, 244, 0.5),
          transparent 100%
        )
      `,
          filter: "blur(40px)",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Your Content/Components */}
    </>
  );
};

export default BackgroundTest;
