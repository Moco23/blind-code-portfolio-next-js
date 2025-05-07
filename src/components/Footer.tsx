import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const githubUrl = "https://github.com/Moco23";
    const linkedinUrl = "https://www.linkedin.com/in/mom%C4%8Dilo-nikoli%C4%87-7828b4244/";
    const upworkUrl = "https://www.upwork.com/freelancers/~01108014dd3dc456ff";

    return (
        <footer className="w-full border-t border-sky-400 bg-muted py-6">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
                <p className="text-sm">&copy; {currentYear} Blind-Code. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-6">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-muted-foreground transition-colors hover:text-primary">
                        <FaGithub size={24} />
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-muted-foreground transition-colors hover:text-primary">
                        <FaLinkedin size={24} />
                    </a>
                    <a href={upworkUrl} target="_blank" rel="noopener noreferrer" aria-label="Upwork Profile" className="text-muted-foreground transition-colors hover:text-primary">
                        <SiUpwork size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
