import React from "react";

// components


export default function Admin({ children }) {
  return (
    <>
    
    <main>
        <section>
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url(" + require("assets/img/ref.jpg") + ")",
            }}
          ></div>
          {children}
        
        </section>
      </main>
    </>
  );
}
