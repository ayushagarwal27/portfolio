import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import {SiNextdotjs,  SiPostgresql} from 'react-icons/si';
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from 'react-icons/fa';
import { Animate } from 'react-simple-animate';
import PageHeader from '../../components/pageHeaderContent';
import './styles.scss';

const personalDetails = [
  {
    label: 'Name',
    value: 'Ayush Agarwal',
  },
  {
    label: 'Github',
    value: 'ayushagarwal27',
    link: 'https://github.com/ayushagarwal27',
  },
  {
    label: 'Leetcode',
    value: '_ayush027',
    link: 'https://leetcode.com/_ayush027/',
  },
  {
    label: 'Linkedin',
    value: 'ayush027',
    link: 'https://www.linkedin.com/in/ayush-agarwal-145a20166/',
  },
  {
    label: 'Twitter',
    value: 'ayushagarwal027',
    link: 'https://twitter.com/ayushagarwal027',
  },
  {
    label: 'Email',
    value: 'ayushagarwal.dev@gmail.com',
  },
];

const jobSummary =
  'Resourceful and self-reliant Full Stack Developer with a passion for crafting seamless user experiences by integrating design aesthetics with robust programming skills. Proficient in backend and frontend technologies. Dedicated to delivering efficient website solutions through proactive feature optimization and meticulous debugging.';

const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeader
        headerText={'About Me'}
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='about__content'>
        <div className='about__content__personalWrapper'>
          <Animate
            play={true}
            duration={1.5}
            delay={0.5}
            start={{ transform: `translateX(-900px)` }}
            end={{ transform: `translatex(0px)` }}
          >
            <h3>Full stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play={true}
            duration={1.5}
            delay={0.5}
            start={{ transform: `translateX(500px)`, opacity: 0 }}
            end={{ transform: `translatex(0px)`, opacity: 1 }}
          >
            <h3 className='personalInformationHeaderText'>
              Personal Information
            </h3>
            <ul>
              {personalDetails.map(item => (
                <li key={item.label}>
                  <span className='title'>{item.label}</span>
                  {item.link ? (
                   <a target='_blank' href={item.link} className='value' rel="noreferrer" >
                      {item.value}
                    </a>
                  ) : (
                    <span className='value'>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className='about__content__servicesWrapper'>
          <Animate
            play={true}
            duration={1.5}
            delay={1}
            start={{ transform: `translateX(600px)` }}
            end={{ transform: `translatex(0px)` }}
          >
            <div className='about__content__servicesWrapper__innerContent'>
              <div>
                <FaReact color='var(--theme-main-color)' size={66} />
              </div>
              <div>
                <SiNextdotjs color='var(--theme-main-color)' size={54} />
              </div>
              <div>
                <IoLogoNodejs color='var(--theme-main-color)' size={68} />
              </div>
              <div>
                <BiLogoPostgresql color='var(--theme-main-color)' size={66} />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
