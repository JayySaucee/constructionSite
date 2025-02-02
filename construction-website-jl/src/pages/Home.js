import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import QuoteForm from '../components/quoteForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Update the paths to the images
const firstPic = '/photos/featuredFirst.jpg';
const secondPic = '/photos/featuredSecond.jpg';
const thirdPic = '/photos/featuredThird.jpg';
const fourthPic = '/photos/featuredFourth.jpg';
const backgroundPhoto = '/photos/backgroundImage.jpg';
const logo = '/photos/stockLogo.png';

function Home() {
  useEffect(() => {
    document.title = "JL Installations";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div>
      {/* Backdrop with company information */}
      <div className="relative bg-cover bg-center h-[600px]" style={{ backgroundImage: `url(${backgroundPhoto})` }} data-aos="fade-up">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50 p-4 rounded-lg">
          <img src={logo} alt="Company logo" className="h-32 mb-4" />
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>JL Installations</h1>
          <p className="text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Your comprehensive one-stop solution for all installation-related needs.</p>
        </div>
      </div>

      <div className="mx-auto bg-gray-100" data-aos="fade-up">
        {/* Contact for quote form */}
        <QuoteForm />
      </div>

      <div className="max-w-4xl mx-auto mt-8" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>FEATURED WORK</h1>
        {/* Carousel component from react-responsive-carousel meant to showcase some featured photos on the homepage */}
        <Carousel showThumbs={false} showArrows={false} showStatus={false} interval={4000} autoPlay infiniteLoop autoFocus={true} transitionTime={1000}
          className="rounded-lg overflow-hidden border-black border-2"
        >
          <div>
            <img src={firstPic} alt="Cover with RV trailer" className="w-full h-92 object-cover" />
          </div>
          <div>
            <img src={secondPic} alt="Three entry garage" className="w-full h-92 object-cover" />
          </div>
          <div>
            <img src={thirdPic} alt="Big green garage warehouse" className="w-full h-92 object-cover" />
          </div>
          <div>
            <img src={fourthPic} alt="Framing of warehouse structure" className="w-full h-92 object-cover" />
          </div>
        </Carousel>

        {/* Button to view more photos in the gallery */}
        <div className="text-center mt-4" data-aos="fade-up">
          <Link to="/gallery" className="no-underline">
            <button className='bg-white hover:text-white hover:bg-black text-black font-bold border-black border-2 py-2 px-4 rounded' style={{ fontFamily: 'Montserrat, sans-serif' }}>
              VIEW MORE
            </button>
          </Link>
        </div>

        {/* Contact Information and Business Hours posted in separate divs */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          <div className="py-6 px-6">
            <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
            <ul className="space-y-2 text-lg">
              <li>
                <a href="tel:5035090654" className="hover:semibold flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Phone: (503) 509-0654
                </a>
              </li>
              <li>
                <a href="mailto:info@jlinstallations.com" className="flex items-center hover:semibold">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Email: info@jlinstallations.com
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/4659" target="_blank" rel="noopener noreferrer" className="flex items-center hover:semibold">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  Address: Lancaster Rd SE, Salem, OR 97317
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