import React from 'react'
import './Projects.css';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const projectDetail=[
    {
      id:1,
      name:'QuoteGenerator',
      details:'Created Quote generator website.Created array of obects containing quotes and using mapping and javascript displayed them.',
      tech:'HTML,CSS,Javascript',
      link:'https://github.com/akshaywagh3/QuoteGenerator',
      demo:'https://axquotegenerator.netlify.app',
      level:'beginner',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsV88vCzwEd9mD0tmc65vTZfNMPmalPQ6jw&usqp=CAU'
    },
    {
      id:2,
      name:'Weather-App',
      details:'Created weather forecast website .Used react and practiced working of some hooks.Also Learned using APIs',
      tech:'ReactJs,OpenWeatherAPI',
      link:'https://github.com/akshaywagh3/weather-app',
      demo:'https://weatherapp-akshay.netlify.app',
      level:'medium',
      image:'https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg'
    },
    {
      id:3,
      name:'UserAdder',
      details:'Created website for user addition.Used react and practiced working of some hooks.',
      tech:'html,css,ReactJs',
      link:'https://github.com/akshaywagh3/userAdder',
      level:'beginner',
      demo:'https://useradder.netlify.app',
      image:'https://img.freepik.com/free-vector/add-user-concept-illustration_114360-458.jpg?w=740&t=st=1694157991~exp=1694158591~hmac=eda4d3f01e0184312e750a9d3600e04e54902d89bf622aecd93f359cd0c0a4ae'
    },
    {
      id:4,
      name:'Stopwatch',
      details:'Created Stopwatch using html,css and javascript added buttons for stop start and reset features. ',
      link:'https://github.com/akshaywagh3/stopwatch',
      tech:'HTML,CSS,Javascript',
      level:'medium',
      image:'https://images.unsplash.com/photo-1543164904-a81403d527a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id:5,
      name:'Investment Calculator',
      details:'Created investment Calculator with React Js created mathematical formulas to finding the correct calculations.',
      tech:'html,css,Reactjs',
      link:'https://github.com/akshaywagh3/investmentCalculator',
      demo:'https://akshaywagh3.github.io/investmentCalculator/',
      level:'medium',
      image:'https://img.freepik.com/free-photo/accountant-calculating-profit-with-financial-analysis-graphs_74855-4937.jpg?w=1060&t=st=1694158027~exp=1694158627~hmac=5dbe9d127f329dddd99461414dfe22350807d6babfba02ca6e8273b88293f5d0'
    },
    {
      id:6,
      name:'Simple Calculator',
      details:'Created investment Calculator with React Js created mathematical formulas to finding the correct calculations.',
      tech:'html,css,javascript',
      link:'https://github.com/akshaywagh3/LGM-VIP-Web-Task-2',
      demo:'https://akshaywagh3.github.io/LGM-VIP-Web-Task-2',
      level:'medium',
      image:'https://images.unsplash.com/photo-1636033503567-a59bff19d79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id:7,
      name:'To-Do list',
      details:'Created simple to-do list with Add,Delete,Update features using html,css,javascript .',
      tech:'html,css,javascript',
      link:'https://github.com/akshaywagh3/LGM-VIP-Web-Task1',
      demo:'https://akshaywagh3.github.io/LGM-VIP-Web-Task1',
      level:'medium',
      image:'https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938726.jpg?w=1060&t=st=1694158080~exp=1694158680~hmac=aff5f82eca77f6d7fb3d8822cd313cafc63e83464fee5c71aef33015a9ddb93f'
    },
  ]
  
  return (
    <>
      <div className='class'>
          <h1>My Projects</h1>
          <ul className='projects'> 
            {projectDetail.map((project)=>(
              <li key={project.id}>
                <img src={project.image} alt=''></img>
                <h2>{project.name}</h2>
                <h4>{project.details}</h4>
                <h4>Tech Used: {project.tech}</h4>
                <div className='btn'>
                  <NavLink to={project.link}><button>Github Link</button></NavLink>
                  <NavLink to={project.demo}><button>Demo</button></NavLink>
                </div>
                
              </li>
            ))}
          </ul>
      </div>
    </>
    
  )
}

export default Projects