const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://kailashw.github.io',
  title: '-KW',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kailas Walldoddi',
  role: 'Full Stack Web Develoepr',
  description:
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.',
  resume:
    'https://github.com/Kailashw/kailashw.github.io/raw/main/src/KailasWalldoddi.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/kailashw/',
    github: 'https://github.com/kailashw',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Leena.ai',
    subTitle: '(Feb 2022 - )',
    description: [
      'Building Next gen AI powered HRBP software.',
      'Integration of third party apps in to the application.',
      'Writing Reusable, Scalable Code.',
      'OnBoarding new customers, collect feedback from existing customer to improve the  efficiency.',
    ],
    stack: [
      'NodeJS',
      'React',
      'RabbitMQ',
      'Redis',
      'MongoDB',
      'AWS',
      'Micro Services',
    ],
  },
  {
    name: 'Ellucian',
    subTitle: '(Mar 2020 - Dec 2021)',
    description: [
      'Building Integration system between Student Information System (SIS) ERP and learning management system (LMS)',
      'Understanding, Structuring and Rebuilding application from Anguar 1.x version using ReactJS',
      'Setting up CI/CD jobs using Jenkins & Deploying codes to AWS EC2, Lamda services.',
      'Conducting peer code reviews to monitor the quality of code',
      'Certifying ILP product as tool IMS certified.',
    ],
    stack: [
      'NodeJS',
      'PostgreSQL',
      'React',
      'AWS',
      'Unit Testing',
      'Angular',
      'Micro Services',
    ],
  },
  {
    name: 'Kerv Digital (Formerly CloudThing)',
    subTitle: '(Oct 2016 - Mar 2020)',
    description: [
      'Making enhancements to RBAC (Role-based access control) using Python.',
      'ETL operation on MongoDB data to Salesforce',
      'Building reusable boiler plates for front end using React.js',
      'Writing generic utility libraries for different projects',
      'Setting up CI/CD jobs on Azure Devops & Deploying codes to Azure VM/App Services.',
      'Integrating reporting portal such as Power BI /Tableau.',
    ],
    stack: [
      'Python',
      'NodeJS',
      'React',
      'Azure',
      'SQL Server',
      'MongoDB',
      'Micro Services',
      'Monolith',
    ],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'NodeJs',
  'JavaScript',
  'TypeScript',
  'Python',
  'AWS',
  'Azure',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'CI/CD',
  'Unit Testing',
  'Micro Services',
  'Monolith',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kailashwall@mail.com',
}

export { header, about, projects, skills, contact }
