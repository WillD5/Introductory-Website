import React from "react";

const Main: React.FC = () => {
  return (
    <body className="body">
      <h1 className="title">Welcome to my page!</h1>
      <p>
        If you're reading this, you're either extremely bored or you're looking
        to find out more about the person I am!
      </p>
      <p className="paragraph">
        I'm a Canadian computer science student, I come from that one French
        part of Canada, a blissful place known as Quebec. <br />
        My personality type is INFJ-T, which stands for, in this order,
        Introverted, Intuitive, Feeling, Judging, Turbulent. In simple terms,
        I'm an introvert who cares deeply about others and is always looking to
        improve by whatever means possible. <br />
        I'm passionate about technology and programming, but database management
        takes the cake for me. <br />
      </p>
      <h2 className="title"> My links </h2>
      <ul className="list">
        <li className="linkItem">
          <a
            href="https://twitter.com/Defaultze"
            target="_blank"
            rel="noreferrer"
          >
            My Twitter/X page
          </a>
        </li>
        <li className="linkItem">
          <a href="http://discord.gg/uMqnGst" target="_blank" rel="noreferrer">
            My Discord server
          </a>
        </li>
        <li className="linkItem">
          <a
            href="https://www.backloggd.com/u/Defaultze/"
            target="_blank"
            rel="noreferrer"
          >
            My Backloggd page
          </a>
        </li>
        <li className="linkItem">
          <a
            href="https://letterboxd.com/will_da/films/by/date/"
            target="_blank"
            rel="noreferrer"
          >
            My Letterboxd page
          </a>
        </li>
        <li className="linkItem">
          <a href="https://stats.fm/defaultze" target="_blank" rel="noreferrer">
            My Stats.fm page
          </a>
        </li>
      </ul>
    </body>
  );
};
export default Main;
