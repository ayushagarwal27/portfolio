import React, { useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeader from '../../components/pageHeaderContent';
import hauntedHouse from '../../images/haunted-house.png';
import footballClub from '../../images/football-club.png';
import threeJsProfile from '../../images/threejs-profile.png';
import './styles.scss';

const portfolioData = [
  {
    id: 3,
    name: 'Haunted House',
    image: hauntedHouse,
    link: '',
  },
  {
    id: 2,
    name: 'Manchester City',
    image: footballClub,
    link: '',
  },
  {
    id: 3,
    name: 'ThreeJS Profile',
    image:threeJsProfile,
    link: '',
  },
  {
    id: 2,
    name: 'Todo App',
    image:
      'https://images.unsplash.com/photo-1690320276492-08823be529d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',

    link: '',
  },
  {
    id: 3,
    name: 'Shopping cart design',
    image:
      'https://images.unsplash.com/photo-1690320276492-08823be529d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    link: '',
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
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
              <div className='overlay'>
                {idx === hoveredValue && (
                  <div class='overlay__box'>
                    <p>{item.name}</p>
                    <div>
                      <button>Visit</button>
                      <button>Code</button>
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
