import { IProvider } from "@web3auth/base";
import Web3 from "web3";
import { IWalletProvider } from "./walletProvider";

const ethProvider = (provider: IProvider, uiConsole: (...args: unknown[]) => void): IWalletProvider => {
  const getAccounts = async () => {
    try {
      console.log("abc", provider)
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();  
      uiConsole("Eth accounts", accounts);
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const getBalance = async () => {
    try {
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      uiConsole("Eth balance", balance);
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const signMessage = async () => {
    try {
      const web3 = new Web3(provider);
      const message = "Some string";
      const hash = web3.utils.sha3(message) as string;
      const fromAddress = (await web3.eth.getAccounts())[0];
      const sig = await web3.eth.personal.sign(hash, fromAddress, "");
      uiConsole("personal sign", sig);
      uiConsole("Eth sign message => true", sig);
    } catch (error) {
      console.log("error", error);
      uiConsole("error", error);
    }
  };

  const signAndSendTransaction = async () => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      const txRes = await web3.eth.sendTransaction({
        from: accounts[0],
        to: accounts[0],
        value: web3.utils.toWei("0.01", "ether"),
      });
      uiConsole("txRes", txRes);
    } catch (error) {
      console.log("error", error);
      uiConsole("error", error);
    }
  };

  const signTransaction = async () => {
    try {
      const web3 = new Web3(provider as any);
      const accounts = await web3.eth.getAccounts();
      // only supported with social logins (openlogin adapter)
      const txRes = await web3.eth.signTransaction({
        from: accounts[0],
        to: accounts[0],
        value: web3.utils.toWei("0.01", "ether"),
      });
      uiConsole("txRes", txRes);
    } catch (error) {
      console.log("error", error);
      uiConsole("error", error);
    }
  };
  return { getAccounts, getBalance, signMessage, signAndSendTransaction, signTransaction };
};

export default ethProvider;
