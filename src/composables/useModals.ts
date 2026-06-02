import { computed, defineAsyncComponent, markRaw, readonly, ref } from 'vue';

type ModalName =
  | 'PrivacyPolicy'
  | 'TermsConditions';

const currentModal = ref<ModalName | null>(null);

const modalRegistry = {
  PrivacyPolicy: markRaw(defineAsyncComponent(() => import('@/components/modals/PrivacyPolicy.vue'))),
  TermsConditions: markRaw(defineAsyncComponent(() => import('@/components/modals/TermsConditions.vue'))),
} as const;

const isAnyModalOpen = computed(() => currentModal.value !== null);

const currentModalComponent = computed(() => {
  if (!currentModal.value) return null;
  return modalRegistry[currentModal.value] ?? null;
});

const openModal = (name: ModalName) => {
  currentModal.value = name;
};

const closeModal = () => {
  currentModal.value = null;
};

const toggleModal = (name: ModalName) => {
  currentModal.value = currentModal.value === name ? null : name;
};

const isModalOpen = (name: ModalName) => {
  return currentModal.value === name;
};

export const useModals = () => {
  return {
    currentModal: readonly(currentModal),
    currentModalComponent: readonly(currentModalComponent),
    isAnyModalOpen: readonly(isAnyModalOpen),
    openModal,
    closeModal,
    toggleModal,
    isModalOpen,
  };
};
