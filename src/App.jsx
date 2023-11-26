



// import {useState} from 'react';

// export default function App(){
//   let [counter, setCounter] = useState(0); // state variable

//   return(
//     <>
//     <h1 style={{color: counter > 0 ? "green" : "red"}}>
//       Counter = {counter} 
//     </h1>
//     <button onClick={() => setCounter(counter + 1)}>Increment</button>
//     <button
//       disabled={counter > 0 ? false : true}
//       onClick={() => setCounter(counter - 1)}
//      >
//       Decrement
//     </button>
//     </>
//   )
// }



// import {useState} from 'react';

// export default function App(){
//   let [counter, setCounter] = useState(0); // state variable

//   const increment = () => {
//     setCounter(counter + 1); // state update (2 in 1)
//   }

//   const decrement = () => {
//     if(counter > 0)
//       setCounter(counter - 1); // state update
//   }

//   return(
//     <>
//     <h1>Counter = {counter} </h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     </>
//   )
// }


// import {useState} from 'react';

// export default function App(){
//   let [counter, setCounter] = useState(0); // state variable

//   const increment = () => {
//     setCounter(counter + 1); // state update (2 in 1)
//   }

//   const decrement = () => {
//     if(counter > 0)
//       setCounter(counter - 1); // state update
//   }

//   return(
//     <>
//     <h1>Counter = {counter} </h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     </>
//   )
// }



// export default function App(){
//   let counter = 98;

//   const increment = () => {
//     counter = counter + 1;
//     // ui update
//     console.log(counter);
//   }

//   const decrement = () => {
//     counter = counter - 1;
//     console.log(counter);
//   }

//   return(
//     <>
//     <h1>Counter = {counter} </h1>
//     <button onClick={increment}>Increment</button>
//     <button onClick={decrement}>Decrement</button>
//     </>
//   )
// }






// export default function App(){
//   const submit = (name) => () => alert("Welcome " + name);

//   return(
//     <button onClick={submit("Ali")}>Submit</button>
//   )
// }


// export default function App(){
//   const submit = (name) => alert("Welcome " + name);


//   return(
//     <button onClick={() => submit("Ali")}>Submit</button>
//   )
// }



// export default function App(){
//   const submit = (name) => alert("Welcome " + name);

//   const temp = () => {
//     submit("Zubair");
//   }

//   return(
//     <button onClick={temp}>Submit</button>
//   )
// }



// export default function App(){
//   const submit = () => alert("Submit is clicked");

//   return(
//     <button onClick={submit}>Submit</button>
//   )
// }



// import React from "react";

// event handling
// export default function App() {

//   function myFunction() {
//     alert("Hello");
//   }

//   return (
//     <>
//       <h1>HTML DOM Events</h1>
//       <h2>The onclick Event</h2>

//       <p>
//         The onclick event triggers a function when an element is clicked on.
//       </p>
//       <p>Click to trigger a function that will output "Hello World":</p>

//       <button onClick={myFunction}>Click me</button>

//       <p id="demo"></p>
//     </>
//   );
// }

// onclick="myFunction()"
// 3 changes
// onclick={myFunction()}
// onclick={myFunction}
// onClick={myFunction}





// / Task1: object
export default function AppNov25StateAdv() {
    let [product, setProduct] = useState({
      id: 101,
      title: "Krunch Combo",
      desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
      image:
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-chicken-n-chips-2023-05-31115706.png",
      price: 520,
    });
 
    let [counter, setCounter] = useState(0);
    let [price, setPrice] = useState(0);
 
 
    const clickHandle=()=>{
     setCounter(++counter)
     setPrice(price+=product.price)
     
    }
 
 
    return (
     <>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Cart({counter} | Rs. {price}) </span>
          <button className="btn btn-primary me-5" onClick={()=>{
             setCounter(0)
             setPrice(0)
            }}>Reset</button>
          </div>
        </nav>
      <div className="container my-5">
 
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.image} className="card-img-top" alt={product.title} />
          <div className="card-body">
            <h5 className="card-title"> {product.title} </h5>
            <p className="card-text">{product.desc}</p>
            <h5>Rs. {product.price}</h5>
         
            <button className="btn btn-primary" onClick={clickHandle}>Add to Cart</button>
           
          </div>
        </div>
      </div>
      </>
    );
  }













//   export default function AppNov25StateAdv() {
//        let [images, setImages] = useState([
//          "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png",
//          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
//          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-HotWings_variant_0-2023-05-31115706.png",
//          "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png",
//          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png"
    
//        ]);
//        let [image , setImage] = useState(images[0])
    
       
    
    
//        return (
//         <div className="container">
//         <h1>Image Carousel</h1>
//         <div className="show"><img src={image} alt="" /></div>
//         <div className="widgets"> 
//         <button> - </button>
//         {images.map((i,k)=><button onClick={()=>{
//           setImage(i)
          
//             }}><img src={i} alt="" key={k} srcset="" /></button>)}
//         <button> + </button>
        
//          </div>
//         </div>
//        );
//      }