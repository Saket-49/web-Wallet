import React, { useState } from 'react';
import BlockChains from './BlockChains';
import SecretPhrase from './SecretPhrase';

function HomePage() {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick((prev) => !prev);
  };


  if (click) {
    return (
      <SecretPhrase/>
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