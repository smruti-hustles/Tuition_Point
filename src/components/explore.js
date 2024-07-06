import React from 'react';
import Tilt from 'react-parallax-tilt';
import { styles } from '../utils/style';
import { tutors } from '../constants';
import '../components/style.css';
import { AiFillStar } from 'react-icons/ai';

function Explore() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Explore'>
        <span className={styles.sectionHeadText}>
          Explore Tutors
        </span>
        <hr className='w-[35%]' />
        <div className={styles.sectionText}>
        Discover the best tutors available in your area. Browse through detailed profiles,
         subjects, ratings, and connect with the right tutor for your needs. Explore a diverse 
         range of subjects including Mathematics, Science, Languages, History, and more. 
         Whether you're preparing for exams, enhancing your skills, or seeking academic support, 
         our platform makes it easy to find experienced tutors who are committed to helping you succeed. 
         Connect with passionate educators who offer personalized learning experiences tailored to your 
         learning style and goals. Start your journey to academic excellence today with Tuition Point!


        </div>
      </div>

      <div className='flex flex-wrap p-8 justify-center items-center'>
        {
          tutors.map((tutor) => (
            <Tilt
              key={tutor.name}
              className="w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 items-center
                hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900"
            >
              <div className='flex justify-center items-center mb-3'>
                <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'>
                  <a href={tutor.profile_link} target='_blank' rel='noopener noreferrer'>
                    <img src={tutor.image} alt={tutor.name} className='h-[40px] w-[40px] rounded-full' />
                  </a>
                </div>
              </div>
              <img src={tutor.image} alt={tutor.name} className='h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl' />
              <div className='text-2xl text-violet-600 font-extrabold text-center mt-3'>
                {tutor.name}
              </div>
              <div className='text-center mt-2 text-orange-500'>
                <span className='block'>{tutor.subject}</span>
                <div className='flex justify-center items-center mt-1'>
                  <AiFillStar className='text-yellow-500' />
                  <span className='ml-1'>{tutor.rating}</span>
                </div>
              </div>
              <div className='text-center mt-2 text-orange-500 overflow-hidden overflow-ellipsis'>
                <span className='block max-w-full px-2'>
                  {tutor.description}
                </span>
              </div>
            </Tilt>
          ))
        }
      </div>
    </div>
  );
}

export default Explore;
