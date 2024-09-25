'use client';


import React, {useState} from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { faqs as faqsList } from '../services/faqs'

const FAQ = () =>{
  const [openFaq, setOpenFaq] = useState(null);
  const [faqs,setFaqs] = useState(faqsList);

  return(

    <>
    <section id='preguntas' className="px-4 md:px-24 py-3 my-12">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
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
        </section>
    
    </>
  )
}


export default FAQ;