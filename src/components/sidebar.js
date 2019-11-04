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
  // const pathname =
  //   "/" +
  //   window.location.pathname
  //     .split("/")
  //     .pop()
  //     .trim()
  // if (typeof window === "undefined") {
  //   global.window = {}
  // }

  return (
    // Pass on our props
    <Menu {...props}>
      {links.map(l => (
        <Link to={`${l.path}`}>> {l.name} </Link>
      ))}
    </Menu>
  )
}
export default SideBar
