import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import { Location } from "@reach/router"
const SideBar = props => {
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

  return (
    <Menu {...props}>
      {links.map(l => (
        <Link to={`${l.path}`}>
          {props.location === l.path ? `> ${l.name} ` : `${l.name} `}
          {props.location === l.path ? (
            <span className="blinking-cursor">|</span>
          ) : null}
        </Link>
      ))}
    </Menu>
  )
}
export default () => {
  return (
    <Location>
      {locationProps => {
        return (
          <SideBar
            location={
              "https://davidnymanmusic.github.io//portolio" +
              locationProps.location.pathname
            }
          />
        )
      }}
    </Location>
  )
}
