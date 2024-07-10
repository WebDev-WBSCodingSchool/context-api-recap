import { useContext } from 'react';
import { LocalisationContext } from '@/context';

const Home = () => {
  const { language, setLanguage, translations } = useContext(LocalisationContext);

  const handleChange = event => setLanguage(event.target.value);

  return (
    <>
      <select value={language} onChange={handleChange}>
        <option value='sp'>Español</option>
        <option value='en'>English</option>
        <option value='de'>Deutsch</option>
      </select>
      <section>
        <h1 className='text-center text-4xl my-5'>{translations[language].title}</h1>
        <img src='/cover.jpg' alt='Barista pouring latte art' className='rounded-2xl' />
      </section>
      <section>
        <h2 className='text-center text-2xl my-5'>{translations[language].about.title}</h2>
        <p>{translations[language].about.content}</p>
      </section>
      <section>
        <h2 className='text-center text-2xl my-5'>Good coffee matters</h2>
        <p>
          The foundation of an exceptional cup of coffee lies in the quality of the beans and the
          equipment used to brew it. Fresh, high-grade beans provide rich flavors and aromas that
          are unparalleled, turning a simple drink into a delightful experience. Equally important
          is the equipment—precision machines and filters ensure consistent brewing, optimal
          extraction, and the perfect balance of taste. Investing in good beans and reliable
          equipment means every sip is a testament to your commitment to quality and a superior
          coffee experience. At Coffee &amp; Co, we bring you only the best, because we know that
          great coffee starts with great ingredients and tools.
        </p>
      </section>
      <section>
        <h2 className='text-center text-2xl my-5'>Our services</h2>
        <ul className='text-center'>
          <li>Premium Coffee Beans</li>
          <li>State-of-the-Art Coffee Machines</li>
          <li>High-Quality Filters</li>
          <li>Expert Coffee Courses</li>
        </ul>
      </section>
    </>
  );
};

export default Home;
