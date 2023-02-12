import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
// import dummyData from "../utils/dummyData";
import { shortAdd } from "../utils/shortAdd";
// import useFetch from "../hooks/useFetch";

const TransactionCard = ({
  addressTo,
  addressFrom,
  message,
  keyword,
  timestamp,
  amount,
  url,
}) => {
  // const gifUrl = useFetch({ keyword });

  return (
    <div className="glass_transaction" id="transactions">
      {/* <img src={gifUrl || url} alt="gif" className="gif" /> */}
      <div className="flex">
        <a
          href={`https://ropsten.etherscan.io/address/${addressFrom}`}
          target="_blank"
          rel="noreferrer"
          className="text_dec"
        >
          <h3 className="text1">From : {shortAdd(addressFrom)}</h3>
        </a>
        <a
          href={`https://ropsten.etherscan.io/address/${addressTo}`}
          target="_blank"
          rel="noreferrer"
          className="text_dec"
        >
          <h3 className="text1">To : {shortAdd(addressTo)}</h3>
        </a>
        <h3 className="text1">Amount : {amount} ETH</h3>
        {message && (
          <>
            <br />
            <p className="text1">Message: {message}</p>
          </>
        )}

        <p className="text3">{timestamp}</p>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="box">
      <div className="transactions">
        {currentAccount ? (
          <h2 className="text_t">Latest Transactions</h2>
        ) : (
          <h2 className="text_t">Connect your account</h2>
        )}
      </div>
      <div className="transactions">
        {transactions.reverse().map((transaction, i) => (
          <TransactionCard key={i} {...transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;
