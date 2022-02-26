import React from "react";
import laptop from '../assets/laptop.jpg'
import addcard from '../assets/add.png'

function Home()
{
    return(
        <div>
            <div className="add-to-card">

<img src={addcard}  />
            </div>
            <h1>Onlie Shopping</h1>
            <div className="card-container">
                <div className="img-cotaier item">
                    <img src={require('../assets/laptopEdit.jpg')}></img>
                </div>
                <div className="text-cotaier item">
                    <span>
                        Laptop
                    </span>
                    <span>
                    Price: $1000
                    </span>
                </div>
                <div className="btn-cotaier item">
                   <button>Add to Card</button>
                </div>
            </div>
        </div>
    )
}
export default Home;