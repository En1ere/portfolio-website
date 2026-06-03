<script setup lang="ts">
import Icon from "@/components/UI/icons/Icon.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useLocale} from "@/composables/useLocale.ts";
const { t } = useLocale();
type SelectValue = string

interface Props {
  modelValue?: SelectValue
  list: SelectValue[]
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  placeholder: '...',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: SelectValue): void
}>()

const dropDownRoot = ref<HTMLElement | null>(null)
const isOpen = ref(false);
const toggle = () => isOpen.value = !isOpen.value;
const select = (item: SelectValue) => {
  emit('update:modelValue', item)
  isOpen.value = false;
}

const onClickOutside = (event: MouseEvent) => {
  const target = event.target as Node | null
  if (!dropDownRoot.value || !target) return

  if (!dropDownRoot.value.contains(target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<template>
  <div ref="dropDownRoot" class="drop-down-wrapper">
    <button
      type="button"
      class="ui-drop-down"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click="toggle"
    >
      {{ modelValue ? t(`filter.${modelValue}`) : placeholder }}
      <Icon :class="['ui-drop-down__icon', {'active': isOpen}]" name="IconArrowDown" />
    </button>
    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="list-wrapper"
        role="listbox"
      >
        <ul class="ui-drop-down__list">
          <li
            v-for="item in list"
            :key="item"
            class="ui-drop-down__option"
            role="option"
            :aria-selected="item === modelValue"
            @click="select(item)"
          >
            {{ t(`filter.${item}`) }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.drop-down-wrapper {
  position: relative;
  width: 100%;

  @media (min-width: $tabletBreakpoint) {
    min-width: 190px;
  }
}
.list-wrapper {
  position: absolute;
  top: 55px;
  background: #FFFFFF;
  border-radius: 24px;
  border: 0;
  width: 100%;
  transition: all 0.2s;
  padding: 16px 0;
  overflow: hidden;
  transform-origin: top;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scaleY(0);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: scaleY(1);
}

.ui-drop-down {
  width: 100%;
  min-height: 40px;
  padding: 4px 16px;
  border: 1px solid $color-bg;
  border-radius: 24px;
  background: #FFFFFF;
  color: $color-bg;
  display: flex;
  align-items: center;

  &__list {
    max-height: calc(32px + (39px * 3));
    overflow: auto;
  }
  &__option {
    color: $color-bg;
    padding: 8px 16px;
    transition: all 0.2s;

    &:hover {
      background: $color-bg;
      color: $main-white-color;
    }
  }
  &__icon {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    color: #667085;
    pointer-events: none;
    height: 20px;
    width: 20px;
    transition: all 0.2s;

    &.active {
      transform: translateY(-50%) rotate(180deg);
    }
  }
}
</style>
