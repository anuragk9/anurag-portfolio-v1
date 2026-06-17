export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Anurag Kushwaha',
    role: 'Senior Java Backend Engineer',
    location: 'Gurgaon, Haryana',
    phone: '8318533578',
    email: 'kushwaha20.anurag@gmail.com',
    linkedin: 'linkedin.com/in/anurag-kushwaha09',
    summary: 'Senior Java Backend Engineer with 7+ years of experience designing, modernizing, and deploying enterprise-grade microservices using Java 8/17 and Spring Boot 2/3. Advocate of TDD and AI-assisted development.'
  },
  skills: [
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-original colored' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Hibernate', icon: 'devicon-hibernate-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' }
  ],
  experience: [
    {
      company: 'Ernst & Young (EY)',
      role: 'Senior Consultant',
      duration: 'Dec 2021 – Present',
      projects: [
        {
          name: 'CFP-IL (Core Finance Product – Integration Layer)',
          timeline: 'Jul 2025 – Present',
          description: 'Enterprise finance integration platform handling system-to-system communication.',
          highlights: [
            'Developed microservices using Java 17 and Spring Boot 3.',
            'Migrated legacy applications from Unix-based on-prem Tomcat servers to containerized Kubernetes environment.',
            'Integrated Azure Active Directory (AAD) for secure authentication and authorization.',
            'Migrated file storage from Unix server to AWS S3, improving scalability and durability.'
          ]
        },
        {
          name: 'End Investor Platform (UK Fintech System)',
          timeline: 'Dec 2021 – Jun 2025',
          description: 'Microservices-based REST APIs using Spring Boot 2.',
          highlights: [
            'Implemented Redis caching to reduce database load and improve API response time.',
            'Integrated ELK stack for centralized logging and faster incident resolution.',
            'Automated deployments using CI/CD pipelines (Jenkins, AWS CodePipeline).'
          ]
        }
      ]
    },
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'System Engineer',
      duration: 'Jul 2018 – Dec 2021',
      projects: [
        {
          name: 'Enterprise Telecom Applications',
          timeline: 'Jul 2018 – Dec 2021',
          description: 'Backend services and REST APIs.',
          highlights: [
            'Developed enterprise telecom applications using Spring Boot, Spring MVC, Oracle/PostgreSQL, MongoDB.',
            'Worked on backend services, REST APIs, performance optimization, and production deployments on WebSphere and Tomcat.'
          ]
        }
      ]
    }
  ],
  education: [
    { degree: 'MCA', institution: 'SASTRA University', year: '2021', details: 'CGPA: 8.085' },
    { degree: 'BCA', institution: 'CSJM University', year: '2018', details: '' }
  ]
};