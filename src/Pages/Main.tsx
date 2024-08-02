import React from "react";

const Main: React.FC = () => {
  return (
    <body className="body">
      <h1 className="title">Welcome to my page!</h1>
      <p>
        If you're reading this, you're either extremely bored or you're looking
        to find out more about the person I am!
      </p>
      <p>I'm a Canadian computer science student</p>
      <h2 className="title"> My links </h2>
      <ul>
        <li>
          <a href="a.com">a</a>
        </li>
      </ul>
    </body>
  );
};
export default Main;
