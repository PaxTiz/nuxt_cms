<script setup generic="T" lang="ts">
const modelValue = defineModel<T>();
defineProps<{ items: Array<{ label: string; value: T }> }>();
</script>

<template>
  <div
    class="flex items-center justify-center gap-1 w-fit p-1 border-solid border-2 border-base rounded-lg h-[40px] bg-white"
  >
    <button
      v-for="(item, index) in items"
      :key="index"
      class="cursor-pointer text-sm px-2 py-1 rounded-lg"
      :class="{
        'bg-primary text-white': modelValue === item.value,
      }"
      @click="modelValue = item.value"
    >
      {{ item.label }}
    </button>
  </div>
</template>
