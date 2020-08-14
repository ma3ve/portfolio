import React from "react";

const ProjectCard = (props) => {
    const { name, description, github, live } = props;
    return (
        <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <h5 className="card-title">{name} </h5>
                    <p className="card-text">{description} </p>
                    {live && (
                        <a
                            href={live}
                            target=" _blank"
                            className="btn btn-outline-secondary mr-3"
                        >
                            live
                        </a>
                    )}
                    <a
                        href={github}
                        target=" _blank"
                        className="btn btn-outline-secondary"
                    >
                        <i className="fab fa-github" /> Repo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
