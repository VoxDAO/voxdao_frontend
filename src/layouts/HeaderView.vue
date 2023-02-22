<template>
  <header class="navbar">
    <RouterLink class="logo" to="/">
      <div class="flex items-center shrink-0">
        <h1 class="text-3xl">Vox DAO</h1>
      </div>
    </RouterLink>
    <p class="menu-toggle" @click="toggleMenu"></p>

    <div :class="isMenuOpen ? 'menu-open menu' : 'menu'">
      <RouterLink
        v-for="{ url, title } in links"
        :key="title"
        :to="url"
        class="sm:nav-btn"
        >{{ title }}
      </RouterLink>
      <button class="sm:nav-btn" @click="openModal">
        {{ title }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { fetchEnsName, watchAccount } from "@wagmi/core";

import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useWalletStore } from "@/stores";

const { t } = useI18n();
const { web3modal } = useWalletStore();

function openModal() {
  web3modal.openModal();
}

const isMenuOpen = ref(false);
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

const title = ref(t("labels.connectWallet"));
watchAccount(async (account) => {
  const prefixal = (address: string) =>
    address.length >= 9 ? `${address.slice(0, 9)}...` : "";
  if (account.isConnected === true && account.address) {
    title.value = prefixal(account.address);
    const ensName = await fetchEnsName({
      address: account.address,
    });
    title.value = ensName ?? prefixal(account.address);
  } else {
    title.value = t("labels.connectWallet");
  }
});

const links = ref([
  {
    title: t("buttons.homePage"),
    url: "/",
  },
  {
    title: t("buttons.voxWorld"),
    url: "/vox-world",
  },
  {
    title: t("buttons.mintNFT"),
    url: "/mint-nft",
  },
  {
    title: t("buttons.nftFinance"),
    url: "/nft-finance",
  },
  {
    title: t("buttons.citizenForum"),
    url: "/citizen-forum",
  },
  {
    title: t("buttons.eventPlaza"),
    url: "/event-plaza",
  },
]);
</script>

<style lang="scss">
.navbar {
  position: sticky;
  height: 68px;
  top: 0;
  background: #e67171;
  display: flex;
  align-items: center;

  .logo {
    flex-grow: 1;
  }

  .menu-toggle {
    width: 38px;
    height: 38px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.menu {
  grid-auto-flow: row;
  display: none;
}

.menu-open {
  position: absolute;
  top: 100%;
  height: calc(100vh - 68px) !important;
  right: 0;
  left: 0;
  background: red;
  display: grid;
}
</style>
