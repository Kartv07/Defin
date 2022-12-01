import React, { isValidElement, useContext , useState } from 'react';

import { TransactionContext } from '../context/TransactionContext';

const shortenAddress = (currentAccount) => `${currentAccount.slice(0, 5)}...${currentAccount.slice(currentAccount.length - 4)}`


const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    const [address, setAddress] = useState('');

    const [sentAmount, setAmount] = useState('');

    const [recieveAmount, setRecieveAmount] = useState('');

    const [isShown, setIsshown] = useState(false);

    const handleChange = (e)=>
    {
        setAddress(e.target.value);
    }

    
    const showTransaction = async () =>
    {
        let x = 0;
        let y = 0;
        setIsshown(true);

                transactions.map((transaction , i) =>
                {
                      
                
                if(transaction.addressTo === address)
                {
                    x +=transaction.amount;        
                }

                if(transaction.addressFrom === address)
                {
                    y +=transaction.amount;        
                }
                }) 

                setRecieveAmount(x);
                setAmount(y);



    }



    return (

        <>

        <div className="flex w-full justify-center items-center 2xl:px-10 ">
            <div className="flex flex-col md:p-5 py-5 px-4" id="Transactions">
                {
                    currentAccount ? (
                        <div>
                        <h1 className="text-white text-5xl text-center mb-5 "><b>Check Net transactions</b></h1>
                        <div className='flex flex-col mb-40 blue-glassmorphism search_bar'>
                            <div className="flex flex-row show_value p-6 w-full ">
                            
                            <input placeholder="Enter address" name="Search" type="text" className='my-2 w-full rounded-full p-2 outline-none bg-transparent text-sm white-glassmorphism text-white details' onChange={handleChange}/>
                            
                            <button className="text-white w-40 mt-2 mx-5 p-2 border-[#3d4f7c] rounded-full cursor-pointer bg-[#2952e3] hover:bg-[#2546bd]" onClick={showTransaction}> Search </button>
                            
                            </div>
                            
                            { isShown ?
                            (
                            <div className='flex flex-col justify-center items-center text-white'>
                                <div>
                                {(sentAmount || recieveAmount)? (
                                    <div>
                                    <div className='text-xl p-2'>Ethereum Sent : {sentAmount}</div>
                                    <div className='text-xl p-2'>Ethereum Received : {recieveAmount}</div>

                                    <div className='text-xl p-2 mb-4'> Net Amount : { Math.round((recieveAmount - sentAmount + Number.EPSILON) * 10000) / 10000 }</div>
                                    </div>
                                ) : (
                                    <div className='text-xl p-4'>No Transaction Found</div>
                                )}
                                </div>
                            </div>
                            ) :
                            ( <div></div>)
                            }    

                            
                        </div>
                            <h1 className="text-white text-5xl text-center my-2 " ><b>Latest Transaction</b></h1>
                            <div className='p-4 flex flex-col text-black  white-glassmorphism table'>
                                <div className='flex flex-col w-100 text-white'>
                                    <div className="heading border-2 p-2 m-2 rounded-full flex flex-row justify-around bg-white text-black font-bolder text-2xl">
                                            <p>AddressFrom</p>
                                            <p>AddressTo</p>
                                            <p>Timestamp</p>
                                            <p>Message</p>
                                            <p>Amount</p>
                                        
                                    </div>
                                
                                    
                                
                                {
                                    transactions.reverse().map((transaction, i) => (
                                        
                                            
                                            
                                        <div className='row border-2 p-2 m-2 rounded-full flex flex-row justify-around bg-white text-black font-bold text-2xl' >
                                                <a href={`https://goerli.etherscan.io/address/${transaction.addressFrom}`} target="_blank" rel="noopener noreferrer" className='text-cyan-400'>
                                                    {shortenAddress(transaction.addressFrom)}
                                                </a>
                                                <a href={`https://goerli.etherscan.io/address/${transaction.addressTo}`} target="_blank" rel="noopener noreferrer" className='text-cyan-400'>
                                                    {shortenAddress(transaction.addressTo)}
                                                </a>
                                                <p>{transaction.timestamp}</p>
                                                <p>{transaction.message}</p>
                                                <p>{transaction.amount}</p>   
                                        </div>
                                    ))
                                }
                                
                                </div>
                            </div>
                        </div>
                        ) : (
                        <h2 className="text-white text-3xl text-center my-2">Connect your account to see latest transactions</h2>
                    )   
                }
                
                    
                </div>
            </div>

            </>
       
    );
}

export default Transactions;