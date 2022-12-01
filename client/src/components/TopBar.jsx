import logo from '../assets/dappback_logo.png';
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { useState } from 'react';
// import { Web3Modal } from "@web3modal/react";


const TopBar = (props) => {

  const [web3Address, setWeb3Address] = useState(null);

  
  async function openConnectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider =  new ethers.providers.Web3Provider(web3ModalInstance);
      setWeb3Address(web3ModalProvider);
      console.log(web3ModalProvider);
    } catch(e) {
      console.error(e)
    }
  }

  const disconnectWallet = () => {
    setWeb3Address(null)
}
  
  return (
    <div className="topbar-container">
      <div className="left-of-topbar">
        <img src={logo} alt='logo'/>
          <a href="https://partner.dappback.com/" target="_blank">
            <button>Create Free Web3 Loyalty Program</button>
          </a>
      </div>
      <div className="mid-of-topbar"></div>
      <div className="right-of-topbar">
        <ul>
          <li>Join & Learn</li>
          <li>Rewards</li>
          <li>
            {
              web3Address ?
              <button className="connect-wallet-button" onClick={disconnectWallet}>Connected</button> 
              :
              <button className="connect-wallet-button" onClick={openConnectWallet}>Connect Wallet</button> 

            }
          
          </li>
        </ul>
      </div>
    
    </div>
  )
}
export default TopBar;