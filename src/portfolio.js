const header = {
  // all the properties are optional - can be left empty or deleted
  title: 'Hs.DEV',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Helyson Santiago',
  role: 'Full Stack Developer',
  description: 'I live in São Paulo/SP-ZS, I am a computer engineering student, I usually build frontend with ReactJS and build backend specially using NestJS, NodeJS & Express.  ',
  social: {
    github: 'https://github.com/helysonsantiago',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mini-Blog',
    description:
      'The project performs CRUD operations, user registration, validation of authenticated users. create, delete, update posts.',
    stack: ['Firebase', 'React', 'Module-CSS'],
    sourceCode: 'https://github.com/helysonsantiago/Mini-Blog',
    livePreview: 'https://mini-blog-green.vercel.app/',
  },
  {
    name: 'Converter Python/C',
    description:
      'This converter was made with python and C, for the two to talk it is necessary a DLL that mediates between the two technologies.',
    stack: ['Python', 'C'],
    sourceCode: 'https://github.com/helysonsantiago/conversor',
    livePreview: '/#',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['React', 'React', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'helysonsantiago2000@gmail.com',
}

export { header, about, projects, contact }
