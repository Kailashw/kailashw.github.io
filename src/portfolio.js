const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://kailashw.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kailas Walldoddi',
  role: 'Full Stack Web Develoepr',
  description:
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/kailashw/',
    github: 'https://github.com/kailashw',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
