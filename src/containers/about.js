import React from 'react';
import Profile from '../images/profile.jpg';

function AboutContainer() {
    return (
        <aside className="container">
            <header>
                <div className="header_container">
                    <div>
                        <img className="profile" src={Profile} alt="Profile image"/>
                    </div>
                    <div className="name">
                        <p>Sandy Rav</p>
                    </div>
                    <div className="description_container">
                        <p>I am a web developer focusing on front-end development. Always hungry to keep learning.</p>
                    </div>
                </div>
            </header>
            <footer>
                <div>
                    <p>--Contact me---</p>
                    <ul>
                        <li>
                            <a href="https://github.com/Voninkazo" className="gihub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:sandy.rav@onja.org"  className="email">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </aside>
    )
}

export default AboutContainer
