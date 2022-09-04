import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

const shortenAddress = (currentAccount) => `${currentAccount.slice(0, 5)}...${currentAccount.slice(currentAccount.length - 4)}`


const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 ">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {
                    currentAccount ? (
                        <div>
                            <h1 className="text-white text-5xl text-center my-2 " id="Transactions"><b>Latest Transaction</b></h1>
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
       
    );
}

export default Transactions;