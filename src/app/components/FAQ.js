'use client';


import React, {useState} from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { faqs as faqsList } from '../services/faqs'
import motionTitle from '../hooks/gui-hook';
const FAQ = () =>{
  const [openFaq, setOpenFaq] = useState(null);
  const [faqs,setFaqs] = useState(faqsList);
  const { titleh1} = motionTitle();
  return(

    <>
    <section id='preguntas' className="px-4 md:px-24 mt-12 py-20  bg-[#f5f4ed]">     
         <div className='container mx-auto'>
          {titleh1('Preguntas frecuentes')};
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === index && (
                  <div className="p-4 bg-gray-50 font-serif text-zinc-600 rounded">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div> 
        </section>
    
    </>
  )
}


export default FAQ;