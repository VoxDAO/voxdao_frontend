/* eslint-disable no-param-reassign */
import { defineStore } from "pinia";
import { configureChains, createClient } from "@wagmi/core";
import { modalConnectors, EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { goerli, type Chain } from "@wagmi/core/chains";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";

const walletconnectProjectId = "c97c09c9ab8e8cb07b774a20f1c6354a";
const alchemyProviderApiKey = "lFMRROFLt_GqXfNzhtJt3MPIYj3LeUTL";

type Readonly<T> = {
  +readonly [P in keyof T]: T[P];
};
export interface WalletStoreState {
  chains: Chain[];
  wagmiClient: Readonly<ReturnType<typeof createClient>> | null;
  ethereumClient: EthereumClient | null;
  web3modal: Web3Modal | null;
}

export default defineStore({
  id: "wallet",
  state: (): WalletStoreState => ({
    chains: [goerli],
    wagmiClient: null,
    ethereumClient: null,
    web3modal: null,
  }),
  getters: {
    isWeb3Initialized(state): boolean {
      return !!state.web3modal;
    },
  },
  actions: {
    async initWeb3Wallet() {
      // use alchemary
      const { provider } = configureChains(this.chains, [
        alchemyProvider({ apiKey: alchemyProviderApiKey }),
      ]);

      this.wagmiClient = createClient({
        autoConnect: true,
        connectors: modalConnectors({
          appName: "VOXDAO",
          chains: this.chains,
        }),
        provider,
      }) as Readonly<ReturnType<typeof createClient>>;

      this.ethereumClient = new EthereumClient(this.wagmiClient, this.chains);

      const web3modal = new Web3Modal(
        { projectId: walletconnectProjectId },
        this.ethereumClient as EthereumClient
      );

      // await this.web3modal.connect();
      web3modal.setTheme({
        themeMode: "light",
        themeBackground: "gradient",
      });
      this.web3modal = web3modal;
    },
  },
});
