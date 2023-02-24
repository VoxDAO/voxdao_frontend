import { ref } from "vue";
import { defineStore } from "pinia";
import { configureChains, createClient } from "@wagmi/core";
import { modalConnectors, EthereumClient } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";
import { goerli } from "@wagmi/core/chains";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";

const chains = ref([goerli]);

const walletconnectProjectId = "c97c09c9ab8e8cb07b774a20f1c6354a";
const alchemyProviderApiKey = "lFMRROFLt_GqXfNzhtJt3MPIYj3LeUTL";
console.time();
// use alchemary
const { provider } = configureChains(chains.value, [
  alchemyProvider({ apiKey: alchemyProviderApiKey }),
]);
console.timeLog();
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "VOXDAO", chains: chains.value }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains.value);
const web3modal = new Web3Modal(
  { projectId: walletconnectProjectId },
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
