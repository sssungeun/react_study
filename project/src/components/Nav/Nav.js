import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navigation = (props, context) => (
  <div className="navigation">
    <div className="inner">
      <Link to="/">Shopping Mall</Link>
      <Link to="/cart">Cart</Link>
    </div>
  </div>
);

export default Navigation; 

//네비게이션 역할
// 1 line: React의 Component를 생성하기 위해서는 우선 React Library를 불러온다.
// 2 line: React-Router에서 Routing기능을 생성하기 위해, React-Router의 내장 Component인 Link Component를 불러온다. 
//물론 a tag로도 Routing 이동을 할 수 있다. 하지만, Link를 사용하면 a태그 사용시 전체 페이지의 reloading을 막을 수 있게 된다.
// 5 line: es6의 형태로 작성된 stateless functional component, 혹은 dumb component라고 한다. 
//Class Component처럼 render함수, Javascript의 this등을 사용하지 않고 좀 더 간단히 작성할 수 있다. 
//이름 그대로 함수형태로 Component를 생성하는 것이며, state나 lifecycle method가 필요없을 경우에 사용한다. 좀 더 자세한 내용은 차후 기회가 있으면 작성하도록 하겠다.
// 8, 9 line: to코드 이후, 이동을 원하는 url을 작성하면 된다.