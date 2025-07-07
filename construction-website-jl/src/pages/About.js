import React, { useEffect } from 'react';
import AOS from 'aos';

function About() {
  useEffect(() => {
      document.title = "WVMB - About";
    }, []);
  
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      

  return (
    <div className="p-2 m-12 flex justify-center">
      
      {/* About Us page filled with placeholder information for the time being */}
      <div className="max-w-4xl mx-auto mt-8 p-4">
        <h1 className="text-4xl w-auto py-4 text-black font-bold mb-12 text-center" data-aos="fade-up" style={{ fontFamily: 'Montserrat, sans-serif' }}>ABOUT US</h1>
        
        <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Mission</h2>
          <p className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            At Willamette Valley Metal Buildings LLC, we are committed to providing top-quality installation services to our clients. Our mission is to deliver exceptional results that exceed expectations and ensure customer satisfaction.
          </p>
        </div>

        <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Team</h2>
          <p className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our team consists of skilled professionals with years of experience in the installation industry. We are dedicated to delivering superior workmanship and exceptional service on every project.
          </p>
        </div>

        <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Our Values</h2>
          <p className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Integrity, quality, and customer satisfaction are the core values that drive our business. We take pride in our work and strive to build lasting relationships with our clients based on trust and reliability.
          </p>
        </div>

        <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact Us</h2>
          <p className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            For more information about our services or to request a quote, please contact us using the form on our homepage
            or reach out to us via email at 
              <a href="mailto:willamettevalleymetalbuildings@gmail.com" 
                className="ml-2 text-blue-500 hover:font-semibold hover:text-blue-700">willamettevalleymetalbuildings@gmail.com
              </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;