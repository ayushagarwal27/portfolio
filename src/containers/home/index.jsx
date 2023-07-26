import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { useNavigate } from 'react-router-dom';
import { loadFull } from 'tsparticles';
import { Animate } from 'react-simple-animate';
import { particles } from '../../utils/particles';
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();

  const particlesInit = useCallback(async main => {
    await loadFull(main);
  }, []);

  const handleNavigateToPortfolioPage = () => {
    navigate('/portfolio');
  };

  return (
    <>
      <Particles id='tsparticles' init={particlesInit} options={particles} />
      <section className='home' id='home'>
        <div className='home__text_wrapper'>
          <h1>
            Hello, I'm Ayush
            <br />
            Front end developer
          </h1>
          {/* <p>I develop, responsive web apps</p> */}
        </div>
        <Animate
          play={true}
          duration={1.5}
          delay={1}
          start={{ transform: `translateY(550px)`}}
          end={{ transform: `translatex(0px)`}}
        >
          <div className='home__contact-me'>
            <button onClick={handleNavigateToPortfolioPage}>
              View Portfolio
            </button>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default Home;
