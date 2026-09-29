import React from 'react'
import './experience.css'

import { FaJava } from 'react-icons/fa'
import {
  SiPython,
  SiSpring,
  SiPostgresql,
  SiRedis,
  SiHibernate,
  SiCplusplus,
  SiOracle,
  SiApacheflink,
  SiApachehadoop,
  SiApachehive,
  SiIbm,
  SiHtml5,
  SiCss3,
  SiGo,
  SiKubernetes,
  SiApachekafka,
  SiPytorch
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

const categories = [
  {
    title: 'Backend Development',
    skills: [
      [FaJava, 'Java'],
      [SiPython, 'Python'],
      [SiGo, 'Go'],
      [SiSpring, 'Spring / Spring Boot'],
      [SiCplusplus, 'C/C++'],
      [SiHibernate, 'Hibernate / JPA'],
      [SiRedis, 'Redis']
    ]
  },
  {
    title: 'Data Engineering & Databases',
    skills: [
      [SiApacheflink, 'Apache Flink'],
      [SiApachekafka, 'Apache Kafka'],
      [SiIbm, 'IBM CDC'],
      [SiApachehadoop, 'Hadoop / MapReduce'],
      [SiApachehive, 'Hive'],
      [SiOracle, 'Oracle SQL'],
      [SiPostgresql, 'PostgreSQL'],
      [GrMysql, 'MySQL']
    ]
  },
  {
    title: 'Cloud & AI',
    skills: [
      [SiKubernetes, 'Kubernetes'],
      [SiPytorch, 'PyTorch'],
      [SiPython, 'LLM Engineering / RAG']
    ]
  },
  {
    title: 'Web',
    skills: [
      [SiHtml5, 'HTML'],
      [SiCss3, 'CSS']
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Know</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        {categories.map(({ title, skills }) => (
          <div className="experience__category" key={title}>
            <h3>{title}</h3>

            <div className="experience__content">
              {skills.map(([Icon, name]) => (
                <article className="experience__skill" key={name}>
                  <div className="experience__icon">
                    <Icon />
                  </div>

                  <h4>{name}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience