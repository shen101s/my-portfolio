import profile from './assets/profile.jpg';
import { FaAngleRight } from "react-icons/fa";

function About({ className }) {

  return (
    <>
      <section className="items-center mt-10">
        <div className={className}>
          <h2 className="relative text-2xl md:text-3xl font-semibold text-gray-600 mb-4 text-center 
            before:content-[''] before:absolute before:block before:w-40 before:h-px before:bg-gray-600/40 before:left-0 before:right-0 before:bottom-0 before:mx-auto before:mb-[-16px]
            after:content-[''] after:absolute after:block after:w-16 after:h-[3px] after:bg-blue-700/60 after:left-0 after:right-0 after:bottom-0 after:mx-auto after:mb-[-17px]
            ">
            About
          </h2>

          <div className="grid grid-cols-12 gap-4 mt-15">
            <div className="col-span-4">
              <img
                  src={profile}
                  alt="profile"
                  className="w-full h-auto"
              />
            </div>
            <div className="col-span-8">
              <h3 className='relative text-xl font-semibold text-gray-600 mb-5'>
                Full-stack Developer | Freelancer | Virtual Assistant
              </h3>
              <p className="text-justify mb-5">
                Full-stack Developer with seven years’ experience in
                designing, developing and maintaining software systems.
                Demonstrated ability to produce solutions that lead to
                improved efficiency, accuracy, speed of operations and
                customer satisfaction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <FaAngleRight />
                    <strong>Email: </strong>
                    <span>eumagueshenshen@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaAngleRight />
                    <strong>City: </strong>
                    <span>Tacloban City, Philippines</span>
                  </li>
                </ul>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <FaAngleRight />
                    <strong>Degree: </strong>
                    <span>BS in Computer Science</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaAngleRight />
                    <strong>Freelance: </strong>
                    <span>Available</span>
                  </li>
                </ul>
              </div>


              <p className="text-justify">
                Actively seeking a freelance or permanent remote role where I can leverage my programming expertise 
                and virtual assistance capabilities. Highly adaptable and eager to learn new technologies and processes, 
                with a strong commitment to delivering efficient, reliable, and value-driven solutions 
                while continuously enhancing my professional skills.
              </p>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default About;
