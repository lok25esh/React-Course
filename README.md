# React-Course
## Reat Hooks 
-Normal JS Function 
-There are 2 imp hooks 
-1 useState()  -- super pwerful react state varible  also called utility variable 
- inorder to this variable you need to import it first 
-You can import this by using named import 
-import {useState} from "react";
-Why we are importing like this because some react developer used named export on react hook

### Steps in using useState()

#### step 1
- You can create it by 
- let [resObj] = useState();  this is state variable 
- let resObj; this is normal variable
#### step 2 
-So in use state function we pass a default values 
let [resObj] = useState([]); State variable 
let resObj =[]; Normal variable

#### step 3 
-as we passed nothing as default value we do not get anything on the UI 
- so pass the data in the function 
- const[resObj] = useState([
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
])
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
-useState() can only be used inside a functional component or a custom hook.

-Your code has useState([]) outside of the Body component, which is not allowed in React

#### step 5 
-Inorder to modify the variable which scecond parameter in this array which is nothing but a function i.e setresObj which modifies  it you 
-cannot modify as a normal variable 
- So in onclick property we are updating our list this list has to be passed to setList which will update our original list 

#### Note 
-Never useState outside of your componenet 
-Keep it on the top 
- dont use it inside if else/Lopps/functions  

This complete process is called RENDER 


- 2 useEffect()
-the use of this hook is to re render our page 
-it first give the skeleton of our page that means first our body component will be printed and then it fetches the data by making a api call 
-useEffect takes 2 parameters one is callback function and two is array data 
- Every time a component is rendered a useEffect hook is called 
- If there is no dependency array useEffect is called on every componenent render 
- if there is empty dependency array then use Effect is called only on intial render only once 
- if there is dependency array ie btn when ever btn chancges then use Effect is called 

# React Router 

## install 
- npm install react-router-dom
- 