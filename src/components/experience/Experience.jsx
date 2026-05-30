import React from 'react'
import './experience.css'
import { FaJava } from 'react-icons/fa'
import { BsCpu } from 'react-icons/bs' // Imported the valid CPU icon from Bootstrap icons
import { 
  SiPython, SiSpring, SiPostgresql, SiRedis, SiHibernate, SiCplusplus,
  SiOracle, SiApacheflink, SiApachehadoop, SiApachehive, SiIbm, SiHtml5,
  SiCss3, SiBootstrap, SiReact, SiQuarkus, SiPytorch, SiGo 
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { DiSpark, DiJavascript } from 'react-icons/di'
import { GiArtificialIntelligence } from 'react-icons/gi'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What I Know</h5>
      <h2>My Skills</h2>

      <div className='container experience__container'>

        {/* BACKEND DEVELOPMENT */}
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
                <h4><SiGo/> Go (Golang)</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiPython/> Python</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiSpring/> Spring / Boot / Cloud</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiQuarkus/> Quarkus</h4>
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
          </div>
        </div>

        {/* AI & MACHINE LEARNING */}
        <div className='experience__ai'>
          <h3>AI & Machine Learning</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <div>
                <h4><SiPytorch/> PyTorch</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><GiArtificialIntelligence/> LLM Engineering</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><BsCpu/> RAG Architecture</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><GiArtificialIntelligence/> QLoRA Fine-Tuning</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><BsCpu/> AI Agents & NLP</h4>
              </div>
            </article>
          </div>
        </div>

        {/* DATA DEVELOPMENT */}
        <div className='exprience__data'>
          <h3>Data Development</h3>
          <div className='experience__content'>
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
                <h4><SiPostgresql/> PostgresSQL</h4>
              </div>
            </article>

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
                <h4><SiApachehive/> Hive</h4>
              </div>
            </article>

            <article className='experience__details'>
              <div>
                <h4><SiIbm/> IBM Infosphere CDC</h4>
              </div>
            </article>
          </div>
        </div>

        {/* FRONTEND DEVELOPMENT */}
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

      </div>
    </section>
  )
}

export default Experience