import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import gateway from '../components/assets/images/projects/gateway.png';
import ecommerce from '../components/assets/images/projects/ecommerce.png';
import Skylark from '../components/assets/images/projects/Skylark.png';
import HWS from '../components/assets/images/projects/HWS.png';
import pokemon from '../components/assets/images/projects/pokemon.png';
import tictactoe from '../components/assets/images/projects/tictactoe.png';
import burgerBuilder from '../components/assets/images/projects/burgerBuilder.png';
import reservation from '../components/assets/images/projects/reservation.png';
import hamburgernav from '../components/assets/images/projects/hamburgernav.png';


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  projects: [
    {
      tag: "html, css", 
      image: [gateway],
      title:" Gateway Revision Project",
      caption: "Made with Html & Css",
      description: "This is my project that was revised from the first Gateway project. This includes validation for both html & css and web accessibility",
      links: [
        { link: "https://github.com/amoua000/GateWay-revised", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LaunchIcon /> },
      ],
    },

    {
      tag: "React",
      image: [ecommerce],
      title: " Ecommerce Project",
      caption: "Made with React, JavaSctipt,Html, and Css",
      description: "This is my project that sells aquarium saltwater fish livestock.",
      links: [
        { link: "https://github.com/amoua000/Ecommerce-react", icon: <GitHubIcon /> },
        { link: "https://gracious-pare-c08396.netlify.app/", icon: <LaunchIcon /> },
      ],
    },

    {
      tag: "Node",
      image: [HWS],
      title: " How Was School Team Project",
      caption: "2nd Team hackathon project made with Node, express, and API's",
      description: "We had a team of 4 create a API and used another API that assisted kids with school and their parents and teachers.",
      links: [
        { link: "https://github.com/jjohn513/How-Was-School", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LaunchIcon /> },
      ],
    },

    {
      tag: "MySQL",
      image: [Skylark],
      title: " Skylark Social",
      caption: "Made with front end and back end incorporating MySQL and express",
      description: "This was lead by Dyl and incorparted for us to use MySQL to start using full-stack development in our challenges and projects.",
      links: [
        { link: "https://github.com/amoua000/Skylark-Social-app", icon: <GitHubIcon /> },
        { link: "https://hopeful-swartz-2f80ce.netlify.app/", icon: <LaunchIcon /> },
      ],
    },
    {
      tag: "JavaScript",
      image: [pokemon],
      title: " Pokemon App",
      caption: "Build with JavaSCript and used to train against some pokemon",
      description: "This is built on a simple platform of commands and lists of attacks to train against other pokemon like the game!",
      links: [
        { link: "https://github.com/amoua000/Pokemon-App", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LaunchIcon /> },
      ],
    },
    {
      tag: "React",
      image: [tictactoe],
      title: " Tic-Tac-Toe",
      caption: "Made with React Hooks",
      description: "This is a game made with react hooks that was the first project made to get me familiar with React hooks",
      links: [
        { link: "https://github.com/amoua000/tic-tac-toe", icon: <GitHubIcon /> },
        { link: "https://friendly-ritchie-d02f35.netlify.app/", icon: <LaunchIcon /> },
      ],
    },
    {
      tag: "React",
      image: [burgerBuilder],
      title: " Burger Builder Application",
      caption: "This project is made with React classical components",
      description: "This project was made to learn how to incorporate classical components and was one of the first React projects ever made.",
      links: [
        { link: "https://github.com/amoua000/Week18", icon: <GitHubIcon /> },
        { link: "https://distracted-carson-12d1a2.netlify.app/", icon: <LaunchIcon /> },
      ],
    },
    {
      tag: "html, css",
      image: [reservation],
      title: " Reservation Page",
      caption: "This is my Reservation Page made with Html & Css",
      description: "This project was made with Html and Css during my beginning of Road to Hire. I plan on updating it and changing it to one of my favorite restaurants in the future.",
      links: [
        { link: "https://github.com/amoua000/reservationPage", icon: <GitHubIcon /> },
        { link: "https://clever-ritchie-a7dd21.netlify.app/", icon: <LaunchIcon /> },
      ],
    },
    {
      tag: "JavaScript",
      image: [hamburgernav],
      title: " Hamburger Navbar",
      caption: "This is made with JavaScript",
      description: "This project was made from scratch using JavaScript to build the hamburger navigation bar.",
      links: [
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://github.com/amoua000/Music-Hamburger-navbar", icon: <LaunchIcon /> },
      ],
    },
    {
      tag: "React",
      image: "https://lh3.googleusercontent.com/proxy/W2KewiPRCTvJcF6aH8WWW_YCcmIBJ2dy_C5UzRoIqhLy3ZIvN4tJDByhwG8CxMMwETZWXlLNoKOs-x2wxCcjyTbz9aOwYRqvI5wg8Ox6qD28n-hTRIEURASZS-XmLg",
      title: "Youtube Revision Project",
      caption: "Made with React and uses CSS such as Display flex by a team of 6.",
      description: "This is our current team project still under construction!",
      links: [
        { link: "https://github.com/ArteaWright/YouTube2/tree/master/src", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <LaunchIcon /> },
      ],
    },
  ],
};
