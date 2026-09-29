import './services.css'

const services = [
  {
    id: 'intesa',
    company: 'Intesa Sanpaolo',
    title: 'Software Engineer',
    duration: 'Nov 2023 - Present',
    location: 'Turin, Italy',
    description: 'Own backend development and code design on the critical path of the bank\'s secure authentication lifecycle, supporting highly resilient services used by millions of active users. Reengineered a core customer data delivery pipeline from a hybrid legacy setup into a fully decoupled and fault-tolerant Apache Flink streaming architecture. Performed deep-dive performance profiling using Java Flight Recorder (JFR) and VisualVM to eliminate microservice bottlenecks in memory allocation and database connection pools. Implemented Horizontal Pod Autoscaling (HPA) to dynamically scale Kubernetes workloads, improving service scalability and Transactions Per Second (TPS).',
    stack: ['Java', 'Spring Boot', 'Apache Flink', 'Apache Kafka', 'Kubernetes', 'HPA', 'JFR', 'VisualVM', 'Oracle SQL'],
  },
  {
    id: 'huawei',
    company: 'Huawei',
    title: 'Software Engineer',
    duration: 'Mar 2023 - Aug 2023',
    location: 'Dongguan, China',
    description: 'Developed and maintained core backend systems for CodeArts Pipeline, a visual platform for automated software delivery and task scheduling. Engineered a background tracking and analytics engine to collect, process, and visualize real-time build, cloud testing, and deployment pipeline statistics across the software development lifecycle.',
    stack: ['Spring Boot', 'RabbitMQ', 'Redis', 'MyBatis', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'reply',
    company: 'Technology Reply',
    title: 'Technical Consultant (Data Engineer)',
    duration: 'Jan 2021 - Dec 2022',
    location: 'Padua, Italy',
    description: 'Designed and implemented a real-time mainframe data migration pipeline using Change Data Capture (CDC), Apache Flink, and Apache Kafka for a major Italian banking group (Intesa Sanpaolo) supporting PSD2 Open Banking requirements. Reduced historical database footprints and accelerated relational database query performance by approximately 30% compared with the legacy DB2 architecture.',
    stack: ['Apache Flink', 'Apache Kafka', 'IBM CDC', 'Oracle SQL', 'Spring Boot', 'Hibernate', 'Maven', 'GitLab', 'Jenkins'],
  },
  {
    id: 'uni',
    company: 'University of Padua',
    title: 'Research & Academic Projects',
    duration: '2018 - 2020',
    location: 'Padua, Italy',
    description: 'Master\'s thesis: k-Center Clustering under Doubling Dimension (Java & Hadoop MapReduce, coreset approach). Additional projects: TSP Optimization Engine (C & CPLEX), Teaching Platform Web Application.',
    stack: ['Big Data', 'MapReduce', 'Clustering', 'CPLEX', 'Java', 'Web Dev'],
  },
]

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Have Done</h5>
      <h2>Experiences</h2>

      <div className='container services__container'>
        {services.map((service) => (
          <article key={service.id} className='service hologram'>
            <div className='service__head'>
              <div className='service__head-decoration'>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3>{service.company}</h3>
              <small className='service__meta'>{service.title} · {service.duration} · {service.location}</small>
            </div>
            <div className='service__body'>
              <p className='service__description'>{service.description}</p>
              <div className='service__stack'>
                {service.stack.map((tech) => (
                  <span key={tech} className='service__tech-tag' data-tech={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services