import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blueprintImages = [
  '/photos/blueprints/blueprint1.jpg',
  '/photos/blueprints/blueprint2.jpg',
  '/photos/blueprints/blueprint3.jpg',
];

function SitePreparation() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-24 p-4">
      <h1 className="text-4xl w-auto text-black font-bold mb-12 text-center" data-aos="fade-up" style={{ fontFamily: 'Montserrat, sans-serif' }}>GUIDELINES ON SITE PREPARATIONS</h1>
      
      <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>The Importance of Site Preparation</h2>
        <p className="text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Site preparation is a crucial step in any construction project. It ensures a strong foundation, a safe work environment, and compliance with regulations while preventing costly delays.
        </p>
      </div>

      <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Why Site Preparation Matters</h2>
        <ul className="list-disc list-inside text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <li className="mb-4">Assessing Site Conditions: A thorough site survey helps identify soil composition, drainage needs, and potential obstacles like existing structures or underground utilities.</li>
          <li className="mb-4">Securing Permits & Approvals: Many projects require permits for excavation, zoning, or environmental impact. Addressing these early prevents legal and scheduling issues.</li>
          <li className="mb-4">Ensuring Safety & Compliance: Clearing debris, managing vegetation, and setting up safety measures reduce the risk of accidents and create a secure work environment.</li>
        </ul>
      </div>

      <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Steps in Site Preparation</h2>
        <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>1. Site Assessment</h3>
        <p className="text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Before starting, conduct a detailed site inspection:
        </p>
        <ul className="list-disc list-inside text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <li className="mb-4">Survey the land: Hire a professional surveyor to map boundaries, structures, and topography.</li>
          <li className="mb-4">Test the soil: Assess stability and load-bearing capacity, especially for structures.</li>
          <li className="mb-4">Evaluate drainage: Identify potential flooding areas and plan for proper water management.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>2. Clearing the Site</h3>
        <p className="text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Once the site is assessed and permits are in place, clearing begins:
        </p>
        <ul className="list-disc list-inside text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <li className="mb-4">Mark the boundaries to define the work area.</li>
          <li className="mb-4">Remove vegetation like trees, shrubs, and grass (following local regulations).</li>
          <li className="mb-4">Clear debris and rocks to create a clean, level surface for construction.</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>3. Excavation & Grading</h3>
        <p className="text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          For projects requiring foundations or landscaping:
        </p>
        <ul className="list-disc list-inside text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <li className="mb-4">Excavation: Remove soil or rock as needed for foundations or site leveling.</li>
          <li className="mb-4">Grading: Shape the land for proper drainage and stability, ensuring water flows correctly and preventing erosion.</li>
        </ul>
      </div>

      <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Setting the Stage for Success</h2>
        <p className="text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Proper site preparation lays the groundwork for a smooth construction process. By addressing site conditions early, securing necessary permits, and ensuring a safe, level foundation, you help avoid delays and costly issues down the road.
        </p>
      </div>

      <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Plans for Guidance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blueprintImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-gray-300 shadow-lg">
              <img src={image} alt={`Blueprint ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 p-8 bg-gray-100 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Client Responsibilities</h2>
        <p className="text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          As a client, it is important to ensure that the site is prepared according to the guidelines provided. This includes clearing the site, ensuring proper drainage, and providing access to utilities if needed. Proper site preparation helps ensure a smooth and successful installation process.
        </p>
      </div>
    </div>
  );
}

export default SitePreparation;