<template>
  <div class="grid grid-cols-12 min-h-full">
    <h1 class="col-start-5 col-end-8 text-5xl text-center">Claim $VOX</h1>
    <p class="col-start-5 col-end-8 text-lg text-center">Please connect your wallet to verify your VOX NFT.</p>
    <template v-if="!isConnected">
      <div class="col-start-4 col-end-9">
        <div class="">10,000 $VOX per NFT</div>
        <div class="">Current liquidity 10,000,000</div>
        <div class="">Potential price: 0.002U</div>
      </div>
      <button class="col-start-5 col-end-8">{{ t('labels.connectWallet') }}</button>
    </template>
    <template v-if="isConnected">
      Connected
    </template>
  </div>
</template>

<script setup lang="ts">
import { watchAccount } from '@wagmi/core'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isConnected = ref(false)
watchAccount(async (account) => {
  isConnected.value = account.isConnected
})
</script>