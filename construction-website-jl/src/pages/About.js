import React, { useEffect } from 'react';
import portrait from '../photos/portrait.jpg';

function About() {
  useEffect(() => {
    document.title = "JL Installations - About Us";
  }, []);

  return (
    <div className="p-8 m-2 flex justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-7xl w-full flex">
        <img src={portrait} alt="Portrait of Jonathan" className="w-96 h-auto object-cover rounded-xl mr-8" />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
          <p className="mb-4 text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Volutpat parturient blandit volutpat habitant hendrerit. 
            Taciti netus class pulvinar dolor nisi. Morbi taciti lorem
            sagittis augue diam taciti urna. Eu nascetur magna parturient 
            ligula volutpat risus dolor. Eget netus mus metus suscipit vivamus; 
            enim dictumst praesent. Lacinia pharetra vivamus orci vel, ligula 
            per nisi. Eros elementum morbi, vehicula faucibus tempus integer.
          </p>
          <p className="mb-4 text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Volutpat parturient blandit volutpat habitant hendrerit. 
            Taciti netus class pulvinar dolor nisi. Morbi taciti lorem
            sagittis augue diam taciti urna. Eu nascetur magna parturient 
            ligula volutpat risus dolor. Eget netus mus metus suscipit vivamus; 
            enim dictumst praesent. Lacinia pharetra vivamus orci vel, ligula 
            per nisi. Eros elementum morbi, vehicula faucibus tempus integer.
          </p>
          <p className="mb-4 text-center">
            Lorem ipsum odor amet, consectetuer adipiscing elit. 
            Volutpat parturient blandit volutpat habitant hendrerit. 
            Taciti netus class pulvinar dolor nisi. Morbi taciti lorem
            sagittis augue diam taciti urna. Eu nascetur magna parturient 
            ligula volutpat risus dolor. Eget netus mus metus suscipit vivamus; 
            enim dictumst praesent. Lacinia pharetra vivamus orci vel, ligula 
            per nisi. Eros elementum morbi, vehicula faucibus tempus integer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;