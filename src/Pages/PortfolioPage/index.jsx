import React from 'react';
import { Nav, Footer } from '../../Components';
import Project from './components/Project';
import work from './data';

const PortfolioPage = (props) => {
  return (
    <>
      <Nav {...props} />
      <h2 className='f1 mh4 pt4 mb2'>Work</h2>
      <h2 className='f4 fw3 mh4 mb5'>Web Development</h2>
      <div className='pl4 flex flex-wrap mb5'>
        {work.map((project, idx) => (
          <Project key={idx} {...project} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PortfolioPage;
