import React from "react";

// components



export default function Auth({ children }) {
  return (
    <>
      
      <main>
        <section>
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_.png") + ")",
            }}
          ></div>
          {children}
        
        </section>
      </main>
    </>
  );
}
