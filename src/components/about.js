import React from 'react';
import { styles } from '../utils/style';
import profile from '../assets/profile.png';
import '../App.css';

function About() {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10 p-10" id="Home">
      <div className="flex-1 py-4">
        <span className={styles.heroHeadText}>
          Welcome to <span className="text-orange-600">Tuition Point</span>
          <br />
          <span className={styles.heroSubtext}>
            Connecting Students with Quality Tutors
          </span>
        </span>
        <div className='mt-4'>
          <p className="text-lg">
            Are you a student looking for a tutor in your area? Or a teacher wanting to offer your expertise? Tuition Point is here to help!
          </p>
        </div>
        <div className='mt-8 flex space-x-4'>
          <a href="/login">
            <div className='p-4 w-[10rem] rounded-xl text-white bg-orange-500 flex justify-center shadow-lg hover:shadow-orange-600'>
              Login
            </div>
          </a>
          <a href="/signup">
            <div className='p-4 w-[10rem] rounded-xl text-white bg-violet-500 flex justify-center shadow-lg hover:shadow-violet-600'>
              Sign Up
            </div>
          </a>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <img src={profile} alt='Tuition Point' className='element object-contain p-4' />
      </div>
    </div>
  );
}

export default About;
