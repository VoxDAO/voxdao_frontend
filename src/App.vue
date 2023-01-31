<script setup lang="ts">
import { RouterLink } from "vue-router";
import { configureChains, createClient, fetchEnsName, getAccount, watchAccount } from "@wagmi/core";
import { mainnet, polygon, arbitrum } from "@wagmi/core/chains";
import { Web3Modal } from "@web3modal/html";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { ref } from "vue";

const chains = [arbitrum, mainnet, polygon];

// Wagmi Core Client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "c97c09c9ab8e8cb07b774a20f1c6354a" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal and Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);
const web3modal = new Web3Modal(
  { projectId: "c97c09c9ab8e8cb07b774a20f1c6354a" },
  ethereumClient
);

web3modal.setTheme({
  themeMode: "light",
  themeBackground: "gradient",
});

function openModal() {
  web3modal.openModal();
}

const title = ref("Connect Wallet");

const unwatch = watchAccount(async account => {
  const prefixal = (address: string) => address.length >= 9 ? `${address.slice(0, 9)}...` : '';
  if (account.isConnected === true) {
    title.value = prefixal(account.address!)
    const ensName = await fetchEnsName({
      address: account.address!
    })
    title.value = ensName ?? prefixal(account.address!)
  } else {
    title.value = "Connect Wallet"
  }
});

</script>

<template>
  <header class="bg-slate-900 text-slate-50 sticky top-0 max-w-full">
    <div class="flex m-auto max-w-7xl">
      <RouterLink class="px-6 py-1 mx-2" to="/">
        <div class="flex items-center shrink-0">
          <h1 class="text-3xl">Vox DAO</h1>
        </div>
      </RouterLink>
      <div class="bg-slate-900 flex items-center grow justify-end">
        <nav class="max-lg:hidden text-center">
          <RouterLink class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold" to="/about">Join Us
          </RouterLink>
          <RouterLink class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold" to="/about">Leekers NFT
          </RouterLink>
          <RouterLink class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold" to="/about">Proposals
          </RouterLink>
          <RouterLink class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold" to="/about">Events
          </RouterLink>
          <button @click="openModal" class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold">{{
            title
          }}</button>
        </nav>
      </div>
    </div>
  </header>
  <section class="max-w-full h-screen bg-red-900">
    <div class="flex flex-col m-auto max-w-7xl h-full">
      <div class="h-1/2 flex justify-center items-center text-slate-200 text-5xl font-bold tracking-wider">
        Make cryptocurrency distributed again!
      </div>
      <div class="flex justify-center items-center">
        <button class="mx-10 px-6 py-3 bg-slate-200 font-bold">
          Whitpaper
        </button>
        <button class="mx-10 px-6 py-3 bg-slate-200 font-bold">
          Principles
        </button>
      </div>
    </div>
  </section>

  <div class="flex flex-col m-auto max-w-7xl min-h-full">
    <footer class="h-[50rem] flex items-center font-bold justify-center text-5xl">
      footer
    </footer>
  </div>
</template>
