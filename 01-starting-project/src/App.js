import React, {Fragment, useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CardProvider from "./Store/CardProvider";

function App() {
  const [cartIsShown , setCartIsShown] = useState(false)
  // const [onOpening , setOnOpening] = useState()

  const showCartHandler = () =>{
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
    
  }

  return (
    <CardProvider>
      {cartIsShown ? <Cart onClosing={hideCartHandler}/> : '' }
      <Header onOpening={showCartHandler}  />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
