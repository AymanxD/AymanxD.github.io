import React, {Component} from 'react';
import './App.css';

const projectInfo = require("./PortfolioProjects.json");

const reactProjects = projectInfo.filter((project) => {
  return project.technologies.indexOf('react') !== -1;
});

const otherProjects = projectInfo.filter((project) => {
  return project.technologies.indexOf('react') === -1;
});

export default class Portfolio extends Component{
  render(){
    return(
      <div>
        <p>React Projects:</p>
        <div className='reactProjects'>
          {reactProjects.map((project, id) => {
            return (
              <div className="image-container" key={id}>
                <img className="responsive" src={project.image} alt={project.image}/>
                <div className="overlay">
                  <div className="overlay-panel">
                    <p>{project.title}</p>
                    <p className="overlay-description">{project.description}</p>
                    <div className="project-panel-buttons">
                      <a className="website button" href={project.links.website} target="_blank">Website</a>
                      <a className="github button" href={project.links.github} target="_blank">Github</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <hr/>
        <p>Other Projects:</p>
          <div className='otherProjects'>
            {otherProjects.map((project, id) => {
              return (
                <div className="image-container" key={id}>
                  <img className="responsive" src={project.image} alt={project.image}/>
                  <div className="overlay">
                    <div className="overlay-panel">
                      <p>{project.title}</p>
                      <p className="overlay-description">{project.description}</p>
                      <div className="project-panel-buttons">
                        <a className="website button" href={project.links.website} target="_blank">Website</a>
                        <a className="github button" href={project.links.github} target="_blank">Github</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    )
  }
}
