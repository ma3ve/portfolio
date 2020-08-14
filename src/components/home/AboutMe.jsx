import React from "react";
const AboutMe = () => {
    return (
        <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
            <div className="container container-fluid p-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="display-4 mb-5 text-center">About Me</h1>
                        <p className="lead text-center">
                            I am a computer enginnering student studying at Army
                            Institute of Technology, Pune. I am passionate about
                            Blockchain and Web technologies and I like to learn
                            and create new things which make life easier.
                        </p>

                        <p className="lead text-center">
                            <a
                                className="btn btn-outline-dark btn-lg"
                                href="https://drive.google.com/file/d/1YKgq_URHdrCUXGVa9P5CX6kkW66Iw4kq/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer noopener"
                                role="button"
                                aria-label="Resume/CV"
                            >
                                Resume
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
