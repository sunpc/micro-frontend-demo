import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import { useHistory, useLocation, matchPath } from 'react-router-dom'

// routes config
import routes from '../routes'

// shared
import shared from "../shared";

// Added by Simon 2020/8/27
const getPaths = pathname => {
  const paths = ['/']
  if (pathname === '/') return paths;
  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`
    paths.push(currPath)
    return currPath
  })
  return paths
}

const TheLayout = () => {

  // Check login token
  const history = useHistory();
  if (shared.getToken() === "") {
    history.push('/login')
  }

  // Added by Simon 2020/8/27
  const currPath = useLocation().pathname
  const paths = getPaths(currPath)
  // console.log(paths);
  const currRoutes = paths.map(currPath => {
    const route = routes.find(route => matchPath(currPath, {
      path: route.path,
      exact: route.exact,
      micro: route.micro
    }))
    return { ...route, currPath }
  }).filter(route => route && route.name)

  // console.log(currRoutes)
  const coreDisplay = currRoutes.lastItem.micro ? "none" : ""
  const microDisplay = currRoutes.lastItem.micro ? "" : "none"

  // return dom
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body" style={{display:coreDisplay}}><TheContent/></div>
        <div className="c-body" id="microframe" style={{display:microDisplay}}></div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
