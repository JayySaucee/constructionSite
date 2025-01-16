import React, { useEffect } from 'react';

function Contact() {
     useEffect(() => {
            document.title = "JL Installations - Contact Page";
        }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Featured Work</h1>
    </div>
  );
}

export default Contact;