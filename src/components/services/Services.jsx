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
              <p>
                I was the Software developer and mainly responsible of collecting CodeArts pipeline statistics.
                The CodeArts Pipeline is essentially a visual automated task scheduling platform, 
                which needs to be used in conjunction with the automated tasks of compilation and build, code check, cloud testing,
                deployment and other services in the software development cycle.<br/>
                My main contribution was to collect the execution statistics of pipeline in real-time
                and provide them to front-end team, therefore the users know quickly the state of their software.
                <div>
                  <p>SpringBoot</p>
                  <p>RabbitMQ</p>
                  <p>Redis</p>
                  <p>Mybatis</p>
                  <p>PostgreSQL</p>
                  <p>MySQL</p>
                </div>
              </p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Reply SRL</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>
                I have been responsible for design and implementation of offloading pipeline made of change data capture tool from mainframe, event streaming platform and relational
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
            <h3>University of Padua</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>
              During my university journey I have been focusing on Big Data technology and algorithm efficiency. Furthermore I have been part of different projects
              and have collaborated with a lot brilliant mates.<br/>
              I have implemented the Traveler Salesman Problem Solver using IBM ILOG CPLEX Optimization Studio at the Operational Research course.<br/>
              Enjoyed the team work with the realization of Teaching Platform Web Application. <br/>
              Concluded the Master with a thesis analyzing and improving k-Center Clustering with MapReduce Algorithm.
              </p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
