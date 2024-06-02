import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeader from '../../components/pageHeaderContent';
import hauntedHouse from '../../images/haunted-house.png';
import footballClub from '../../images/football-club.png';
import threeJsProfile from '../../images/threejs-profile.png';
import jiraCLone from '../../images/jira-clone.png'
import threeJsGame from '../../images/game.png';
import appleReDesign from '../../images/apple-redesign.png';
import whiteboard from '../../images/whiteboard.png';
import geniusHive from '../../images/geniushive.png';
import './styles.scss';
import ProgressiveImage from '../../components/ProgressiveImage';

const portfolioData = [
  {
   id: 2,
   name: 'Genius Hive AI',
   image: geniusHive,
   link: 'https://www.geniushive.me/',
   code: 'https://github.com/ayushagarwal27/GeniusHiveAI-frontend',
 },
  {
    id: 2,
    name: 'Jira Clone',
    image: jiraCLone,
    link: 'https://jira-clone-next-js.vercel.app/',
    code: 'https://github.com/ayushagarwal27/jira_clone_nextJS',
  },
  {
    id: 1,
    name: 'Canvas Whiteboard',
    image: whiteboard,
    link: 'https://whitebaord.netlify.app/',
    code: 'https://github.com/ayushagarwal27/Whiteboard',
  },
  {
    id: 2,
    name: 'Manchester City',
    image: footballClub,
    link: 'https://football-club-546ab.web.app/',
    code: 'https://github.com/ayushagarwal27/Manchester-City-React',
  },
  {
    id: 1,
    name: 'Apple Re-design',
    image: appleReDesign,
    link: 'https://ayushagarwal27.github.io/Apple-Website/',
    code: 'https://github.com/ayushagarwal27/Apple-Website',
  },
  {
    id: 3,
    name: 'Haunted House',
    image: hauntedHouse,
    link: 'https://haunted-house-three-js-gold.vercel.app/',
    code: 'https://github.com/ayushagarwal27/Haunted-House-ThreeJS',
  },
  {
    id: 3,
    name: 'ThreeJS Profile',
    image: threeJsProfile,
    link: 'https://3-d-portfolio-r3-f-three-js.vercel.app/',
    code: 'https://github.com/ayushagarwal27/3D-Portfolio---R3F-ThreeJS',
  },
  {
    id: 3,
    name: 'ThreeJS Game - R3F',
    image: threeJsGame,
    link: 'https://threejs-game-amber.vercel.app/',
    code: 'https://github.com/ayushagarwal27/3D-Game-R3F',
  },
];

const filterData = [
  {
    filterId: 1,
    label: 'All',
  },
  {
    filterId: 2,
    label: 'Full Stack',
  },
  {
    filterId: 3,
    label: 'Three JS',
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = id => {
    setFilteredValue(id);
  };

  const filteredPortfolioItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter(item => item.id === filteredValue);

  function handleHover(index) {
    setHoveredValue(index);
  }

  return (
    <section id='portfolio' className='portfolio'>
      <PageHeader
        headerText={'Portfolio'}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {filterData.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleFilter(item.filterId)}
              className={item.filterId === filteredValue ? 'active' : ''}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className='portfolio__content__cards'>
          {filteredPortfolioItems.map((item, idx) => (
            <div
              key={idx}
              className='portfolio__content__cards__item'
              onMouseEnter={() => handleHover(idx)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className='portfolio__content__cards__item__image-wrapper'>
                <div
                  href={item.link}
                  className='portfolio__content__cards__item__image-wrapper__link'
                >
                  <ProgressiveImage src={item.image} alt={item.name} />
                </div>
              </div>
              <div className='overlay'>
                {idx === hoveredValue && (
                  <div class='overlay__box'>
                    <p>{item.name}</p>
                    <div>
                      <a href={item.link} target='_blank' rel='noreferrer'>
                        Visit
                      </a>
                      <a href={item.code} target='_blank' rel='noreferrer'>
                        Code
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
