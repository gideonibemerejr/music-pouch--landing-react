import React from 'react';

const Project = (props) => {
  return (
    <div className='w-100 w-50-ns '>
      <a
        href={props.link}
        className='link red-hover'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='mr4 mb6-ns mb4'>
          <div className='mb3'>
            <div className='relative w-100'>
              <img alt='Its lit' src={props.img} />
            </div>
          </div>
          <figcaption className='mb2'>
            <span className='f4 f3-ns fw5'>{props.client}</span>
            <br />
            <span className='f5 f3-ns gray lh-copy fw3 '>
              {props.project_name}
            </span>
          </figcaption>
        </div>
      </a>
    </div>
  );
};

export default Project;
