import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import firstPic from '../photos/firstConstruction.jpg';
import secondPic from '../photos/secondConstruction.jpg';
import thirdPic from '../photos/thirdConstruction.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


function Home() {
    useEffect(() => {
        document.title = "JL Installations";
    }, []);

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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="py-6 px-6">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="tel:1234567890" className="hover:semibold flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Phone: (123) 456-7890
                </a>
              </li>
              <li>
              <a href="mailto:info@jlinstallations.com" className="flex items-center hover:semibold">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Email: info@jlinstallations.com
              </a>
              </li>
              <li>
              <a href="https://goo.gl/maps/123MainStAnytownUSA" target="_blank" rel="noopener noreferrer" className="flex items-center hover:semibold">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  Address: 123 Main St, Anytown, USA
              </a>
              </li>
            </ul>
          </div>
          <div className="py-6 px-6">
            <h2 className="text-2xl font-bold mb-2">Business Hours</h2>
            <ul className="space-y-2 text-lg">
              <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;