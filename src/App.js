import Question from "./question";
import './App.css';
import Cup from '../src/assets/images/cup EFA.jpg'
import Logo from '../src/assets/images/logo.jpg'
import Dalglish from '../src/assets/images/dalg.jpeg'
import Gerrard from '../src/assets/images/Gerrard.jpeg'
import Salah from '../src/assets/images/Salah.jpeg'
import Logo1950 from '../src/assets/images/Liverpool-Logo-1950.jpg'
import Logo1955 from '../src/assets/images/Liverpool-Logo-1955-768x432.png'
import Logo1987 from '../src/assets/images/Liverpool-Logo-1987-768x432.png'
import Logo1999 from '../src/assets/images/Liverpool-Logo-1999-768x432.jpg'

import React from "react";
import Champions from "./assets/images/Chemp leg.jpg";



export default function App() {
  return (
    <>
        <div className='container_logo'>
        <img className='logo' src={Logo1950}/>
        <img className='logo' src={Logo1955}/>
        <img className='logo' src={Logo1987}/>
        <img className='logo' src={Logo1999}/>
        <img className='logo' src={Logo}/>
        </div>
    <h1>About Liverpool Football Club</h1>
        <div className="container">
            <h3>Interesting Facts</h3>
            <div className="questions">
                {questions.map((questions) => (
                    <Question key={questions.id} question={questions}/>
                    ))}
            </div>
        </div>
    </>
  );
}

const questions = [
    {
        id: 1,
        title: "Liverpool is the most decorated club in England",
        image: Cup,
        info:
        <strong>
            League Titles
            1900-01, 1905-06, 1921-22, 1922-23, 1946-47, 1963-64,
            1965-66, 1972-73, 1975-76, 1976-77, 1978-79, 1979-80, 1981-82,
            1982-83, 1983-84, 1985-86, 1987-88, 1989-90, 2019-20
            Liverpool have won a phenomenal 19 top-flight league titles,
            with Jürgen Klopp leading the Reds to their most recent in the Premier League in 2019-20.
        </strong>
    },
    {
        id: 2,
        title: "Team has won 6 Champions Leagues",
        image: Champions,
        info:
        <strong>
            European Cups
            1976-77, 1977-78, 1980-81, 1983-84, 2004-05, 2018-19
            We have proudly won six European Cups - more than any other British team.
            The first came under Bob Paisley, who added two more to the trophy cabinet before his successor Joe Fagan also won the famous cup. Rafael Benitez oversaw the Miracle of Istanbul in 2005,
            and the most recent came under Jürgen Klopp in 2019.
        </strong>
    },
    {
        id: 3,
        title: "Best players",
        image: Dalglish,Gerrard,Salah,
        info:
        <strong>
            Kenny Dalglish
            Steven Gerrard
            Mohamed Salah
        </strong>
    }
];

