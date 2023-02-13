<template>
  <div class="flex flex-col items-center justify-start">
    <h1 class="text-5xl text-center font-bold py-32">Claim $VOX</h1>
    <template v-if="!isConnected">
      <p class="text-lg text-center text-slate-600 m-3">Please connect your wallet to verify your VOX NFT.</p>
      <div class="flex flex-row items-center justify-center m-5">
        <div class="p-3 text-center">10,000 $VOX per NFT</div>
        <div class="p-3 text-center">Current liquidity 10,000,000</div>
        <div class="p-3 text-center">Potential price: 0.002U</div>
      </div>
      <button class="connect-wallet-btn" @click="handleClickConnectWalletBtn">{{ t('labels.connectWallet') }}, {{ counterStore.count }}</button>
    </template>
    <template v-if="isConnected">
      <div class="w-[50%] grid grid-cols-5 grid-rows-2 gap-3 overflow-hidden">
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
        <div class="h-[200px] bg-slate-700 text-slate-200 text-center shrink-0">placeholder</div>
      </div>
      <div class="connect-wallet-btn">Claim $VOX</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore, useWalletStore } from '@/stores'
import { watchAccount } from '@wagmi/core'
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const counterStore = useCounterStore()
const { web3modal } = useWalletStore()

const { t } = useI18n()

const isConnected = ref(false)

watchAccount(async (account) => {
  isConnected.value = account.isConnected
})

function handleClickConnectWalletBtn() {
  web3modal.openModal()
}

onMounted(() => {
  counterStore.$subscribe((mutation, state) => {
    console.error({ mutation, state })
  })
})
onUnmounted(() => {
  counterStore.$dispose()
})
</script>