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
    description: [
      'At Leena, We are Building a better employee experience which assists employees the way Siri/Alexa do.We gather regular feedback from your employees across the lifecycle and get intelligent actionable insights. Make quick AI-driven decisions that impact engagement, action planning, performance, and innovation.',
      'Writing Scalable Code.',
    ],
    stack: ['NodeJS', 'RabbitMQ', 'Redis', 'MongoDB', 'AWS'],
  },
  {
    name: 'Ellucian',
    description: [
      'Streamlining integration between Student Information System (SIS) ERP and learning management system (LMS)',
      'Understanding, Structuring and Rebuilding application from Anguar 1.x version using ReactJS',
      'Conducting peer code reviews to monitor the quality of code',
    ],
    stack: ['NodeJS', 'PostgreSQL', 'React', 'AWS', 'Unit Testing'],
  },
  {
    name: 'Kerv Digital (Formerly CloudThing)',
    description: [
      'Writing reusable codes.',
      'Integrating reporting portal such as Power BI /Tableau.',
      'Making enhancements to RBAC (Role-based access control) using Python.',
      'ETL operation on MongoDB data to Salesforce, Building reusable boiler plates for front end using React.js',
      'Setting up CI/CD jobs on Azure Devops, Writing generic utility libraries for different projects, Deploying codes on Azure VM/App Services.',
    ],
    stack: ['Python', 'NodeJS', 'React', 'Azure', 'SQL Server', 'MongoDB'],
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
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'kailashwall@mail.com',
}

export { header, about, projects, skills, contact }
