import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

//ethereum window object
const { ethereum } = window;

const getEThereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const TransactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  // console.log({
  //   provider,
  //   signer,
  //   TransactionsContract,
  // });
  return TransactionsContract;
};

export const TransactionProvider = ({ children }) => {
  //const [connectedAccount,setConnectedAccount]= useState(initialState);
  
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [transactionCount,setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);

  //updating data
  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTransactions= async () => {
    try {
        if (ethereum) {
          //const transactionsContract = createEthereumContract();
          // console.log("Make sure you have metamask!");
          // return;

        const transactionsContract = getEThereumContract();
        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        // console.log({availableTransactions});

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
        }else {
          console.log("Ethereum is not present");
        }
        
    }
    catch(err){
      console.log(err);
    }
  }

  const checkWallet = async () => {
    try {
      if (!ethereum) {
        alert("Please Install Metamask");
        return;
      }
      
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No eth object");
    }
  };

  const checkTransaction = async() => {
    try {
      const transactionsContract = getEThereumContract();
      const transactionsCount = await transactionsContract.getTransactionCount();

      window.localStorage.setItem("transactionCount",transactionsCount);
    }
    catch(error){
      console.log(error);
      throw new Error("No eth object");
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]); //connects the first acc
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("No eth object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        // return alert("Please install metamask");
      
      const { addressTo, amount, keyword, message } = formData;
      const transactionsContract = getEThereumContract();
      const parsedAmt = ethers.utils.parseEther(amount); //parsing dec to GWEI hex amt

      //sending eth 
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "",
            value: parsedAmt._hex,
          }
        ],
      });
      
      //storing the transaction information in the blockchain
      
      const transactionHash = await transactionsContract.addToBlockchain(addressTo,parsedAmt,message,keyword);

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      
      console.log(`Success - ${transactionHash.hash}`);
      setIsLoading(false);

      const transactionsCount = await transactionsContract.getTransactionCount();
      setTransactionCount(transactionsCount.toNumber());
      
      } 
    
    } catch (error) {
      console.log(error);
      throw new Error("No eth object");
    }
  };

  useEffect(() => {
    checkWallet();
    checkTransaction();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      // passing thru props here
      value={{
        connectWallet: connectWallet,
        currentAccount,
        formData,
        setformData,
        handleChange,
        sendTransaction,
        transactions,
        isLoading,
        transactionCount
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
