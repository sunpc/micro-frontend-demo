import React, { Component } from "react";

import { CButton, CNav, CNavItem, CNavLink,CTabContent, CTabPane, CTabs } from "@coreui/react";

import token from "../../token";

import SharedModule from "../../shared"

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'

class Home extends Component {

  constructor(props) {
    super(props);
    // get msg count
    const shared = SharedModule.getShared()
    this.state = {msgCount: shared.getMsgCount()};
    this.sendMsg = this.sendMsg.bind(this);
  }
  
  sendMsg() {
    // update state
    this.setState(prevState => ({
      msgCount: prevState.msgCount + 1
    }), () => {
      // update shared
      const shared = SharedModule.getShared()
      shared.setMsgCount(this.state.msgCount)
    });
  }

  render() {
    const username = token.getToken()
    // console.log(username)

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
          <p>{`You have ${this.state.msgCount} new message(s).`}</p>
          <CButton color="primary" className="px-4" onClick={this.sendMsg}>Send a Message</CButton>
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
}

export default Home;