import React, { useState } from "react";

const Footer = () => {
    const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

    return (
        <footer style={bgStyle} className="mt-auto py-3 text-center">
            <div class="container">
                <h2 class="display-4 pb-3 text-center">Get In Touch</h2>
                <p class="lead text-center pb-3">
                    I'm currently looking for part-time Software Engineering
                    opportunities! If you know of any positions available, if
                    you have any questions, or if you just want to say hi,
                    please feel free to email me at
                    <a href="mailto:mujammilkhan321@gmail.com">
                        {" mujammilkhan321@gmail.com"}
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
};

export default Footer;
