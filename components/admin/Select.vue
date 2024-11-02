<script setup generic="T extends string" lang="ts">
import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "radix-vue";

const modelValue = defineModel<T>();

defineProps<{ items: Array<{ label: string; value: T }>; width?: string }>();
</script>

<template>
  <div :style="{ width }">
    <SelectRoot v-model="modelValue">
      <SelectTrigger
        class="w-full border-2 border-solid border-base text-primary bg-white inline-flex items-center justify-between rounded-lg px-[15px] leading-none h-[40px] gap-[5px] outline-none"
        aria-label="Customise options"
      >
        <SelectValue placeholder="Select a fruit..." />
        <Icon name="lucide:chevron-down" class="h-3.5 w-3.5" />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="w-full bg-white border-2 border-solid border-base text-primary rounded-lg z-[100] max-h-[200px] overflow-y-scroll"
          :style="{ width }"
          position="popper"
          :side-offset="5"
        >
          <SelectViewport class="p-[5px]">
            <SelectItem
              v-for="option in items"
              :key="option.value"
              class="text-sm leading-none rounded-lg flex items-center h-[30px] pr-[35px] pl-[25px] relative select-none focus-visible:outline-none cursor-pointer"
              :value="option.value"
            >
              <SelectItemIndicator
                class="absolute left-0 w-[25px] inline-flex items-center justify-center"
              >
                <Icon name="lucide:check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option.label }}
              </SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
