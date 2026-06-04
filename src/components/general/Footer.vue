<script setup lang="ts">
  import { computed } from "vue";
  import { socials } from "@/types/constants/socials.ts";
  import Icon from "@/components/UI/icons/Icon.vue";
  import UIButton from "@/components/UI/button/UIButton.vue";
  import { useModals } from "@/composables/useModals.ts";
  import { useLocale } from "@/composables/useLocale.ts";
  const { t } = useLocale()

  const getYear = computed(() => new Date().getFullYear())
  const appVersion = `v.${import.meta.env.PACKAGE_VERSION}`

  const { openModal } = useModals();
</script>

<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="footer__socials">
        <a
          class="footer__social-item"
          v-for="social in socials"
          :key="social.id"
          :href="social.id === 2 ? `mailto:${social.link}` : social.link"
          target="_blank"
        >
          <Icon
            color="#292F36"
            :name="social.icon"
          />
        </a>
      </div>
      <div class="wrapper">
        <p class="footer__copyright">
          <span>
            © {{ getYear }} {{ t('name_full') }}
          </span>
          <span>
            {{t('copyright')}}
          </span>
        </p>
        <div class="footer__privacy">
          <UIButton
            variant="empty"
            @click="openModal('PrivacyPolicy')"
          >
            {{ t('privacy') }}
          </UIButton>
          <UIButton
            variant="empty"
            @click="openModal('TermsConditions')"
          >
            {{ t('terms') }}
          </UIButton>
        </div>
      </div>
      <div class="footer__version">
        {{ appVersion }}
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
  .footer-wrapper {
    background: #1A1E23;
    width: 100%;
    padding: 0 24px;
  }

  .footer {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 24px 0;
    border-top: 1px solid #43454D;

    @media (min-width: $desktop-breakpoint) {
      flex-direction: row-reverse;
      gap: 8px;
      padding: 24px 126px;
    }

    &__socials {
      display: flex;
      flex-wrap: nowrap;
      gap: 32px;
    }

    &__social-item {
      width: 32px;
      min-width: 32px;
      height: 32px;
      min-height: 32px;
      background: $brand-color-second;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 0;
      padding: 8px;
    }

    &__copyright {
      text-align: center;
      white-space: nowrap;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: $tablet-breakpoint) {
        flex-direction: row;
        gap: 8px;
      }
    }

    &__privacy {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 32px;
    }

    &__version {
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translate(50%, -30%);
      font-size: 12px;
      color: $brand-color;

      @media (min-width: $tablet-breakpoint) {
        transform: translate(50%, 0);
        bottom: 9%;
        right: 50%;
      }

      @media (min-width: $desktop-breakpoint) {
        transform: translate(0, 0);
        right: 0;
        bottom: 43%;
      }
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media (min-width: $tablet-breakpoint) {
      flex-direction: row;
    }
  }
</style>
