<template>
  <header class="navbar">
    <RouterLink class="logo" to="/">
      <div class="flex items-center shrink-0">
        <h1 class="text-3xl">Vox DAO</h1>
      </div>
    </RouterLink>
    <div ref="toggleMenuBtn" class="menu-toggle" @click="toggleMenu">
      <font-awesome-icon
        :icon="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
      />
    </div>
    <div :class="isMenuOpen ? 'menu-open menu' : 'menu'">
      <RouterLink
        v-for="{ url, title } in links"
        :key="title"
        :to="url"
        class="menu-item"
        @click="closeMenu"
        >{{ title }}
      </RouterLink>
      <button class="menu-item connect-wallet-btn" @click="openModal">
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

const toggleMenuBtn = ref<HTMLDivElement | null>(null);
const isMenuOpen = ref(false);
function toggleMenu() {
  console.error({ di: toggleMenuBtn?.value?.style });
  if (toggleMenuBtn?.value?.getAttribute("display") === "none") {
    isMenuOpen.value = false;
    return;
  }
  isMenuOpen.value = !isMenuOpen.value;
}

// default set to true as we think in mobile first.
const isToggleMenuBtnAvailable = ref(true);

function closeMenu() {
  if (isToggleMenuBtnAvailable.value === true) {
    isMenuOpen.value = false;
  }
}

window
  .matchMedia("(min-width: 870px)")
  .addEventListener("change", ({ matches }) => {
    if (matches === true) {
      isMenuOpen.value = false;
    }
    isToggleMenuBtnAvailable.value = matches === false;
  });
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
$layout-breakpoint-small: 870px;

.navbar {
  padding: 0 10px;
  position: sticky;
  height: 68px;
  top: 0;
  display: flex;
  align-items: center;
  background: #fff;

  .logo {
    flex-grow: 1;

    @media (min-width: $layout-breakpoint-small) {
      flex-grow: 0;
    }
  }

  .menu-toggle {
    width: 28px;
    height: 28px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: $layout-breakpoint-small) {
      display: none;
    }
  }

  .menu {
    grid-auto-flow: row;
    display: none;

    @media (min-width: $layout-breakpoint-small) {
      display: grid;
      grid-template-columns: 12;
      grid-auto-flow: column;
      place-content: flex-end;
      flex-grow: 1;
      margin-left: 20px;
    }

    .menu-item {
      @media (min-width: $layout-breakpoint-small) {
        padding: 8px;
      }
    }
  }

  .menu-open {
    position: absolute;
    top: 100%;
    height: calc(100vh - 68px) !important;
    right: 0;
    left: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    place-items: flex-start;

    .menu-item {
      width: 100%;
      padding: 20px 10px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: bold;

      @media (min-width: $layout-breakpoint-small) {
        padding: 0;
      }
    }

    .connect-wallet-btn {
      color: green;
      justify-content: center;
    }
  }
}
</style>
