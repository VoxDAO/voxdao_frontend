<template>
  <header class="text-slate-900 grid grid-cols-12">
    <RouterLink class="px-6 py-1 mx-2 col-start-3 col-end-5" to="/">
      <div class="flex items-center shrink-0">
        <h1 class="text-3xl">Vox DAO</h1>
      </div>
    </RouterLink>
    <RouterLink
      v-for="{url, title} in links"
      class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full hover:text-slate-200 font-bold duration-200"
      :to="url"
    >{{ title }}
    </RouterLink>
    <button
      class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full hover:text-slate-200 font-bold"
      @click="openModal"
    >
      {{ title }}
    </button>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  configureChains,
  createClient,
  fetchEnsName,
  watchAccount,
} from '@wagmi/core'
import { mainnet, polygon, arbitrum } from '@wagmi/core/chains'
import { Web3Modal } from '@web3modal/html'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const chains = [arbitrum, mainnet, polygon]

// Wagmi Core Client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: 'c97c09c9ab8e8cb07b774a20f1c6354a' }),
])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'VOXDAO', chains }),
  provider,
})

// Web3Modal and Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains)
const web3modal = new Web3Modal(
  { projectId: 'c97c09c9ab8e8cb07b774a20f1c6354a' },
  ethereumClient,
)

web3modal.setTheme({
  themeMode: 'light',
  themeBackground: 'gradient',
})

function openModal() {
  web3modal.openModal()
}

const title = ref(t('labels.connectWallet'))

watchAccount(async (account) => {
  const prefixal = (address: string) => (address.length >= 9 ? `${address.slice(0, 9)}...` : '')
  if (account.isConnected === true && account.address) {
    title.value = prefixal(account.address)
    const ensName = await fetchEnsName({
      address: account.address,
    })
    title.value = ensName ?? prefixal(account.address)
  } else {
    title.value = t('labels.connectWallet')
  }
})

const links = ref([
  {
    title: t('buttons.homePage'),
    url: '/',
  },
  {
    title: t('buttons.voxWorld'),
    url: '/about',
  },
  {
    title: t('buttons.mintNFT'),
    url: '/about',
  },
  {
    title: t('buttons.nftFinance'),
    url: '/nft-finance',
  },
  {
    title: t('buttons.citizenForum'),
    url: '/citizen-forum',
  },
  {
    title: t('buttons.eventPlaza'),
    url: '/event-plaza',
  },
])
</script>
