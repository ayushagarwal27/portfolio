import React, { useCallback } from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { particles } from '../../utils/particles';

const Home = () => {

  const particlesInit = useCallback(async main => {
    await loadFull(main);
  }, []);

  return (
    <div>
        {(
          <Particles
            id='tsparticles'
            init={particlesInit}
            options={particles}
          />
        )}
    </div>
  )
}

export default Home