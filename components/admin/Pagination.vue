<script setup lang="ts">
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from "radix-vue";

const modelValue = defineModel<number>({ required: true });
defineProps<{ total: number }>();
</script>

<template>
  <PaginationRoot
    v-model="modelValue"
    :total="total"
    :sibling-count="1"
    :default-page="modelValue"
  >
    <PaginationList
      v-slot="{ items }"
      class="flex items-center gap-1 text-primary"
    >
      <PaginationFirst
        class="w-9 h-9 text-primary disabled:opacity-50 flex items-center justify-center focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"
      >
        <Icon name="lucide:chevrons-left" />
      </PaginationFirst>

      <PaginationPrev
        class="w-9 h-9 text-primary disabled:opacity-50 flex items-center justify-center mr-4 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"
      >
        <Icon name="lucide:chevron-left" />
      </PaginationPrev>

      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          class="w-9 h-9 border-2 border-solid border-base rounded-lg bg-white data-[selected]:bg-primary data-[selected]:shadow data-[selected]:text-white hover:shadow transition focus-within:outline focus-within:outline-1 focus-within:outline-offset-1"
          :value="page.value"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="w-9 h-9 flex items-center justify-center"
        >
          &#8230;
        </PaginationEllipsis>
      </template>

      <PaginationNext
        class="w-9 h-9 disabled:opacity-50 flex items-center justify-center ml-4 focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"
      >
        <Icon name="lucide:chevron-right" />
      </PaginationNext>

      <PaginationLast
        class="w-9 h-9 disabled:opacity-50 flex items-center justify-center focus-within:outline focus-within:outline-1 focus-within:outline-offset-1 rounded"
      >
        <Icon name="lucide:chevrons-right" />
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
