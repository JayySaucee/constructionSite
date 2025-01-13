import React, { useEffect } from 'react';

function About() {
     useEffect(() => {
            document.title = "JL Installations - About Us";
        }, []);
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p>Learn more about our company.</p>
    </div>
  );
}

export default About;