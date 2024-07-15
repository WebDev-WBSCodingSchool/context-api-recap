import { useContext } from 'react';
import { LocalisationContext } from '@/context';

const Home = () => {
  const { language, translations } = useContext(LocalisationContext);

  return (
    <>
      <section>
        <h1 className='text-center text-4xl my-5'>{translations[language].title}</h1>
        <img src='/cover.jpg' alt='Barista pouring latte art' className='rounded-2xl' />
      </section>
      <section>
        <h2 className='text-center text-2xl my-5'>{translations[language].about.title}</h2>
        <p>{translations[language].about.content}</p>
      </section>
      <section>
        <h2 className='text-center text-2xl my-5'>{translations[language].specialty.title}</h2>
        <p>{translations[language].specialty.content}</p>
      </section>
      <section>
        <h2 className='text-center text-2xl my-5'>{translations[language].services.title}</h2>
        <ul className='text-center'>
          {translations[language].services.list.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
