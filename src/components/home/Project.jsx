import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./project.json";

const Project = () => {
    return (
        <div id="projects" className="jumbotron jumbotron-fluid  m-0">
            {projects.length && (
                <div className="container container-fluid p-5">
                    <h1 className="display-4 pb-5">Projects</h1>
                    <div className="row">
                        {projects.map((project) => (
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                live={project.live}
                                github={project.github}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
