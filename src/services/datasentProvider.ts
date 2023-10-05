import { IProvider } from "@web3auth/base";
import { IWalletProvider } from "./walletProvider";
import { ApiPromise, HttpProvider, Keyring } from "@polkadot/api";
const { cryptoWaitReady, encodeAddress } = require("@polkadot/util-crypto");

const datasentProvider = (
  provider: IProvider,
  uiConsole: (...args: unknown[]) => void
): IWalletProvider => {
  //const getAccounts = async () => {
  // try {
  //   const web3 = new Web3(provider);
  //   const accounts = await web3.eth.getAccounts();
  //   uiConsole("Eth accounts", accounts);
  // } catch (error) {
  //   console.error("Error", error);
  //   uiConsole("error", error);
  // }
  //};

  //   const getBalance = async () => {
  //     try {
  //       const web3 = new Web3(provider);
  //       const accounts = await web3.eth.getAccounts();
  //       const balance = await web3.eth.getBalance(accounts[0]);
  //       uiConsole("Eth balance", balance);
  //     } catch (error) {
  //       console.error("Error", error);
  //       uiConsole("error", error);
  //     }
  //   };

  const getPrivateKey = async () => {
    try {
      return await provider.request({
        method: "private_key",
      });
    } catch (error) {
      return error as string;
    }
  };

  const getAccounts = async () => {
    try {
      let private_key = await getPrivateKey();
      console.log("Private key: ", private_key);

      await cryptoWaitReady();
      const keyring = new Keyring();
    //   const account = keyring.addFromUri(
    //     private_key,
    //     { name: "Alice Account" },
    //     "sr25519"
    //   );

    //   uiConsole("Eth accounts", account.address);
    } catch (error) {
      console.error("Error", error);
      uiConsole("error", error);
    }
  };

  const getBalance = async () => {
    // try {
    //   const provide = new HttpProvider(provider);
    //   const api = await ApiPromise.create({ provide });
    //   const balance = api.query.system.account(
    //     "5E4PRHREDEUjDkayYRaR2FVNYfFZYtrCfGQHWiRY9YaicSCD"
    //   );

    //   uiConsole("Eth balance", new BN(balance.data.free));
    // } catch (error) {
    //   console.error("Error", error);
    //   uiConsole("error", error);
    // }
  };

  const signMessage = async () => {
    // try {
    //   const web3 = new Web3(provider);
    //   const message = "Some string";
    //   const hash = web3.utils.sha3(message) as string;
    //   const fromAddress = (await web3.eth.getAccounts())[0];
    //   const sig = await web3.eth.personal.sign(hash, fromAddress, "");
    //   uiConsole("personal sign", sig);
    //   uiConsole("Eth sign message => true", sig);
    // } catch (error) {
    //   console.log("error", error);
    //   uiConsole("error", error);
    // }
  };

  const signAndSendTransaction = async () => {
    // try {
    //   const web3 = new Web3(provider as any);
    //   const accounts = await web3.eth.getAccounts();
    //   const txRes = await web3.eth.sendTransaction({
    //     from: accounts[0],
    //     to: accounts[0],
    //     value: web3.utils.toWei("0.01", "ether"),
    //   });
    //   uiConsole("txRes", txRes);
    // } catch (error) {
    //   console.log("error", error);
    //   uiConsole("error", error);
    // }
  };

  const signTransaction = async () => {
    // try {
    //   const web3 = new Web3(provider as any);
    //   const accounts = await web3.eth.getAccounts();
    //   // only supported with social logins (openlogin adapter)
    //   const txRes = await web3.eth.signTransaction({
    //     from: accounts[0],
    //     to: accounts[0],
    //     value: web3.utils.toWei("0.01", "ether"),
    //   });
    //   uiConsole("txRes", txRes);
    // } catch (error) {
    //   console.log("error", error);
    //   uiConsole("error", error);
    // }
  };
  return {
    getAccounts,
    getBalance,
    signMessage,
    signAndSendTransaction,
    signTransaction,
  };
};

export default datasentProvider;