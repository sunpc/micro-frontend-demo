import React from "react";

import { CNav, CNavItem, CNavLink,CTabContent, CTabPane, CTabs } from "@coreui/react";

import shared from "../../shared";

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

const Home = () => {

  const username = shared.getToken()
  console.log(username)

  return <CTabs>
    <CNav variant="tabs">
      <CNavItem>
        <CNavLink>
          Home
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink>
          Profile
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink>
          Messages
        </CNavLink>
      </CNavItem>
    </CNav>
    <CTabContent>
      <CTabPane>
        <h1>{`Welcome ${username}`}</h1>
        <p>{lorem}</p>
      </CTabPane>
      <CTabPane>
        {`2. ${lorem}`}
      </CTabPane>
      <CTabPane>
        {`3. ${lorem}`}
      </CTabPane>
    </CTabContent>
  </CTabs>
}

export default Home;