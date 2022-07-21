import React from "react"
import { Outlet, NavLink, useLocation } from "react-router-dom"

export const Layout = () => {
  const location = useLocation()
  const urlActual = location.pathname
  return (
    <div>
      <div>
        <h2>我是通用组件</h2>
        <p>当前页面：{urlActual}</p>
        <nav>
          <NavLink to="/">回首页</NavLink> <NavLink to="/a">去A页面</NavLink>{" "}
          <NavLink to="/b">去B页面</NavLink>
        </nav>
      </div>
      <div>{<Outlet />}</div>
    </div>
  )
}
