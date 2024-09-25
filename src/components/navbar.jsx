import logo from "../assets/projects/SNJlogo.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" className="mx-2" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2" height={50} width={50} />
        </a>
      </div>
      <div className="flex justify-center items-center m-8 text-2xl gap-4">
        <a 
          href="https://x.com/Suman_N_Jain" 
          className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://github.com/SumanJain2005" 
          className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/suman_n_jain/?igsh=eDQ5MG56bTcxd2Zr" 
          className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://www.linkedin.com/in/suman-naresh-jain-126a80283/" 
          className="mx-2 transition duration-300 text-gray-600 hover:text-white hover:scale-110 hover:shadow-glow" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
