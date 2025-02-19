
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import ContactUs from "./Components/ContactUs.js"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";      
import Error from "./Components/Error.js";
import RestaurentMenu from "./Components/RestaurentMenu.js";


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
    <h1>I m h1 tag <h1/>Remove-Item -Force package-lock.json
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


// const jsxHead= <h1> Hi Everyone </h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHead);



//?React Components are of two types 1. Class Component and 2. Functional Component 
//*Function component is nothing but a java script function which return a JSX Element 
//! Example 

// const HeadingComponent1 = () =>{
//     return <h1> Hello react</h1>
// }

//? both the ways were same (No need to write return )if you want to write in multiple lines you can wrap it ina curly braces 


// const HeadingComponent2 = () =>  <h1 className="heading"> Hello React2 </h1>

//* can we render a function using root. render 
//? Yes but in different syntax root.render(<Heading component/>)

// root.render(<HeadingComponent1/>)
// root.render(<HeadingComponent2/>)


//? Can We add a one functional component into another functional component 
//* The Answer is YESSSS BUT HOW ?? 
//* You can just take name of one componenet put it it another componenet like <componenet1/> into another component but make sure wrap them up in a parent like div or <></>
//! EXAMPLE 

// const Title = () => <h1 className="title"> Im the TITLE of this page  </h1>

// const Heading = () => (
//     <div className="container">
//     <Title/> 
//     <h2 className="heading"> I'm Heading of this page </h2>
//     </div>
// )
//* here we have inserted the title component into another component and make sure when we are adding a component it should be ina parent element i.e div 

//* lets render inoto root 

// root.render(<Heading/>); //? This what component composition 



//? Can we add a javascript code into our components 
//* The Answer is YES but How ? 
//* Just insert curley braces {} in any where of your jsx code it will take as javascript code 
//! EXAMPLE 
// const number = 1000;
// const Code = () => (
//     <h2>In this code we are inserting a  javaScript by curley brases {number+12}</h2>
// )

// root.render(<Code/>);

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

// const title2= <h1> I am a react element im added to functional component by using curley braces</h1>


// const Heading2 = () =>
//     (
//         <div className="container" >
//         {title2}
//         <h1>Im a functional component </h1>
//         </div>
//     )

// const Heading3 =() => (
//     <div className="container">
//         <Heading2/>
//         <Heading2></Heading2>
//         {Heading2()}
//     </div>
// )



//!   CREATING A SWIGGY APP
/**
 * Header
 * -Logo
 * -Nav items
 * Body
 * -Searc
 * -Restaurent container
 *   -Img
 *   -Name of restaurant,star rating, cusines 
 *   
 * -Restaurant Card
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contacts 
 */
const root =ReactDOM.createRoot(document.getElementById("root"));

// //*Lets create header component where Logo components and nav items will be in it 
// const Header = () => {
//     return (
//         <div className="header" >
//             <div className="logo-container">
//                 <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About us</li>
//                     <li>Contactus</li>
//                     <li>Cart</li>
//                 </ul>

//             </div>
//         </div>
//     )
// }

//*creating a restaurent card component 
//!Optional chainig -->a JavaScript feature that prevents runtime errors when trying to access a property on undefined or null.
// const RestaurentCard = (props) => {    
//     {/** here props are taken as an object  */}
//     const {resData} = props; //Here we are doing destructuring othere wise we need to write props.resdata.name after destructuring resdata.name {resdata is another object by desctructing we can directly acces the values in brackets }
//     const{name,img,cuisines,avgTime,rating} = resData?.data; {/**here is inside resdata so we have written resData.data  */}
//     return (
//         <div className="res-card">
//             <img className="res-logo" alt="res-logo" src= {img} />
//             <h3>{name}</h3>  {/**now we can directly write name as we destructured it  */}
//             <h4>{cuisines}</h4>
//             <h4> {avgTime} seconds</h4>
//             <h4>{rating} rating</h4>
//         </div>
//     )
// }

//* Lets create body component 
//? In the body componenet we have inserted my restaurent components but we have hardcoded it it has to work dynamaicall How ican be done ?
//*it can be done by using props --> props are nothing but arguments to function which are nothing but properties of a function
//* We can also pass the data as a JSON object by without typing all the values in it.
const resObj =[
    {

data:{
    id:1,
    name:"KFC",
    img:"https://suhana.com/cdn/shop/articles/500-x-380-Biryani.png?v=1709544702",
    cuisines:"Burger",
    avgTime : "35",
    rating:"4"
}
    },
    {
        data:{
            id:2,
            name:"BurgerKinG",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErzz4CS7NGBxlKW2740ne8TdzITU8_knQHA&s",
            cuisines:"Burger",
            avgTime : "38",
            rating:"4.5"
        }

    },
    {
        data:{
            id:3,
            name:"Maharaja",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQ95xceodxQ0xKoLMgxmAlz0og7iTfBcfoA&s",
            cuisines:"Chicjen65,tandoori",
            avgTime : "45",
            rating:"4.7"
        }

    },
    {
        data:{
            id:4,
            name:"DesiBites",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDR78DQXzOlurhRenhe7MumvU2vKn5LUpAAQ&s",
            cuisines:"apricotdelight,Killi",
            avgTime : "30",
            rating:"3"
        }

    },

  
];
// const Body = () => {
//     return (
//         <div className="body">
            
//             <div className="search">Search</div>
//             <div className="res-container">
//                 {/* //Here we will add another component  */}
//                 {/* //Restaurantcard will build as new component*/}
//                 {/* <RestaurentCard name="Meghana foods" cusines="Biriyani" avgTime="30" rating ="4"/>   *here are we ar passing the props as an arguments these will be passed to the restaurent component as a object  */}
//                 <RestaurentCard resData={resObj[0]}/>   {/**Instead of typing all the values we can directly pass the resData here res data is goes into another object so we need to destructuring   */}
//                 <RestaurentCard resData={resObj[1]}/>   {/**Instead of typing all the values we can directly pass the resData here res data is goes into another object so we need to destructuring   */}
//                 <RestaurentCard resData={resObj[2]}/>
//                 <RestaurentCard resData={resObj[3]}/> 

//                 {/* lets add looping so that we no need to write again and again */}

//                 {
//     resObj.map((restaurent) => (
//         <RestaurentCard key={restaurent.data.id} resData={restaurent} />
//     ))
// }
                       
//             </div>
              
//         </div>
//     )
// }


//*Lets create an App component where our entire other components will be in it 
const AppLayout = () => {
    return (<div className="app">

        <Header/>
        <Outlet/>

    </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contactus",
                element:<ContactUs/>
        
            },
            {
                path:"/restaurentmenu/:resID",
                element:<RestaurentMenu/>
        
            }

        ],
        errorElement: <Error/>

    },
    
])

root.render(<RouterProvider router={appRouter}/>);

