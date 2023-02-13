<template>
  <header class="text-slate-900 grid grid-cols-12">
    <RouterLink class="px-6 py-1 mx-2 col-start-3 col-end-5" to="/">
      <div class="flex items-center shrink-0">
        <h1 class="text-3xl">Vox DAO</h1>
      </div>
    </RouterLink>
    <RouterLink
      v-for="{url, title} in links"
      class="nav-btn"
      :to="url"
    >{{ title }}
    </RouterLink>
    <button
      class="nav-btn"
      @click="openModal"
    >
      {{ title }}
    </button>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  fetchEnsName,
  watchAccount,
} from '@wagmi/core'

import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useWalletStore } from '@/stores'

const { t } = useI18n()
const { web3modal } = useWalletStore()

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
