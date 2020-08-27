import React, { Suspense, useState, useEffect } from "react";
import { Menu } from "antd";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./pages/home";

const menus = [
  {
    key: "home",
    route: "/",
    title: "Home",
  }
];

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/home" : "";
const App = () => {
  const [refresh, setRefresh] = useState(0);
  const [selectedKeys, setSelectKeys] = useState(["home"]);
  useEffect(() => {
    const { pathname } = window.location;
    const menu = menus.find(
      (item) => `${BASE_NAME}${item.route}` === pathname
    );
    setSelectKeys(() => [menu ? menu.key : "home"]);
  }, [refresh]);

  return (
    // 设置路由命名空间
    <Router basename={BASE_NAME}>
      <section>
        <Menu
          onClick={() => setRefresh((refresh) => ++refresh)}
          selectedKeys={selectedKeys}
          mode="horizontal"
        >
          {menus.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.route}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </section>
    </Router>
  );
};

export default App;
