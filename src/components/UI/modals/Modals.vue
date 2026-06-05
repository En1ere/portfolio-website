<script setup lang="ts">
import { onBeforeUnmount, onMounted, watch } from 'vue';
import { useModals } from '@/composables/useModals';

const { isAnyModalOpen, currentModalComponent, closeModal } = useModals();
let savedScrollY = 0;

const lockScroll = () => {
  savedScrollY = window.scrollY;

  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';
};

const unlockScroll = () => {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.width = '';
  document.body.style.overflow = '';

  window.scrollTo(0, savedScrollY);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isAnyModalOpen.value) {
    closeModal();
  }
};

const handleOverlayClick = () => {
  closeModal();
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  if (isAnyModalOpen.value) {
    lockScroll();
  }
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  unlockScroll();
});

watch(isAnyModalOpen, (isOpen) => {
  if (isOpen) {
    lockScroll();
    return;
  }

  unlockScroll();
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isAnyModalOpen"
        class="modals"
        @click="handleOverlayClick"
      >
        <div class="wrapper">
          <div
            class="modals__dialog"
            role="dialog"
            aria-modal="true"
            @click.stop
          >
            <button
              class="modals__close"
              type="button"
              aria-label="Close modal"
              @click="closeModal"
            >
              ×
            </button>

            <component
              :is="currentModalComponent"
              v-if="currentModalComponent"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modals {
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 24px;
  background: rgb(0 0 0 / 56%);
  display: flex;
  align-items: center;
  justify-content: center;

  &__dialog {
    overflow: auto;
    color: var(--color-text);
    background: var(--color-bg);
    max-height: 75vh;
    padding: 0 12px 0 0;
  }

  &__close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;

    &:hover {
      background: rgb(255 255 255 / 8%);
    }
  }
}

.wrapper {
  max-height: 85vh;
  width: min(100%, 720px);
  position: relative;
  padding: 48px 36px;
  overflow: hidden;
  border-radius: 40px;
  border: 0;
  box-shadow: 0 20px 60px rgb(0 0 0 / 35%);
  background: var(--color-bg);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-active .modals__dialog,
.modal-fade-leave-active .modals__dialog {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modals__dialog,
.modal-fade-leave-to .modals__dialog {
  opacity: 0;
  transform: translateY(8px) scale(0.98);
}
</style>
