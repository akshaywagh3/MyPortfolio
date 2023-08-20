import React from 'react'
import './Projects.css';

const Projects = () => {
  const projectDetail=[
    {
      id:1,
      name:'QuoteGenerator',
      details:'created Quote generator website.',
      tech:'HTML,CSS,Javascript',
      link:'https://github.com/akshaywagh3/QuoteGenerator',
      level:'beginner'
    },
    {
      id:2,
      name:'userAdder',
      details:'created website for user addition',
      tech:'ReactJs',
      link:'https://github.com/akshaywagh3/userAdder',
      level:'beginner'
    },
    {
      id:3,
      name:'Stopwatch',
      details:'created Stopwatch features',
      link:'https://github.com/akshaywagh3/stopwatch',
      tech:'HTML,CSS,Javascript',
      level:'medium'
    },
    {
      id:4,
      name:'Investment Calculator',
      details:'created investment Calculator with React Js',
      tech:'Reactjs',
      link:'https://github.com/akshaywagh3/investmentCalculator',
      level:'medium'
    },
  ]
  return (
    <>
      <div className='class'>
          <ul className='projects'> 
            {projectDetail.map((project)=>(
              <li key={project.id}>
                Project Name: {project.name}<br/>
                Project Details: {project.details}<br/>
                Tech Used: {project.tech}<br/>
                Difficulty: {project.level}<br/>
                <a href={project.link}>Github Link</a>
              </li>
            ))}
          </ul>
      </div>
    </>
    
  )
}

export default Projects