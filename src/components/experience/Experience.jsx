import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaJava, FaReact} from 'react-icons/fa'
import {SiPython, SiSpring, SiPostgresql, SiRedis, SiHibernate, SiCplusplus,
  SiOracle, SiApacheflink, SiApachehadoop, SiApachehive, SiIbm, SiHtml5,
  SiCss3, SiBootstrap, SiReact} from 'react-icons/si'
import {GrMysql, GrOracle} from 'react-icons/gr'
import {DiSpark, DiJavascript} from 'react-icons/di'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Know</h5>
      <h2>My Skills</h2>

      <div className='container experience__container'>

      <div className='exprience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <div>
                <h4><FaJava/> Java</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiPython/> Python</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiCplusplus/> C/C++</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiHibernate/> Hibernate</h4>
              </div>
            </article>
            
            <article className='experience__details'>
              <div>
                <h4><SiRedis/> Redis</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiSpring/> Spring/ SpringBoot/ SpringCloud</h4>
              </div>
            </article>

          </div>
        </div>

        
        <div className='exprience__data'>
          <h3>Data Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <div>
                <h4><GrMysql/> MySQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiOracle/> Oracle SQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiPostgresql/> PostgresSQL</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiApacheflink/> Flink</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiApachehadoop/> MapReduce</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><DiSpark/> Spark</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiApachehive/> Hive</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><GrOracle/> Oracle Golden Gate</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiIbm/> IBM Infosphere CDC</h4>
              </div>
            </article>
          </div>
        </div>


        <div className='exprience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <div>
                <h4><SiHtml5/> HTML</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiCss3/> CSS</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><DiJavascript/> JavaScript</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiBootstrap/> Bootstrap</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiReact/> React</h4>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND*/}

        
      </div>
    </section>
  )
}

export default Experience
