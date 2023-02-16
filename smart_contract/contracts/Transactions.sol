pragma solidity ^0.8.0;

contract Transactions {
    uint transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword ) public {
        transactionCount += 1;
        //adding transaction to the array
        transactions.push(TransferStruct( msg.sender, receiver, amount, message, block.timestamp, keyword));

        // making the transaction
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory){
        return transactions;
    }

    function getTransactionCount() public view returns (uint){
        return transactionCount;
    }
}
