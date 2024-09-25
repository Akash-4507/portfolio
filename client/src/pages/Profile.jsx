import Navbar from "../components/Navbar";
import akpic from "../assets/img/akpro.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact,faNodeJs,faHtml5,faCss3Alt, faJava,} from "@fortawesome/free-brands-svg-icons";
import { faGit, faAws, faCuttlefish } from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from "@fortawesome/free-solid-svg-icons"; 

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-auto flex flex-col justify-center items-center bg-[#f8f8f8] pt-8">
        <div className="w-full flex justify-center items-center mb-6">
          <div className="w-[20rem] h-[18rem] flex justify-center items-center">
            <img
              src={akpic}
              alt="Akash"
              className="w-[18rem] h-[18rem] object-cover rounded-full border-4 border-[#080b40]"
            />
          </div>
        </div>
        <div className="w-full text-center mb-4">
          <h1 className="text-5xl font-bold text-gray-900">
            HI, I AM AKASH!
          </h1>
        </div>
        <div className="w-[60%] text-center text-xl font-medium leading-relaxed text-gray-700 mb-6">
          <p>
            I'm currently pursuing my third year as an IT student, and I'm
            proficient in the MERN stack and Spring framework. With a strong
            focus on data structures and algorithms, I demonstrate a commitment
            to mastering key technologies and enhancing problem-solving skills.
            Eager to apply my knowledge and drive innovation in a dynamic
            software development environment.
          </p>
        </div>
        <div className="flex justify-center space-x-10 text-4xl text-gray-900 gap-2">
          <FontAwesomeIcon icon={faLeaf} size="2x" title="MongoDB" className="text-green-500" />
          <FontAwesomeIcon icon={faReact} size="2x" title="React" className="text-indigo-800" />
          <FontAwesomeIcon icon={faNodeJs} size="2x" title="Node.js" className="text-green-500" />
          <FontAwesomeIcon icon={faJava} size="2x" title="Spring" className="text-gray-700" />
          <FontAwesomeIcon icon={faGit} size="2x" className="text-gray-600" />
          <FontAwesomeIcon icon={faAws} size="2x" className="text-gray-600" />
          <FontAwesomeIcon icon={faCuttlefish} size="2x" className="text-gray-600" />
          <FontAwesomeIcon icon={faHtml5} size="2x" title="HTML5" className="text-orange-500" />
          <FontAwesomeIcon icon={faCss3Alt} size="2x" title="CSS3" className="text-blue-500" />
        </div>
      </div>
    </>
  );
};

export default Profile;
