import { FaAngleRight } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-40 bg-black opacity-80 text-white flex flex-col justify-center backdrop-blur-md z-50">
      <div>
        <nav>
          <ul className="space-y-4">
              <li>
              <a href="#home" className="flex items-center px-6 py-2 hover:bg-white/10 transition rounded">
                  <FaAngleRight className="mr-3" /> Home
              </a>
              </li>
              <li>
              <a href="#about" className="flex items-center px-6 py-2 hover:bg-white/10 transition rounded">
                  <FaAngleRight className="mr-3" /> About
              </a>
              </li>
              <li>
              <a href="#projects" className="flex items-center px-6 py-2 hover:bg-white/10 transition rounded">
                  <FaAngleRight className="mr-3" /> Experience
              </a>
              </li>
              <li>
              <a href="#contact" className="flex items-center px-6 py-2 hover:bg-white/10 transition rounded">
                  <FaAngleRight className="mr-3" /> Projects
              </a>
              </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;