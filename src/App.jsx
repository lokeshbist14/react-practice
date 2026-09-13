 //1--> JSX stands for JavaScript XML.
    // JSX allows us to write HTML-like syntax inside JavaScript

// import { useEffect, useState } from "react";

// const { useEffect } = require("react");


// import React from 'react'

// function App() {
//   return (
//     <h1>Hello World</h1>
//   )
// }

// export default App



// 2--> Imagine when we want to create a heading, paragraph, and button with JSX
// it is easy to understand because the UI structure looks similar to HTML

// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>My Website</h1>
//       <p>Welcome to my website.</p>
//       <button>Click Me</button>
//     </div>
//   )
// }

// export default App



// 3--> JavaScript with JSX
// One of the most important features of JSX is that we can put JavaScript ex[ressions inside {}

// import React from 'react'

// function App() {
//   const name = "John"
//   return <h1>Hello {name}</h1>;
// }

// export default App

//4--> Variables
// import React from 'react'

// function App() {
//   const age = 22;
//   return <h1>My age is {age}</h1>;
// }

// export default App


//5--> Calculation
// import React from 'react'

// function App() {
//   const price = 500;
//   const quantity = 3;
//   return <p>Total: {price * quantity}</p>;
// }

// export default App


// 6--> Function
// import React from 'react'

// function App() {
//   function greet() {
//     return "Hello World"
//   }
//   return <h1>{greet()}</h1>
// }

// export default App


// 7.JSX with Condition

// import React from 'react'

// function App() {
//   const isLogin = false;
// return(
//   <div>
//     {isLogin ? <h1>Welcome!</h1> : <h1>Please Login</h1>}
//   </div>
// )
// }

// export default App



// 8.JSX with multiple element

// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>Welcome</p>
//     </div>
//   );
// }

// export default App


// 9.Real world example
// Amazon Product

// import React from 'react'
// import Product from './Product'

// function App() {
//   return (
//     <div>
//       <Product/>
//     </div>
//   )
// }

// export default App



// Props
// Props are to pass data from parents component to child components

// import React from 'react'
// import Profile from './Profile'

// function App() {
//   return (
//     <div>
//       <Profile name = "Ram" age = {22}/>
//       <Profile name = "Shyam" age = {23}/>
//       <Profile name = "Sita" age = {24}/>
//     </div>
//   )
// }

// export default App


// Destructuring Props

// function Profile({name, age}) {
//   return (
//     <>
//     <h2>{name}</h2>
//     <p>Age : {age}</p>
//     </>
//   )
// }


// Real Wrold Example : Product Card

// import React from 'react'
// import Product from './Product'

// function App() {
//   return (
//     <div>
//       <Product name = "iphone 17 pro max" price = {1999} />
//       <Product name = "Samsung S24 Ultra" price = {1899} />
//       <Product name = "MacBook Air" price = {1499} />
//     </div>
//   );
// }

// export default App



// State is a data that React components stores and manage itself. 

// import React, { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count : {count}</h1>    

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button>
//     </div>
//   );
// }

// export default App

// 1.State with a numbers

// import React, { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <button onClick={() => setCount(count - 1)}>
//         Decrease
//       </button>

//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   )
// }

// export default App


// 2.State with a String

// import {useState} from 'react'

// function App() {
//   const [name, setName] = useState("Ram");
  
//   return (
//     <div>
//       <h1>Hello {name}</h1>

//       <button onClick={() => setName("Shyam")}>
//         Change Name
//       </button>
//     </div>
//   );
// }

// export default App


// 3.State with Boolean

// import React, { useState } from 'react'

// function App() {
//   const [isVisible, setIsVisible] = useState(true);

//   return (
//     <div>
//       {isVisible && <h1>Hello Ram</h1>}

//       <button onClick={() => setIsVisible(!isVisible)}>
//         Show / Hide 
//         </button>    
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react'

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)}
//       placeholder='Enter Your Name' />    

//       <h1>Your name is {name}</h1>
//     </div>
//   )
// }

// export default App


// 5.State with a Form

// import React, { useState } from 'react'

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log(name);
//     console.log(email);
//   }
//   return (
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='Name' value={name}
//         onChange={(e) => setName(e.target.value)} />

//         <input type="text" placeholder='Email' value={email}
//         onChange={(e) => setEmail(e.target.value)} />

//         <button type='submit'>Submit</button>
//       </form>
//   )
// }

// export default App


// 6.State with an Array

// import React, { useState } from 'react'

// function App() {
//   const [fruits, setFruits] = useState(["Apple", "Banana"]);

//   return (
//     <div>
//       {fruits.map((fruit) => (
//         <p key={fruit}>{fruit}</p>
//       ))}    

//       <button onClick={() => setFruits([...fruits, "Mango",])}>
//         Add Mango
//       </button>
//       <button onClick={() => setFruits([...fruits, "Orange"])}>
//         Add Orange
//       </button>
//       <button onClick={() => setFruits([...fruits, "Pineapple"])}>
//         Add Pineapple
//       </button>

//     </div>
//   );
// }

// export default App


// 7.State with Object

// import React, { useState } from 'react'

// function App() {
//   const [user, setUser] = useState({
//     name:"Ram",
//     age: 22
//   });
//   return (
//     <div>
//      <h2>{user.name}</h2> 
//      <p>{user.age}</p>

//      <button onClick={() => setUser({...user, age: user.age + 1})}>
//       Increase Age
//      </button>
//     </div>
//   )
// }

// export default App



// useEffect

// import React from 'react'

// function App() {
//   useEffect(() => {
//     document.title = "My React";
//   }, []);

//   return (
// <h1>Hello Ram</h1>
//   )
// }

// export default App

// 1.useEffect with State

// import React from 'react'

// function App() {
//   useEffect(() => {
//     console.log("Hello useEffect");
//   }, []);
//   return <h1>Hello Ram</h1>
// }

// export default App


// 2.useEffect with multiple dependencies

// import React from 'react'

// function App() {
// const [name, setName] = useState("");
// const [age, setAge] = useState(20);
// useEffect(() => {
//   console.log("Name or age changed");
// }, [name, age]);

//   return (
//     <div>
//       <input
//       value={name} 
//       onChange={(e) => setName(e.target.value)}
//       placeholder="Name"/>

//       <button onClick={() => setAge(age + 1)}>
//         Age : {age}
//       </button>
//     </div>
//   )
// }

// export default App

// 3.useEffect for API calls

// import React from 'react'

// function App() {
//   const [users, setUser] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => {
//       setUser(data);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>

//       {users.map((user) => (
//         <p key = {user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default App


// 4.useEffect for browser title

// import React from 'react'

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default App


// 5.useEffect for Timer

// import React from 'react'

// function App() {
//   const [seconds, setSeconds] = useState(0);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds((previous) => previous + 1);
//     }, 2000);
//   return () => {
//     clearInterval(timer);
//   };
// }, []);

// return <h1>Seconds: {seconds}</h1>
// }

// export default App




