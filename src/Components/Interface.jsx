import React, { useRef, useState } from 'react'

function Interface(props) {
    const arr = [
        {
            id:1,
            title:"Wallet"
        }   
    ]

    const count = useRef(0)
    function walletCountHandler(){

        count.current++;
        console.log(count.current)
    }

    const copyHandler = (e) => {
        const text = e.target.textContent;
        navigator.clipboard.writeText(text);
        console.log('Copied:', text);
    };

  return (
    <div className='h-2/3'>
        <div className='h-28 w-4/5 relative left-32 flex items-center pl-10 font-myFont font-light border-gray-400 border-0.5 border-opacity-20 border-solid rounded-lg'>
            <h1>Your Secret Phrase</h1>
        </div>
        <div  className='h-28 w-4/5 relative   left-32 flex items-center pl-10 font-myFont justify-between font-light'>
            <h1 className="  font-myFont">Wallet</h1>
            <div className=' flex gap-4'>
                <button className='text-black h-9 rounded-lg w-28 outline-none border-none'>Add Wallet</button>
                <button className='text-white bg-red-800 h-9 rounded-lg w-28 outline-none  border-none'>Clear Wallets</button>
            </div>
        </div>


        <div className='h-1/2 w-4/5 relative left-32 flex-col items-center  font-myFont font-light border-gray-400 border-0.5 border-opacity-20 border-solid rounded-lg'>
            <h1 className='mt-3 pl-10'> Wallet 'Count'</h1>

            <div className='mt-8 bg-gray-500 w-full h-full bg-opacity-35 border-1 border-t rounded-lg pl-10'>
                <h2 className='mb-4'>Public Key</h2>
                <h4 className='font-thin text-opacity-50 text-gray-400' onClick={copyHandler} >{props.wallet.pubkey58}</h4>
                <br />
                <br />
                <h2 className='mb-4'>Private Key</h2>
                <h4 className='font-thin text-opacity-50 text-gray-400' onClick={copyHandler} >{props.wallet.privkey58}</h4>
                
            </div>
            
            
        </div>
            
    </div>
  )
}

export default Interface
