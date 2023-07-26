import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeader from '../../components/pageHeaderContent';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <PageHeader
        headerText={'Contact Me'}
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
}

export default Contact