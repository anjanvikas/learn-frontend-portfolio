import { ABOUT_TEXT } from "../constants/data";

const About = () => {
    return (
        <section id="about" className="about">
            <h1 className="about-title">About Me</h1>
            <div className="about-text">{ABOUT_TEXT}</div>
        </section>
    );
};

export default About;