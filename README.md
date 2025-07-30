# React-Course
## createRoot
- it creates a root to display react components inside a browser DOM node 
## Reat Hooks 
- Normal JS Function 
- There are 2 imp hooks 
- 1 useState()  -- super pwerful react state varible  also called utility variable 
- inorder to this variable you need to import it first 
- You can import this by using named import 
- import {useState} from "react";
- Why we are importing like this because some react developer used named export on react hook

### Steps in using useState()

#### step 1
- You can create it by 
- let [resObj] = useState();  this is state variable 
- let resObj; this is normal variable
#### step 2 
- So in use state function we pass a default values 
let [resObj] = useState([]); State variable 
let resObj =[]; Normal variable

#### step 3 
- as we passed nothing as default value we do not get anything on the UI 
- so pass the data in the function 
''' const[resObj] = useState([
    {

data:{
    id:1,
    name:"KFC",
    img:url1,
    cuisines:"Burger",
    avgTime : "35",
    rating:"3"
}
    }
])'''
- now we will get the data on UI    - this state varibale 

- let resObj = [
    {

data:{
    id:1,
    name:"KFC",
    img:url1,
    cuisines:"Burger",
    avgTime : "35",
    rating:"3"
}
    }
] Normal variable 

#### step 4
- useState() can only be used inside a functional component or a custom hook.

- Your code has useState([]) outside of the Body component, which is not allowed in React

#### step 5 
- Inorder to modify the variable which scecond parameter in this array which is nothing but a function i.e setresObj which modifies  it you 
- cannot modify as a normal variable 
- So in onclick property we are updating our list this list has to be passed to setList which will update our original list 

#### Note 
- Never useState outside of your componenet 
- Keep it on the top 
- dont use it inside if else/Lopps/functions  

This complete process is called RENDER 


- 2 useEffect()
- the use of this hook is to re render our page 
- it first give the skeleton of our page that means first our body component will be printed and then it fetches the data by making a api call 
- useEffect takes 2 parameters one is callback function and two is array data 
- Every time a component is rendered a useEffect hook is called 
- If there is no dependency array useEffect is called on every componenent render 
- if there is empty dependency array then use Effect is called only on intial render only once 
- if there is dependency array ie btn when ever btn chancges then use Effect is called 

# React Router 

## install 
- npm install react-router-dom
- Now our task is to go from one page to another page like home page to about page 
- this cane be done writing routing configuration 
## step 1 
- import {createBrowserRouter} from "react-router-dom"
in App.js
- its just about what should happen specific rout 
-const appRouter = createBrowserRouter([{it takes list of paths }])
const appRouter = createBrowserRouter([
    {
        
    }
]);
createBrowserRouter([]): This function is used to create a router instance for your React app using React Router v6.
The empty array [] is supposed to contain route objects, but right now, it is empty.
Each route object should define:
path: The URL path (e.g., "/home")
element: The React component to render for that path

- U alse need to import RouterProvide What is RouterProvider in React Router?
RouterProvider is a component in React Router v6 that is used to provide a router configuration to your React application. It connects the routing system to your app and enables navigation between different pages.

### how do you set up configuration 

- const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>

    },
    {
        path:"/about",
        element: <About/>
    },
    {
        path:"/contactus",
        element:<ContactUs/>

    }
])

root.render(<RouterProvider router={appRouter}/>);

- it takes list of objects and we pass those objects as a props to ta RouteProvider and then we render it 
- if it is "/" we will get home page 
- if it is "/contactus" we will get contact page 

#### what if we given a wrong path like / ssyugxbsdcbdkjcb
- it gives us unexpected application error 
- which gives ugly error 
- so we need to design our own error page which looks nice this is called error handling 
- so now will add a error component 
- if the component is not about then load a error component 

#### React Router give one more way of handinlg error i.e hook {useRouterError}
- using this hook it gives more information about error  showing specific detail of error 


## Children Routes 

#### What is the necessity of children routes 
- if moving to another page like contacus we are loosing our header 
- now the header should be shown and we need to move to contactus page then children routes will help us 
- to do this 
 - will add children in configuration which is again a list of paths 
 - here we will add the children which are nothing but our paths 
 - so these paths should be displayed below our header 
 - so react-router gives us new component i.e **outlet** import it and add below header componenet in AppLayout 
 - this outlet acts as a rplacer i.e when ever we call cantactus component as it is children the outlet component is 
 - is replaced by the outlet component in the same way acts with other components too 
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
        
            }

        ],
        errorElement: <Error/>

    },
    
])

