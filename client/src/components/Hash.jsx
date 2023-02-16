import Web3 from "web3";
import { useState } from "react";

var web3 = new Web3( "https://mainnet.infura.io/v3/9ba7d3f2f43f4b28b0e6a9303b5517e4");


const Hash = () => {
  const [hashTable, setHashTable] = useState([]);
  const [transactionHash, setTransactionHash] = useState([]);
  const [isShown, setIsShown] = useState(false);

    const handleChange = (e) => {
    setTransactionHash(e.target.value);
  }
  const showTransaction = () =>{
    setIsShown(true);
    web3.eth.getTransaction(transactionHash, function (error, result) {
      console.log(result);
        setHashTable(result);
      });
  }

  const reset = () =>{
    location.reload();
  }

  return (
    <>
        <div className="flex w-full justify-center items-center 2xl:px-10 ">
            <div className="flex flex-col md:p-5 py-5 px-4" id="Transactions">
                {<div>
                        <h1 className="text-white text-5xl text-center mb-5 mt-2 "><b>Get Your Transactions Details</b></h1>
                        <div className='flex flex-col mb-20 blue-glassmorphism search_bar'>
                            <div className="flex flex-row show_value p-6 w-full ">
                            
                            <input placeholder="Enter Any Transaction Hash" name="Search" type="text" className='my-2 w-full rounded-full p-2 outline-none bg-transparent text-sm white-glassmorphism text-white details' onChange={handleChange}/>
                            
                            <button className="text-white w-40 mt-2 mx-5 p-2 border-[#3d4f7c] rounded-full cursor-pointer bg-[#2952e3] hover:bg-[#2546bd]" onClick={showTransaction}> Search </button>
                            <button className="text-white w-40 mt-2 mx-5 p-2 border-[#3d4f7c] rounded-full cursor-pointer bg-[#2952e3] hover:bg-[#2546bd]" onClick={reset}> Reset </button>
                            
                            </div>
                            
                            { isShown ?
                            (
                            <div className='flex flex-col justify-center items-center text-white'>
                              <div>
                              <div className='text-xl p-2'>Block Hash : {hashTable.blockHash}</div>
                              <div className='text-xl p-2'>Block Number : {hashTable.blockNumber}</div>
                              <div className='text-xl p-2'>From Account : {hashTable.from}</div>
                              <div className='text-xl p-2'>To Account : {hashTable.to}</div>
                              <div className='text-xl p-2'>Transfered Eth : {hashTable.value}</div>
                              </div>
                               
                            </div>
                            ) :
                            ( <div></div>)
                            }    
                           
                          </div>
                  </div>
                }

            </div>
          </div>                
    </>
  );
};


export default Hash;
