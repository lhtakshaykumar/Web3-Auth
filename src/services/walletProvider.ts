import { IProvider } from "@web3auth/base";
import ethProvider from "./ethProvider";
import solanaProvider from "./solanaProvider";
import tezosProvider  from "./tezosProvider";
import datasentProvider from "./datasentProvider";

export interface IWalletProvider {
  getAccounts: () => Promise<any>;
  getBalance: () => Promise<any>;
  signAndSendTransaction: () => Promise<void>;
  signTransaction: () => Promise<void>;
  signMessage: () => Promise<void>;
}

export const getWalletProvider = (chain: string, provider: IProvider, uiConsole: any): IWalletProvider => {
  if (chain === "solana") {
    return solanaProvider(provider, uiConsole);
  } else if (chain === "tezos") {
    return tezosProvider(provider, uiConsole);
  }
  else if (chain === "datasent"){
    return datasentProvider(provider, uiConsole);
  }
  return datasentProvider(provider, uiConsole);
};
