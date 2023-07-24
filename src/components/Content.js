import '../styles/content.css';
import About from "./About"
import Experience from './Experience';
import Project from './Project';
export default function Content() {
    return (
        <main className="main-component content">
            <About />
            <Experience />
            <Project />
        </main>
    )
}
