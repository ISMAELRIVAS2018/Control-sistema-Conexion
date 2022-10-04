import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";


const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Clientes", Link:"clientes/nuevo", src: "Chart_fill" },
    { title: "DataTable", Link:"/" ,src: "Chat" },
    { title: "Nuevo", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  // console.log(Menus)
  return (
    <div className="flex">
      <div   
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
        >
            <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (

            <Link
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
              to={Menu.Link}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>

      </div>

      <div className="md:w-full p-10 md:h-screen overflow-scroll bg-slate-100 	">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
