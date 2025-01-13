import React, { useEffect } from 'react';

function FeaturedWork() {
     useEffect(() => {
            document.title = "JL Installations - Featured Work";
        }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Featured Work</h1>
      <p>Check out some of our featured projects.</p>
    </div>
  );
}

export default FeaturedWork;