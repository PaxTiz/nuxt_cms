<script setup lang="ts">
const {
  text,
  icon,
  variant = 'primary',
  size = 'normal',
  link = false,
} = defineProps<{
  text: string;
  variant?: 'primary' | 'secondary' | 'alternate' | 'light' | 'outlined';
  size?: 'small' | 'normal' | 'large';
  to?: string;
  link?: boolean;
  icon?: string;
}>();
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="flex items-center gap-2 border-2 border-solid transition-all duration-300 cursor-pointer"
    :class="{
      'bg-primary text-white hover:bg-primary/90':
        variant === 'primary' && !link,
      'bg-secondary text-white hover:bg-secondary/90':
        variant === 'secondary' && !link,
      'bg-alternate text-white hover:bg-alternate/90':
        variant === 'alternate' && !link,
      'bg-light text-primary': variant === 'light' && !link,
      'bg-transparent border-primary text-primary':
        variant === 'outlined' && !link,

      'text-primary': variant === 'primary' && link,
      'text-secondary': variant === 'secondary' && link,
      'text-alternate': variant === 'alternate' && link,
      'text-light': variant === 'light' && link,

      'text-sm': size === 'normal',
      'text-xs': size === 'small',
      'text-lg': size === 'large',

      'hover:-translate-y-0.5 px-4 py-2 rounded-lg': !link,

      'border-none border-transparent': variant !== 'outlined' || link,
    }"
  >
    <Icon v-if="icon" :name="icon" />
    <span>{{ text }}</span>
  </component>
</template>
