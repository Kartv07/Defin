import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';
import useFetch from '../utils/useFetch';

const shortenAddress = (currentAccount) => `${currentAccount.slice(0, 5)}...${currentAccount.slice(currentAccount.length - 4)}`

const TransactionCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {
    const gifUrl = useFetch({keyword})

    return (
        <div className="bg-[#000000] m-4 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            flex-col p-3 rounded-md hover:shadow-2xl">
                <div className="flex flex-col items-center w-full mt-3">
                    <div className="w-full mb-6 p-2">
                        <p className=" text-white text-base ">From Address:
                            <a href={`https://goerli.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer" className='text-cyan-400'>
                                     {shortenAddress(addressFrom)}
                            </a>
                        </p>
                        <p className=" text-white text-base ">To Address:
                            <a href={`https://goerli.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer" className='text-cyan-400'>
                                    {shortenAddress(addressTo)}
                            </a>
                        </p>
                        
                        <p className="text-white text-base ">
                            Amount: {amount}
                        </p>
                        <p className="text-white text-base ">
                            Message: {message}
                        </p>

                    </div>
                    {<img
                        src = {gifUrl}
                        alt = "Gif not found"
                        className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
                    ></img>}
                    
                    <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                        <p className="text-[#ffffff] font-bold">{timestamp}</p>
                    </div>
                </div>

        </div>
    )
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 ">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {
                    currentAccount ? (
                        <h1 className="text-white text-5xl text-center my-2 "><b>Latest Transaction</b></h1>
                        ) : (
                        <h2 className="text-white text-3xl text-center my-2">Connect your account to see latest transactions</h2>
                    )
                }

                <div className="flex flex-wrap justify-center items-center mt-10">
                    {
                        transactions.reverse().map((transaction, i) => (
                            <TransactionCard key = {i} {...transaction} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Transactions;