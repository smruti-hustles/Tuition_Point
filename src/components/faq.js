import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { styles } from '../utils/style';
import '../App.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-b border-gray-200 py-4'>
      <div onClick={toggleOpen} className='flex justify-between items-center cursor-pointer'>
        <h3 className='text-lg font-medium text-gray-900'>{question}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <p className='mt-2 text-gray-700'>{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: ' What is Tuition Point?',
      answer: 'Tuition Point is an online platform that connects students with quality tutors in their area. We aim to make it easy for students to find the help they need and for teachers to offer their expertise.'
    },
    {
      question: ' How do I find a tutor?',
      answer: 'You can find a tutor by creating a profile and specifying your needs, such as the subject you need help with and your location. Our automated matching system will connect you with the best-suited tutors in your area.'
    },
    {
      question: 'How do I become a tutor on Tuition Point?',
      answer: 'To become a tutor, sign up on our platform and create a detailed profile highlighting your qualifications, experience, and subjects you specialize in. Once your profile is verified, students can start booking sessions with you.'
    },
    {
      question: 'How does the booking system work?',
      answer: 'Our booking system allows students to view tutors availability and schedule sessions directly through the website. Tutors can update their availability, and students receive reminders for upcoming sessions.'
    },
    {
      question: 'Is there a way to communicate with my tutor?',
      answer: 'Yes, we have an integrated chat system for direct communication between students and tutors. For online sessions, we also provide video conferencing tools.'
    },
    {
        question: 'How are the payments handled?',
        answer: 'Payments are securely processed through our payment gateway. Students can pay for sessions directly through the website, and tutors receive their payments promptly. Invoices and receipts are provided for transparency.'
      },
      {
        question: 'Can I track my progress?',
        answer: 'Absolutely! We provide tools for students and parents to track progress, including attendance records, grades, and performance analytics.'
      },
      {
        question: 'What if I need help or have a question?',
        answer: 'We offer dedicated customer support to assist with any issues or questions you may have. You can contact us through the support section on our website.'
      },
      {
        question: 'Can I share resources with my tutor?',
        answer: 'Yes, tutors can share study materials, homework assignments, and additional resources with their students through our platform.'
      }  
  ];

  return (
    <div className="flex flex-wrap justify-center items-center mt-10 p-10" id="FAQ">
      <div className="flex-1 py-4">
        <span className={styles.heroHeadText}>
          Frequently Asked <span className="text-orange-600">Questions</span>
        </span>
        <div className='mt-8 max-w-screen-lg mx-auto'>
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
