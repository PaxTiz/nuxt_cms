<script setup lang="ts">
const {
  icon,
  to,
  size = 'normal',
} = defineProps<{
  to?: string;
  icon: string;
  size: 'small' | 'normal';
  flat?: boolean;
}>();
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="flex justify-center items-center rounded-lg text-primary transition-all duration-300 cursor-pointer"
    :class="{
      'w-[40px] h-[40px]': size === 'normal',
      'w-[30px] h-[30px]': size === 'small',
      'border-2 border-solid border-base bg-white': !flat,
    }"
  >
    <Icon
      :name="icon"
      :class="{ 'text-lg': size === 'normal', 'text-xs': size === 'small' }"
    />
  </component>
</template>
