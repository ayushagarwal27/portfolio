import React from 'react'
import PageHeader from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';

const Resume = () => {
  return (
    <section id='Resume' className='Resume'>
      <PageHeader
        headerText={'Resume'}
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
}

export default Resume