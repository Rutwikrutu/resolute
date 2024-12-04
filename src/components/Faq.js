import React, { useState } from 'react';
import './css/FAQAccordion.css';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div 
            className="faq-question" 
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="faq-icon">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          <div
            className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
          >
            <p>{faq.answer}</p>
            <p>{faq.subanswer}</p>
            <p>{faq.subanswer1}</p>
            <p>{faq.subanswer2}</p>

            
          </div>
        </div>
      ))}
    </div>
  );
};

const faqs = [
  {
    question: "1. What is Resolute Inc.?",
    answer: "Resolute Inc. is a print-on-demand newspaper that offers specialized editions catering to different interests and needs. We provide high-quality, customized newspapers, printed fresh daily to meet your specific preferences."
  },
  {
    question: "2. What editions does Resolute Inc. offer?",
    answer: "We offer three editions of our newspaper:",
    subanswer:["- *Scholar Edition:* Tailored for students preparing for competitive exams, this edition provides detailed coverage of topics relevant to students' academic and exam needs."],
    subanswer1:["- *Prima Edition:* Features 18 distinct niches, catering to a wide variety of interests, from business and technology to lifestyle and culture."],
    subanswer2:["- *Express Edition:* A concise version of our newspaper with 10 carefully selected niches, offering quick and informative content for on-the-go readers."  
    ]
  },
  {
    question: "3. Who is the Scholar Edition designed for?",
    answer: "The *Scholar Edition* is specifically created for students who are actively preparing for competitive exams. It covers a broad range of educational content, including current affairs, exam patterns, and tips for success."
  },
  {
    question: "4. What niches are included in the Prima Edition?",
    answer: "The *Prima Edition* includes 18 niches, allowing readers to explore topics like politics, business, technology, entertainment, sports, and much more, giving them access to a diverse range of news tailored to various interests."
  },
  {
    question: "5. What niches are covered in the Express Edition?",
    answer: "The *Express Edition* includes 10 curated niches, providing a condensed yet comprehensive selection of the most important and relevant news for readers who want quick updates on key topics."
  },
  {
    question: "6. How do I subscribe to Resolute Inc.?",
    answer: "Subscribing to Resolute Inc. is easy! Simply visit our website, choose your preferred edition (Scholar, Prima, or Express), and select your subscription plan. We offer flexible options based on your reading preferences."
  },
  {
    question: "7. Can I customize my newspaper subscription?",
    answer: "Yes! We offer print-on-demand services, which means you can tailor your subscription based on your niche preferences, ensuring you get the content you want, delivered daily."
  },
  {
    question: "8.  How do I change my subscription or niches?",
    answer: "You can easily update your subscription or niche preferences by logging into your account on our website. Adjust your settings anytime to better suit your changing interests."
  },
  {
    question: "9.  What makes Resolute Inc. different from other newspapers?",
    answer: "Our print-on-demand model means you receive fresh, customized newspapers every day. Unlike traditional newspapers, we focus on niche markets, ensuring our readers get the most relevant content tailored to their needs."
  },
  {
    question: "10.  How is the content in each edition curated?",
    answer: "Each edition of Resolute Inc. is carefully curated by a team of editors who stay on top of current events and trends. We focus on delivering content that is both timely and useful for each audience, whether it’s students preparing for exams or professionals interested in niche topics."
  },
  {
    question: "11. Can I purchase individual editions?",
    answer: "Yes, individual editions of our newspaper are available for purchase. You can buy a single issue of any of our editions based on your interests."
  },
  {
    question: "12. How are the newspapers printed?",
    answer: "We use state-of-the-art print-on-demand technology, ensuring that each newspaper is printed fresh upon order, minimizing waste and maximizing efficiency."
  },
];

const App = () => {
  return (
    < >
    
    <div className="app-container">
    <h2 className='heading'>Frequently Asked Questions </h2>
      <FAQAccordion faqs={faqs} />
    </div>
    </>
  );
};

export default App;
