<script lang="ts" generic="T" setup>
import Pagination from "./Pagination.vue";

type DataTableColumn = {
  key: string;
  header: string;
  width?: string;
  alignment?: "left" | "center" | "right";
};

const props = defineProps<{
  dataKey: keyof T;
  items: Array<T>;
  columns: Array<DataTableColumn>;
  toggleAll?: boolean;
}>();

const currentPage = ref(1);
const selectedItems = ref<Array<T[keyof T]>>([]);

const toggleAllItems = () => {
  if (selectedItems.value.length !== props.items.length) {
    selectedItems.value = props.items.map((e) => e[props.dataKey]);
  } else {
    selectedItems.value = [];
  }
};
</script>

<template>
  <div
    class="w-full relative overflow-x-auto rounded-lg border-2 border-solid border-base"
  >
    <table class="w-full text-sm text-left bg-white rounded-lg">
      <thead
        class="bg-primary rounded-lg uppercase text-xs text-white font-bold"
      >
        <tr class="rounded-lg">
          <th v-if="toggleAll" class="w-[50px] text-center rounded-tl-lg">
            <input type="checkbox" @click="toggleAllItems" />
          </th>

          <th
            v-for="(column, index) in columns"
            :key="column.key"
            class="px-4 py-3 text-left"
            :class="{
              'rounded-tl-lg': index === 0 && !toggleAll,
              'rounded-tr-lg': index === columns.length - 1,
            }"
            :style="{ width: column.width }"
          >
            {{ column.header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, index) in items"
          :key="index"
          class="bg-white border-b-2 border-solid border-gray-100"
        >
          <td v-if="toggleAll" class="w-[50px] text-center">
            <input
              type="checkbox"
              v-model="selectedItems"
              :value="item[dataKey]"
            />
          </td>

          <td
            v-for="column in columns"
            :key="column.key"
            class="px-4 py-3"
            :class="`text-${column.alignment ?? 'left'}`"
          >
            <slot v-if="$slots[column.key]" :name="column.key" :data="item" />
            <template v-else>{{ item[column.key] }}</template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex justify-center w-full mt-4">
    <Pagination v-model="currentPage" :total="100" />
  </div>
</template>
