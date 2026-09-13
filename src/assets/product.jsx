// import React from 'react'

// function Product() {
//   return (
//     <div>
//       <h2>iphone 17 pro max</h2>
//       <p>Price: 250000</p>
//       <button>Buy Now</button>
//     </div>
//   )
// }

// export default Product


// import React from 'react'

// function Product() {
//   const productName = 'Laptop';
//   const price = 80000;

//   return (
//     <>
//     <h2>{productName}</h2>
//     <p>price: RS. {price}</p>
//     <button>Add to Cart</button>
//     </>
//   )
// }

// export default Product

import React from 'react'

function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>price: ${props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product


