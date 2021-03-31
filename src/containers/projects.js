import React from 'react';

import Projects from '../projects.json';

function ProjectsContainer() {
    let allProjects = Projects
    return (
        <div className="project_container container">
            {
                allProjects.map((project, index) => {
                    return (
                   
                        <article  key={index}>
                            <a href={project.demo} className="img_container">
                                <img  src={project.screenshot} alt={project.screenshot}/>
                            </a>
                            <div className="info_container">
                                <h2>
                                    <a href={project.demo}>{project.name}</a>
                                </h2>
                                <p>{project.description}</p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default ProjectsContainer
