<script setup lang="ts">
const { type = 'text' } = defineProps<{
  type?: 'text' | 'password';
  placeholder?: string;
  iconLeft?: string;
  iconRight?: string;
}>();

const modelValue = defineModel<string>();

const isFocused = ref(false);
</script>

<template>
  <div
    class="flex items-center gap-2 relative border-2 border-solid border-base h-[40px] rounded-lg p-2 bg-white"
    :class="{ 'border-primary': isFocused }"
  >
    <Icon v-if="iconLeft" :name="iconLeft" class="text-gray-400" />

    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="text-sm focus:outline-none rounded-lg text-gray-500 w-full"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <Icon v-if="iconRight" :name="iconRight" class="text-gray-400" />
  </div>
</template>
