import React from 'react'
import Header from '../components/client/global/Header';
import about_img1 from '../assets/about_img1.png';
import about_img2 from "../assets/about_img2.png";
import about_img3 from "../assets/about_img3.png";
import about_img4 from "../assets/about_img4.png";
import about_img5 from "../assets/about_img5.png";
import about_img6 from "../assets/about_img6.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import Footer from '../components/client/global/Footer';

const Gallery = () => {
  const images = [about_img1, about_img2, about_img3, img1, img2, img3, about_img4, about_img5, about_img6, ]

  return (
    <div className="bg-[#1b1b1b]">
      <Header />
      <div className="flex flex-col justify-center items-center max-h-full max-w-full py-24">
        <div className="max-w-2xl mx-auto text-center mb-4 lg:mb-7 ">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
            Gallery
          </h2>
          <p className="mt-1 text-white">Enjoy my images, kingsmen!</p>
        </div>
        <div className="columns-3  max-w-4xl gap-6">
          {images &&
            images.map((item, idx) => (
              <img
                className="w-full aspect-square object-cover h-1/3 py-3 ease-in-out duration-300 rounded-"
                src={item}
                key={idx}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery