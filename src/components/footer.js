import React from 'react';
import { GrGithub, GrLinkedinOption, GrMail } from 'react-icons/gr';

function Footer() {
  return (
    <div className='w-full z-20 top-0 bg-orange-100 bg-opacity-100'>
      <div className='flex flex-row justify-around items-center'>
        <a href="https://www.linkedin.com/in/smruti-rekha-pradhan" target="_blank" rel="noopener noreferrer" className='text-lg flex flex-row items-center text-violet-400-300 m-2'>
          <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400-400'>
            <GrLinkedinOption className='text-black ' />
          </div>
          <span className='text-violet-400  ml-2 hidden md:inline'>smruti-rekha-pradhan</span>
        </a>

        <a href="mailto:smrutirekhapradhan939@gmail.com" target="_blank" rel="noopener noreferrer" className='text-lg flex flex-row items-center text-violet-400-300 m-2'>
          <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400-400'>
            <GrMail className='text-black ' />
          </div>
          <span className='text-violet-400  ml-2 hidden md:inline'>smrutirekhapradhan939@gmail.com</span>
        </a>

        <a href="https://github.com/smruti-hustles" target="_blank" rel="noopener noreferrer" className='text-lg flex flex-row items-center text-violet-400-300 m-2'>
          <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400-400'>
            <GrGithub className='text-black ' />
          </div>
          <span className='text-violet-400  ml-2 hidden md:inline'>smruti-hustles</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
