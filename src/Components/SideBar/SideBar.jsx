import {useState} from 'react';
import './SideBar.scss';
import {Images} from '../../Constants'
const Menus=[
  {
    title:"Home",
    icon:Images.Home,
  },
  {
    title:"Forcast",
    icon:Images.Forcast,
  },
  {
    title:"Warnings",
    icon:Images.Warnings,
  },
  {
    title:"Stats",
    icon:Images.Stats,
  },
  {
    title:"Forum",
    icon:Images.Forum,
  },
  {
    title:"Calculations",
    icon:Images.Calculations,
  },
  {
    title:"Settings",
    icon:Images.Settings,
  }
];
const SideBar = () => {
  const [window, setWindow] = useState(false);
  let MouseEntered = () => {
      setWindow(false);
  };
  let MouseLeft = () => {
    setWindow(true);
};
  return (
    <nav className="navbar-menu" style={{ width: window === false ? 250 : 60 }} onMouseLeave={()=>MouseLeft()} onMouseEnter={()=>MouseEntered()}>
    <div className="burger" >
        <img src={Images.Logo} alt="burger" />
      </div>
    <ul className="navbar__list">
      { Menus.map((item, i) => (
        <div className="navbar__li-box" key={i}>
          <img
            src={item.icon}
            alt={item.title}
            style={{ paddingLeft: window === false ? 27 : 17 }}
          />
          <li
            className="navbar__li"
            style={{ display: window === false ? "inline-block" : "none" }}
          >
            {item.title}
          </li>
        </div>
      ))}
    </ul>
    <div className="LogOut" >
        <img src={Images.LogOut} alt="LogOut" />
        <span
            className="navbar__li"
            style={{ display: window === false ? "inline-block" : "none" }}
          >
            Logout
          </span>
      </div>
  </nav>
  )
}

export default SideBar