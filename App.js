
import React from "react";
import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";

//Example 01
// const heading = React.createElement("h1", { id: "heading" }, "Hello world from react");
// console.log(heading);
// const root =ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(heading);
//Excercise 
/*
*<div id ="parent">
    <div id ="child">
    <h1>I m h1 tag <h1/>
    </div> 
</div>
*
*
*
*/

//Solution

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//         "div",
//         {id:"child"},
//         [React.createElement("h1",
//             {},
//             "Im H1 Tag"
//         ),React.createElement("h2",{},"Im h2 Tag")]
//     )
// );
// root.render(parent);


//!EPISODE 03  NAMASTE REACT  */

//
// JSX ==> is converted into react element by babale where javascripts can understands and it is converted into Reactelement object 
// and then into HTML element 
//!Example 


const jsxHead= <h1> Hi Everyone </h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHead);



//?React Components are of two types 1. Class Component and 2. Functional Component 
//*Function component is nothing but a java script function which return a JSX Element 
//! Example 

const HeadingComponent1 = () =>{
    return <h1> Hello react</h1>
}

//? both the ways were same (No need to write return )if you want to write in multiple lines you can wrap it ina curly braces 


const HeadingComponent2 = () =>  <h1 className="heading"> Hello React2 </h1>

//* can we render a function using root. render 
//? Yes but in different syntax root.render(<Heading component/>)

root.render(<HeadingComponent1/>)
root.render(<HeadingComponent2/>)


//? Can We add a one functional component into another functional component 
//* The Answer is YESSSS BUT HOW ?? 
//* You can just take name of one componenet put it it another componenet like <componenet1/> into another component but make sure wrap them up in a parent like div or <></>
//! EXAMPLE 

const Title = () => <h1 className="title"> Im the TITLE of this page  </h1>

const Heading = () => (
    <div className="container">
    <Title/> 
    <h2 className="heading"> I'm Heading of this page </h2>
    </div>
)
//* here we have inserted the title component into another component and make sure when we are adding a component it should be ina parent element i.e div 

//* lets render inoto root 

root.render(<Heading/>); //? This what component composition 



//? Can we add a javascript code into our components 
//* The Answer is YES but How ? 
//* Just insert curley braces {} in any where of your jsx code it will take as javascript code 
//! EXAMPLE 
const number = 1000;
const Code = () => (
    <h2>In this code we are inserting a  javaScript by curley brases {number+12}</h2>
)

root.render(<Code/>);

//? So Anywhere in Your jSX code you can insert javascript code by curley braces {}



//? Now Can we insert a react element into a functional component 
//* The Answer is YESS but HOWWW? 
//* JUST ADD A CURLEY BRACES A JAVASCRIPT CODE AND PUT THE ELEMENT INTO IT ...
//? But how does it work ?
//* its work because a react element is nothing but a javascript varible 
//? Can we add a functional component into another functional component 
//* The answer is YESS 
//* it can be done in two way 
//* By calling a function by inserting it into a curly bases as it acts as a javascript code 
//* by adding <Heading3/> or MHeading><Heading3/>
//! EXAMPLE 

const title2= <h1> I am a react element im added to functional component by using curley braces</h1>


const Heading2 = () =>
    (
        <div className="container" >
        {title2}
        <h1>Im a functional component </h1>
        </div>
    )

const Heading3 =() => (
    <div className="container">
        <Heading2/>
        <Heading2></Heading2>
        {Heading2()}
    </div>
)

root.render(<Heading3/>)
