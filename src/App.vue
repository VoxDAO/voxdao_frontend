<template>
    <div class="grid overflow-y-hidden">
        <header class="text-slate-900 sticky top-0 max-w-full">
            <div class="flex m-auto max-w-7xl">
                <RouterLink class="px-6 py-1 mx-2" to="/">
                    <div class="flex items-center shrink-0">
                        <h1 class="text-3xl">Vox DAO</h1>
                    </div>
                </RouterLink>
                <div class="flex items-center grow justify-end">
                    <nav class="max-lg:hidden text-center">
                        <RouterLink
                            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
                            to="/"
                        >{{ t('buttons.homePage') }}
                        </RouterLink>
                        <RouterLink
                            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
                            to="/about"
                        >{{ t('buttons.voxWorld') }}
                        </RouterLink>
                        <RouterLink
                            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
                            to="/about"
                        >{{ t('buttons.mintNFT') }}
                        </RouterLink>
                        <RouterLink
                            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
                            to="/nft-finance"
                        >{{ t('buttons.nftFinance') }}
                        </RouterLink>
                        <RouterLink
                            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
                            to="/citizen-forum"
                        > {{ t('buttons.citizenForum') }}
                        </RouterLink>
                        <RouterLink
                            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
                            to="/event-plaza"
                        >{{ t('buttons.eventPlaza') }}
                        </RouterLink>
                        <button
                            class="hover:bg-slate-700 px-6 py-2 mx-1 hover:rounded-full font-bold"
                            @click="openModal"
                        >
                            {{ title }}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
</script>
