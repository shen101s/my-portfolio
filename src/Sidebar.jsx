import { HiOutlineBriefcase, HiOutlineHome, HiOutlineUser, HiOutlineFolderOpen, HiOutlineMenu, HiOutlineX  } from "react-icons/hi";
import { Link, Events, scrollSpy } from "react-scroll";
import { useState, useEffect } from "react";

function Sidebar() {
  const menus = [
    {title: 'Home', icon: HiOutlineHome, },
    {title: 'About', icon: HiOutlineUser, },
    {title: 'Experience', icon: HiOutlineBriefcase, },
    {title: 'Projects', icon: HiOutlineFolderOpen, },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to) {
      setActive(to);
    });
    Events.scrollEvent.register("end", function (to) {
      setActive(to);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <>
      <button
        className="lg:hidden fixed right-1 top-1 z-100 p-2 bg-cyan-700 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
      </button>

      <aside className={`fixed top-0 left-0 h-screen bg-white opacity-100 flex flex-col justify-center 
        backdrop-blur-md z-50 border-r border-gray-100 lg:w-40 lg:bg-transparent lg:opacity-80 lg:border-none
        transition-all
        ${isOpen ? ' w-50' : ' w-0'}`}>
        <div>
          <nav>
            <ul className="space-y-4">
              {menus.map((menu, index) => {
                const Icon = menu.icon;
                const isActive = active === menu.title.toLowerCase();

                return (
                  <li key={index} className="w-full flex justify-start">
                    <Link
                      to={menu.title.toLowerCase()}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-50}
                      className={`group relative flex items-center h-12 left-5 w-40 lg:w-12 lg:hover:w-40 transition-all duration-300 
                        rounded-full cursor-pointer overflow-hidden ${isActive ? "bg-cyan-700" : "bg-gray-400/20"}`}
                      onSetActive={() => setActive(menu.title.toLowerCase())}
                    >
                      <Icon className={`w-6 h-6 mx-3 ${isActive ? "text-white" : " text-gray-800"}`}/>
                      <span className={`absolute left-12 top-1/2 -translate-y-1/2 font-medium opacity-0 opacity-100 
                        lg:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap 
                        ${isActive ? "text-white" : " text-gray-800"}`}>
                        {menu.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;