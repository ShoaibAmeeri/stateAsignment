// /Task4: object
import React from "react";
import { useState } from "react";
import "./task4.css"
 function Task4() {
    let products = [
      {
        id: 101,
        title: "Krunch Combo",
        desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        price: 520,
      },
      {
        id: 102,
        title: "Zinger Stacker Combo",
        desc: "1 Zinger Stacker + 1 Regular fries + 1 Regular drink",
        image:
          "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png",
        price: 850,
      },
      {
        id: 103,
        title: "Twister Combo",
        desc: "Twister + 1 Regular fries + 1 Regular drink ",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
        price: 670,
      },
      {
        id: 104,
        title: "Family Festival 3",
        desc: "An ultimate meal for the fam. It includes 4 Zinger burgers",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png",
        price: 2520,
      },
      {
        id: 101,
        title: "Krunch Combo",
        desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
        image:
          "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        price: 520,
      },
    ];
  
    const [product, setProduct] = useState(products);
  
    // let count = 0
    let [counter, setCounter] = useState(0);
    let [total, setTotal] = useState(0);
    let [add, setadd] = useState(0);
  
    
  
    return (
    
      <>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Cart({counter} | Rs. {total}){" "}
            </span><button className="btn btn-primary" onClick={()=>{
              setCounter(0)
              setTotal(0)
            }}> Reset </button>
  
          </div>
        </nav>
        <div className="container my-5">
          {products.map((item, index) => (
            // console.log(item)
            <div className="card" key={index} style={{ width: "18rem" }}>
              <img
                src={item.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title"> {item.title} </h5>
                <p className="card-text">{item.desc}</p>
                <h5>Rs. {item.price}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setCounter(++counter);
                    setTotal(total + item.price);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  export default Task4