import React, { useState } from 'react'
import { generateKey } from '../keypairs';
import Interface from './Interface';

function SecretPhrase() {

    const changeHandler = (e) => {
        console.log(e.target.value);
    };

    const [click , setClick] = useState(false);

    const generateHandler = async(e)=>{
        const token = await generateKey()
        const { privkey58, pubkey58 } = token;
        setClick((prev)=> !prev);
    }
    if(click){
        return(
            <>
                <Interface/>
            </>
        )
    }

  return (
    <>
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
        <button className='h-10 w-1/6 ml-4 text-black text-sm rounded-lg outline-none border-transparent' onClick={generateHandler}>Generate Wallet</button>
      </div>
    </>
  )
}

export default SecretPhrase
