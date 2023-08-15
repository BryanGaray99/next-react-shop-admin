import React, { useState } from 'react';
import logoWhite from '@assets/astro-place-white.png';
import Image from 'next/image';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleConoceMas = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="flex items-center h-screen justify-center animate-changeBackgroundColor">
      <div className="hidden md:flex flex-col justify-center align-middle h-screen md:w-1/2 bg-black text-white py-16 px-8 text-center">
        <h2 className="relative text-2xl font-bold mb-4">Astro Place</h2>
        <p className="relative text-xl">
          Here is the final project of the Profesional Course of Next.js from Platzi. My goal with the course was to improve my skills with the javascript ecosystem, exploring profesional ways of
          working with Next.js framework.
        </p>
      </div>

      <div className="md:w-1/2">
        <div className="text-center px-4 py-4 mt-4 mb-4">
          <Image
            src={logoWhite}
            width="200px"
            height="170px"
            onClick={() => {
              window.location.href = '/';
            }}
            alt="Astro Place Logo"
          />
          <h1 className="text-white text-3xl font-bold mt-8 mb-8">
            Welcome to <br /> Astro Place
          </h1>
          <div className="md:hidden text-center">
            <button className="bg-black text-white px-6 py-3 rounded-full mt-4 mb-8 mx-auto" onClick={handleConoceMas}>
              About the project
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gray-200 py-4 px-8 flex justify-center items-center">
          <span className="text-gray-800 mr-2">By Bryan Garay</span>
          <a href="https://github.com/BryanGaray99" target="_blank" rel="noopener noreferrer" className="mr-2">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width="24px" height="24px" alt="GitHub Logo" />
          </a>
          <a href="https://linkedin.com/in/bg99astro/" target="_blank" rel="noopener noreferrer" className="mr-2">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="24px" height="24px" alt="LinkedIn Logo" />
          </a>
          <a href="https://www.instagram.com/astronomy_student/?igshid=MjEwN2IyYWYwYw%3D%3D" target="_blank" rel="noopener noreferrer">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" width="24px" height="24px" alt="Instagram Logo" />
          </a>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-4 mx-2 md:w-1/2 max-w-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Astro Place</h2>
            <p className="text-lg text-center">
              Here is the final project of the Profesional Course of Next.js from Platzi. My goal with the course was to improve my skills with the javascript ecosystem, exploring profesional ways of
              working with Next.js framework.
            </p>
            <div className="flex justify-center">
              <button className="bg-black text-white px-4 py-2 rounded-full mt-4 mx-auto" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
