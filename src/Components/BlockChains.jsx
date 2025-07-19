import React from 'react'

function BlockChains(props) {
  return (
    <>
      <div className='h-1/4 w-1/3 relative left-10 gap-2 flex'>
        <button onClick={props.clicker} className='text-black h-10 w-20 outline-none rounded-lg '>Solana</button>
        <button onClick={props.clicker} className='text-black h-10 w-20 outline-none rounded-lg'>Ethereum</button>
      </div>
    </>
  )
}

export default BlockChains;
