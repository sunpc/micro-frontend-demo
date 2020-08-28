import React, { Suspense } from "react";
// import { Menu } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";

import './scss/style.scss';

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/home" : "";
const App = () => {
  return (
    // 设置路由命名空间
    <Router basename={BASE_NAME}>
      <section>
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
