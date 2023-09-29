import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Have Done</h5>
      <h2>Experiences</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Huawei</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Banco BPM</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>
                <h4>The BBPM bank is the third largest retail and corporate banking conglomerate in Italy.</h4>
                Working for Reply SRL I have been responsible for design and implementation of offloading pipeline made of change data capture tool from mainframe, event streaming platform and relational
                database for a main Italian banking group to address PSD2 regulation and open banking challenge. <br/>
                As result the data on Oracle Database is much compact and faster to retrieve compared to DB2 Database. It has been observed an improvement of 30% in select query speed.
                Furthermore it provides additional information such as the history of account balance.
                <div>
                  <p>Apache Flink</p>
                  <p>Apache Kafka</p>
                  <p>CDC</p>
                  <p>Oracle SQL</p>
                  <p>Ververica</p>
                  <p>Maven</p>
                  <p>GitLab</p>
                  <p>Jenkins</p>
                </div>
              </p>
              
            </li>
            
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
