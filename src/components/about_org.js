import React from 'react';
import { styles } from '../utils/style';
import teamPhoto from '../assets/teamPhoto.jpeg'; // Update with your team photo path
import '../App.css';



function AboutPage() {
  return (
    <div className="container mx-auto p-8" id="About_org">
      <h1 className={`${styles.heroHeadText} text-center mb-8`}>About Tuition Point</h1>
      
      <section className="mb-8">
        <h2 className={`${styles.heroSubtext} text-orange-600 mb-4`}>Our Mission</h2>
        <p className="text-lg">
          At Tuition Point, our mission is to bridge the gap between students and quality educators in their area. We aim to make education accessible and convenient for everyone by providing a platform where students can easily find and book tutoring sessions with qualified teachers.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className={`${styles.heroSubtext} text-orange-600 mb-4`}>What We Do</h2>
        <p className="text-lg">
          Tuition Point connects students with qualified tutors based on their specific needs and location. Whether you're looking for help with math, science, languages, or any other subject, our platform makes it easy to find the right tutor for you. Simply log in, specify your requirements, and get matched with available teachers in your area. Book your sessions and start learning!
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className={`${styles.heroSubtext} text-orange-600 mb-4`}>Meet the Team</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <img src={teamPhoto} alt="Team" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover" />
            <h3 className="text-center text-xl font-semibold">Smruti Rekha Pradhan</h3>
            <p className="text-center text-lg">Founder & Full-Stack Developer</p>
            <p className="text-center">
              Smruti is passionate about education and technology. With a background in full-stack development and data analysis, she founded Tuition Point to help students connect with the best tutors in their area.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img src={teamPhoto} alt="Team" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover" />
            <h3 className="text-center text-xl font-semibold">John Doe</h3>
            <p className="text-center text-lg">Head of Marketing</p>
            <p className="text-center">
              John has over 10 years of experience in marketing and communications. He is dedicated to spreading the word about Tuition Point and connecting with the community.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <img src={teamPhoto} alt="Team" className="rounded-full mx-auto mb-4 w-48 h-48 object-cover" />
            <h3 className="text-center text-xl font-semibold">Jane Smith</h3>
            <p className="text-center text-lg">Lead Educator</p>
            <p className="text-center">
              Jane has been an educator for over 15 years, specializing in curriculum development and teacher training. She ensures that all tutors on our platform meet the highest standards of quality.
            </p>
          </div>
        </div>
      </section>
      
      
    </div>
  );
}

export default AboutPage;
