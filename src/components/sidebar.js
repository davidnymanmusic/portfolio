import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

const SideBar = (props, location) => {
  const links = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/projects",
      name: "projects",
    },
    {
      path: "/resume",
      name: "resume",
    },
  ]
  const pathname =
    "/" +
    window.location.pathname
      .split("/")
      .pop()
      .trim()

  return (
    // Pass on our props
    <Menu {...props}>
      {links.map(l => (
        <Link to={`${l.path}`}>
          {typeof window !== "undefined" && pathname === l.path
            ? `> ${l.name} `
            : `${l.name} `}
          {typeof window !== "undefined" && pathname === l.path ? (
            <span className="blinking-cursor">|</span>
          ) : null}
        </Link>
      ))}
    </Menu>
  )
}
export default SideBar
