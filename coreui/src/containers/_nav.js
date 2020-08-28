import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Micro Apps']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'React',
    to: '/react',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'React Home',
    to: '/home',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