#### Now we should add link to our components on Header. Ho can we do this ?
- This can be done by using anchor tag <a href = <about/>> 
- but ther is issue using this 
- i.e if we use anchor tag each time we click it reloads our page which is time consuming 
- to solve this issue react-router provides us link u need to import it and it exactly acts as anchor tag
- <li> <Link to="/contactUS">ContactUS <Link/> <li/>
- it will take us to contactus page but it will not reload our whole page 

#### This Complete process is called SINGLE PAGE APPLICATION but why ?
- Because only the components were getting interchanged the whole page is not getting refreshed 


### How many types of routing were there 

#### There are 2 types of routing in Web Apps 

1. Client Side Routing 
- it does not make any network call just the componenents get interchanged. We are doing client side routing 
2. Server Side Routing 
- it means when we want to go from home to about page it will get about.html page from server and refreshes whole page 

### Dynamic routing 
- so when ever we click on the particular restauarent it should show the details of that particular restaurent 
- so we need to provide routing for all these restaurents if we write manually 
- this can be done by giving the resID by puting a colon (:)
- {
                path:"/restaurentmenu/:resID",
                element:<RestaurentMenu/>
        
            }
#### Note 
###### Why you are getting the error while destructuring ?
-  const {costForTwoMessage,id,cuisines} = resInfo?.data?.cards[2]?.card?.card?.info;
    return resInfo===null ? (<h1>Loading</h1>) :(
- initialls our resInfo is null we extracting data from it before checking the condition so it was showing undefined 
##### Solution
- keep if condition before destrcuturing 

### useParam hook what does it do ?

- The useParams hook in React Router is used to access URL parameters in a component. It allows you to extract dynamic values from the URL.
##### NOTE 
- <Link  to={"/restaurentmenu/"+restaurent.info.id}>  <RestaurentCard key={restaurent.info.id} resData={restaurent} /></Link>
- <Link key={restaurent.info.id} to={"/restaurentmenu/"+restaurent.info.id}>  <RestaurentCard  resData={restaurent} /></Link>

- initially key is in restaurentcard component 
- later on it is in link component 
- why? make sure that your key should be in parent componenet.

# Class Componenets 

- class based components are similar to functional based components 
#### How to declare ?
- class UserClass extends React.Component{
    
}

- you need to extend react.component so that brwser will come to know i,e is a component 
- will have a render method which will return a piece of  JSX 

#### how to pass props inside 
- in class componenet we can pass props using constructor 
- class UserClass extends React.Component{

    constructor(props){
        super(props); 
        
    }

#### Why super(props)
- In a React class component, when you extend React.Component, you need to call super(props) in your constructor to properly initialize the parent class with the component's props.

Why super(props) is Necessary
Initialize the Parent Class:

When you call super(props), you are invoking the constructor of the parent class (React.Component) and passing the props to it.
This ensures that the parent class sets up the component properly, including initializing this.props.
Accessing this.props in the Constructor:

Without passing props to super(), this.props will be undefined in the constructor.
If you try to access this.props inside your constructor without calling super(props), you'll run into issues because the base class hasn’t been properly initialized with the props.
Consistent Behavior:

React expects the props to be passed to the base class constructor so that they can be available throughout the component's lifecycle.

- U can access props by using this

# Custom Hooks 

#### What is the use of custom hooks ?
- Initially if you take restaurent menu componennt it uses hooks from the library
- it concerned about how its getting and data and displaying the data.
- if we write custom hooks then it is not worried how we are getting the data and our code will be more optimized 


#### Creating a feature whether user is online or offline 






# Tailwind CSS 

- Tailwind is the new way of styling our pages 
- frst we need to configure tailwind in our project based on the webpack we use eg vite,parcel etc
-  content: ["./src/**/*.{html,js}"], meaning we can use tailwind in html, js,ts,jsx,tsx files where ever you find these files 
- we are going to add tailwindcss using classnames 
- Inorder to reduce the width of logo jst write w-8

# Higher Order Components 

- it is nothing but a javascript function which takes another component as a parameter it will return another component 
- it is used for enhancing(on top of it ) the component it does not change the the component 
- So now we have restaurant card we need to add a promoted label to it 
- so noe we are enhancing or component we can do it by using hogh order components 

#### RestaurentCard.js
- const withPromotedLabel = (resraurantCard)={
     return (props)=>{
        return (
         <div>
         <label>Promoted<label/>
         <RestaurenCard {...props}/>
         <div/>
        )
     }
}

- it is again returning a restaurencard component by adding promoted label to it

#### Body.js
const RestaurentCardPromoted = withPromotedLabel(restaurentCard)
- list.map((restaurent) => (
      <Link key={restaurent.info.id} to={"/restaurentmenu/"+restaurent.info.id}> 
      {
        restaurent.data.promoted ? <RestaurentCardPromoted resData={restaurent} /> :  <RestaurentCard  resData={restaurent} />
      }
      
       
       </Link>
