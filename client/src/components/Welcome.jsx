import React, {useContext} from "react";
import {Loader} from './';

import { TransactionContext } from "../context/TransactionContext";

const Input = ({placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder}
        type = {type}
        step = "0.0001"
        value= {value}
        onChange = {(e) => handleChange(e, name)}
        className = "my-2 w-full rounded-full p-2 outline-none bg-transparent border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message} = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message)
            return;
        
        sendTransaction();
    }

    const shortenAddress = (address) => `${address.slice(0, 10)}...${address.slice(address.length - 10)}`

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        Crypto and Twitter?
                    </h1>
                    <p className="text-white text-left mt-5 font-white md:w-9/12 w-11/12 text-base">
                        Explore the world of crypto with a peculiar concept integrating crypto with your favourite social media at <b>Twiss</b>
                    </p>
                    {!currentAccount && (
                        <button 
                            type="button"
                            onClick={connectWallet}
                            className="w-40 flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3
                            rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            <p className="text-white text-base font-semibold">Connet Wallet</p>
                        </button>
                    )}
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <p className="text-white "><b>Your Address: </b>{shortenAddress(currentAccount)}</p>
                        <Input placeholder="Receiver's Address" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Tweet Keyword" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />

                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-40 mt-2 p-2 border-[#3d4f7c] rounded-full cursor-pointer bg-[#2952e3] hover:bg-[#2546bd]" 
                            >
                                Send
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Welcome; 