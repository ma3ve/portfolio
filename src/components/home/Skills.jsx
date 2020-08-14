import React from "react";
import { icons } from "./icons/icons.json";

const AboutMe = () => {
    return (
        <div
            id="skills"
            className="jumbotron jumbotron-fluid  bg-transparent m-0"
        >
            <div className="container container-fluid p-5">
                <div className="row">
                    <div className={`col-lg-12`}>
                        <h1 className="display-4 pb-5">Skills</h1>
                        <div className="row justify-content-center">
                            {icons.map((icon) => {
                                return (
                                    <div className="col-md-2 mt-4 col-sm-3 col-4">
                                        <img
                                            src={require(`./icons/${icon}.svg`)}
                                            alt="c"
                                            width="100%"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
