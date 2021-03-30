import React from 'react';

import Projects from '../projects.json';

function ProjectsContainer() {
    let allProjects = Projects
    return (
        <div className="project_container container">
            {
                allProjects.map((project, index) => {
                    return (
                    <a href={project.demo} key={index}>
                        <article>
                            <div className="img_container">
                                <img  src={project.screenshot} alt={project.screenshot}/>
                            </div>
                            <div className="info_container">
                                <h2>
                                    <a href="/">{project.name}</a>
                                </h2>
                                <p>{project.description}</p>
                            </div>
                        </article>
                    </a>
                    )
                })
            }
        </div>
    )
}

export default ProjectsContainer
