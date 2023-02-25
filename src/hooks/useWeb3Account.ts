import { useWalletStore } from "@/stores";
import {
  watchAccount,
  type GetAccountResult,
  type Provider,
} from "@wagmi/core";
import { onMounted, ref } from "vue";

export function useWeb3Account() {
  const walletStore = useWalletStore();

  const isConnected = ref(false);
  const accountRef = ref<GetAccountResult<Provider> | null>(null);
  onMounted(async () => {
    if (!walletStore.isWeb3Initialized) {
      await walletStore.initWeb3Wallet();
    }
    watchAccount(async (account) => {
      accountRef.value = account;
      isConnected.value = account.isConnected;
    });
  });

  return {
    isConnected,
    account: accountRef,
  };
}
