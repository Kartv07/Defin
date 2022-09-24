import React, {useContext} from "react";
import {Loader} from './';
import imagess from '../../images/image.svg'
import { TransactionContext } from "../context/TransactionContext";


const Input = ({placeholder, name, type, value, handleChange}) => (
    <input 
        placeholder={placeholder}
        type = {type}
        step = "0.0001"
        value= {value}
        onChange = {(e) => handleChange(e, name)}
        className = "my-2 w-full rounded-full p-2 outline-none bg-transparent text-sm white-glassmorphism text-white details"
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message} = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message)
        {
            alert("Enter all the details")
            return;
        }
        sendTransaction();
    }
    
    return (
        <>
        <div className="flex flex-col w-full justify-center items-center" >
            <div className="flex flex-col items-start justify-between md:p-4 py-12 px-4">
                <div className= "flex md:flex-row flex-col justify-between md:p-20 py-12 px-4">
                    <div className="flex flex-1 justify-center flex-col md:mr-10">
                        <h1 className="text-7xl  font-bold text-white py-1 defi-heading">
                            DeFin
                        </h1>
                        <h4 className="text-2xl font-semibold  text-white py-1">One Stop Access to Etherum Transactions</h4>
                        <p className="text-white text-left mt-5 font-white md:w-9/12 w-11/12 text-base py-2">
                            <p>DeFin is a free, client-side interface that enables you to interact with the Ethereum blockchain. Owing to its feasibility and adaptability, our user friendly platform allows you to make transactions, lets you see the latest transactions and so much more.</p>
                        </p>
                        {!currentAccount && (
                            <button 
                                type="button"
                                onClick={
                                    connectWallet
                                }
                                
                                className="w-40 flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3
                                rounded-full cursor-pointer hover:bg-[#2546bd]"
                            >
                                <p className="text-white text-base font-semibold">Connect Wallet</p>
                            </button>
                        )}
                    </div>
                    <div className= "circles" ><img className="Page-img" src={imagess} alt="Go Borderless"></img></div>
                    
                </div>

                <br /><br /><br /><br />

                <div className="flex flex-row flex-1 items-center justify-between w-full md:mt-0 mt-10 " id="Transfer">
                    <div className="p-8 sm:w-96 w-full flex flex-col m-10 justify-start items-center blue-glassmorphism make_transaction" >
                        <h3 className="text-white font-bold text-3xl">Make Transaction</h3>
                        <p className="text-white my-2 w-full rounded-full p-2 outline-none bg-transparent text-sm white-glassmorphism details border-solid">{(currentAccount)}</p>
                        <Input placeholder="Receiver's Address" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword" name="keyword" type="text" handleChange={handleChange} />
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
                    <div className="Card flex flex-row text-white">
                        <div className="Card1 flex flex-col bg-black mx-2 w-45 cursor-pointer">
                            <div className="icon p-2 ">
                                <svg width="24" height="24" viewbox = "0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C14.651 12 16.8 9.85099 16.8 7.20002C16.8 4.54906 14.651 2.40002 12 2.40002C9.34903 2.40002 7.19999 4.54906 7.19999 7.20002C7.19999 9.85099 9.34903 12 12 12ZM15 7.20002C15 8.85688 13.6568 10.2 12 10.2C10.3431 10.2 8.99999 8.85688 8.99999 7.20002C8.99999 5.54317 10.3431 4.20002 12 4.20002C13.6568 4.20002 15 5.54317 15 7.20002Z" fill="#FFA800"></path>
                                <path d="M8.39999 13.8C5.91471 13.8 3.89999 15.8147 3.89999 18.3V20.7C3.89999 21.1971 4.30294 21.6 4.79999 21.6C5.29705 21.6 5.69999 21.1971 5.69999 20.7V18.3C5.69999 16.8089 6.90883 15.6 8.39999 15.6H15.6C17.0912 15.6 18.3 16.8089 18.3 18.3V20.7C18.3 21.1971 18.7029 21.6 19.2 21.6C19.697 21.6 20.1 21.1971 20.1 20.7V18.3C20.1 15.8147 18.0853 13.8 15.6 13.8H8.39999Z" fill="#FFA800"></path> 
                                </svg>
                            </div>
                            <div className="title">Private</div>
                            <div className="info text-base">There are no servers keeping user accounts or any kind of identifiers.</div>
                        </div>
                   
                        <div className="Card2 flex flex-col bg-black mx-2 cursor-pointer">
                            <div className="icon p-2 ">
                                <svg width="24" height="24" viewbox = "0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.6C17.3019 21.6 21.6 17.302 21.6 12C21.6 6.69809 17.3019 2.40002 12 2.40002C6.69806 2.40002 2.39999 6.69809 2.39999 12C2.39999 17.302 6.69806 21.6 12 21.6ZM16.8424 18.1152C15.5121 19.1701 13.8296 19.8 12 19.8C7.69217 19.8 4.19999 16.3078 4.19999 12C4.19999 10.1704 4.82994 8.4879 5.88478 7.1576L16.8424 18.1152ZM18.1152 16.8424L7.15757 5.88481C8.48787 4.82997 10.1704 4.20002 12 4.20002C16.3078 4.20002 19.8 7.6922 19.8 12C19.8 13.8297 19.17 15.5121 18.1152 16.8424Z" fill="#FFA800"></path>
                                </svg>
                             </div>
                            <div className="title">No Checks</div>
                            <div className="info text-base">The app doesn't involve any elements of traditional finance requiring identity checks.</div>    
                        </div>

                        <div className="Card3 flex flex-col bg-black mx-2 cursor-pointer">
                            <div className="icon p-2 ">
                                <svg width="24" height="24" viewbox = "0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.96069L16.3641 4.48031V9.51954L12 12.0392L7.6359 9.51954V4.48031L12 1.96069ZM12 4.03915L9.4359 5.51954V8.48031L12 9.96069L14.5641 8.48031V5.51954L12 4.03915Z" fill="#FFA800"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.9607L22.3641 14.4803V19.5196L18 22.0392L13.6359 19.5196V14.4803L18 11.9607ZM15.4359 15.5196V18.4803L18 19.9607L20.5641 18.4803V15.5196L18 14.0392L15.4359 15.5196Z" fill="#FFA800"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3641 14.4803L6 11.9607L1.63589 14.4803V19.5196L6 22.0392L10.3641 19.5196V14.4803ZM3.43589 18.4803V15.5196L6 14.0392L8.5641 15.5196V18.4803L6 19.9607L3.43589 18.4803Z" fill="#FFA800"></path>
                                </svg>

                            </div>
                            
                            <div className="title">Decentralized</div>
                            <div className="info text-base">Access and transact from anywhere at any time given there is internet.</div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </div>
       
        </>

    );
}

export default Welcome; 