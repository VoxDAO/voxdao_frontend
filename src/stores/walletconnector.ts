import { ref } from "vue";
import { defineStore } from "pinia";
import { configureChains, createClient } from "@wagmi/core";
import {
  walletConnectProvider,
  modalConnectors,
  EthereumClient,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { mainnet } from "@wagmi/core/chains";

const chains = ref([mainnet]);

const { provider } = configureChains(chains.value, [
  walletConnectProvider({ projectId: "c97c09c9ab8e8cb07b774a20f1c6354a" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "VOXDAO", chains: chains.value }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains.value);
const web3modal = new Web3Modal(
  { projectId: "c97c09c9ab8e8cb07b774a20f1c6354a" },
  ethereumClient
);
web3modal.setTheme({
  themeMode: "light",
  themeBackground: "gradient",
});

export default defineStore("wallet", () => ({
  wagmiClient,
  ethereumClient,
  web3modal,
}));
