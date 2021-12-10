import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

interface Props {
  time: string;
}

// const Navbar = (props: Props) => {
//   return <div>Hello {props.time}</div>;
// };

const Navbar: React.FC = ({}) => {
  return (
    //   <nav classNameNameName="nav-container">
    //     <ul>
    //       <li>
    //         <Link href="/">
    //           <button>Home</button>
    //         </Link>
    //         <motion.div whileHover={{ scale: 1.1 }} />
    //       </li>
    //     </ul>
    //   </nav>
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12"
            src="https://images7.alphacoders.com/118/1185741.jpg"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Notification</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
