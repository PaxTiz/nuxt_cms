<script lang="ts" setup>
const modelValue = defineModel<boolean>({ required: true });
</script>

<template>
  <div
    v-if="modelValue"
    class="w-full h-[200px] flex justify-center items-center"
  >
    <Icon name="lucide:loader" class="animate-spin w-[30px] h-[30px]" />
  </div>

  <slot v-else />
</template>
