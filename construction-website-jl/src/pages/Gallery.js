import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  '/photos/gallery/photo1.jpg',
  '/photos/gallery/photo2.jpg',
  '/photos/gallery/photo3.jpg',
  '/photos/gallery/photo4.jpg',
  '/photos/gallery/photo5.jpg',
  '/photos/gallery/photo6.jpg',
  '/photos/gallery/photo7.jpg',
  '/photos/gallery/photo8.jpg',
  '/photos/gallery/photo9.jpg',
  '/photos/gallery/photo10.jpg',
  '/photos/gallery/photo11.jpg',
  '/photos/gallery/photo12.jpg',
  '/photos/gallery/photo13.jpg',
  '/photos/gallery/photo14.jpg',
  '/photos/gallery/photo15.jpg',
  '/photos/gallery/photo16.jpg',
  '/photos/gallery/photo17.jpg',
  '/photos/gallery/photo18.jpg',
  '/photos/gallery/photo19.jpg',
  '/photos/gallery/photo20.jpg',
  '/photos/gallery/photo21.jpg',
  '/photos/gallery/photo22.jpg',
  '/photos/gallery/photo23.jpg',
  '/photos/gallery/photo24.jpg',
  '/photos/gallery/photo25.jpg',
  '/photos/gallery/photo26.jpg',
  '/photos/gallery/photo27.jpg',
  '/photos/gallery/photo28.jpg',
  '/photos/gallery/photo29.jpg',
  '/photos/gallery/photo30.jpg',
  '/photos/gallery/photo31.jpg',
];

const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      document.title = "WVMB - Previous Work";
    }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-24 p-8">
      <h1 className="text-4xl font-bold mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>PREVIOUS WORK</h1>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border-t border-black">
        {images.map((image, index) => (
          <div key={index} className="gallery-item rounded-lg overflow-hidden border-2 border-black shadow-lg">
            <img
              src={image}
              alt={`Gallery grid of previous installation: ${index + 1}`}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              onError={(e) => {
                console.error(`Failed to load image: ${image}`);
                e.target.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;