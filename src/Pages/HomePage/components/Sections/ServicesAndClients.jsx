import React from 'react'
import { services, clients } from '../../data'

const ServicesAndClients = () => {
  return (
    <section className='pt6-ns pt4 section-layout h-100'>
      <inner className='pb6-ns pb4 mh4 h-100'>
        <div className='fl w-100 w-25-l mb4'>
          <h2 className='f1 mt0'>{services.title}</h2>
          <div>
            {services.services.map((service, idx) => (
              <p key={idx} className='f4 f3-ns'>
                {service}
              </p>
            ))}
          </div>
        </div>
        <div className='fl w-100 w-75-l pl7-l'>
          <h2 className='f1 mt0'>{clients.title}</h2>
          <div className='clients-list h-100 w-100'>
            {clients.clients.map((client, idx) => (
              <p key={idx} className='f4 f3-ns'>
                {client}
              </p>
            ))}
          </div>
        </div>
      </inner>
    </section>
  )
}

export default ServicesAndClients
