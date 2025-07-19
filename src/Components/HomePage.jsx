import React, { useState } from 'react';
import BlockChains from './BlockChains';

function HomePage() {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((prev) => !prev);
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
  };

  if (click) {
    return (
      <div className="h-4/6 w-full border-b-2 border-gray-400">
        <h1 className="font-myFont font-thin relative top-10 left-10 ">
          Secret Recovery Phrase
        </h1>
        <h3 className="font-myFont text-gray-500 font-thin relative top-10 left-10 mb-14">Save these words in a safe place.</h3>
        <input placeholder="Enter your secret phrase"
          type="text"
          onChange={changeHandler}
          
          className="border border-gray-500 p-2 ml-10 text-black rounded-lg w-3/4 bg-transparent outline-none "
        />
        <button className='h-10 w-40 ml-4 text-black text-sm rounded-lg outline-none border-transparent'>Generate Wallet</button>
      </div>
    );
  }

  return (
    <div className="h-4/6 w-full border-b-2 border-gray-400">
      <h1 className="font-myFont font-thin relative top-10 left-10 mb-14">
        Batua supports multiple Blockchains
      </h1>
      <BlockChains clicker={clickHandler} />
    </div>
  );
}

export default HomePage;