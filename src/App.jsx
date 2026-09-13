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


