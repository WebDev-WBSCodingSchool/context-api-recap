const Home = () => {
  return (
    <>
      <section>
        <h1 className='text-center text-4xl my-5'>Brew Better, Live Better</h1>
        <img src='/cover.jpg' alt='Barista pouring latte art' />
      </section>
      <section>
        <h2 className='text-center text-2xl my-5'>Welcome to Coffee &amp; Co</h2>
        <p>
          At Coffee &amp; Co, we believe that great coffee is more than just a beverage — it&amp;s a
          way of life. We&amp;re passionate about bringing the finest coffee experience to your home
          or office. Our selection of premium coffee beans, top-tier machines, and essential filters
          ensures every cup you brew is perfect. Whether you&amp;re a novice or a seasoned barista,
          our expert courses are designed to elevate your coffee-making skills. Join us at Coffee
          &amp; Co and discover how to brew better and live better, one cup at a time.
        </p>
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
