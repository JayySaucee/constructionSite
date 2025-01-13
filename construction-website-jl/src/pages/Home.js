import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import firstPic from '../photos/firstConstruction.jpg';
import secondPic from '../photos/secondConstruction.jpg';
import thirdPic from '../photos/thirdConstruction.webp';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 justify-center text-center" >JL Installations</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-center"> Your comprehensive one-stop solution for all installation-related needs.</p>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src={firstPic} alt="Image 1" className="w-full h-92 object-cover" />
            <p className="legend">Breh</p>
          </div>
          <div>
            <img src={secondPic} alt="Image 2" className="w-full h-92 object-cover" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src={thirdPic} alt="Image 3" className="w-full h-92 object-cover" />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;