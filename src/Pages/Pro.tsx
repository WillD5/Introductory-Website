import React from "react";

const Pro: React.FC = () => {
  return (
    <body className="body">
      <h1 className="title">Welcome to my page!</h1>
      <p>
        If you're reading this, you're most likely looking to find out more
        about the person I am!
      </p>
      <p>
        I'm a Canadian computer science student, I come from that one French
        part of Canada, a blissful land known as Quebec.
      </p>
      <h2 className="title"> My links </h2>
      <ul>
        <li style={{ listStyleType: "none" }}>
          <a href="https://www.a.com">a</a>
        </li>
      </ul>
    </body>
  );
};
export default Pro;
