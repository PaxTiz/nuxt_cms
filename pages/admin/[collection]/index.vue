<script lang="ts" setup>
import Button from "~/components/admin/Button.vue";
import DataTable from "~/components/admin/DataTable.vue";
import Select from "~/components/admin/Select.vue";

definePageMeta({ layout: "admin" });

const route = useRoute();
const collection = route.params.collection;

const collectionViewMode = ref<"all" | "draft" | "published">("all");
</script>

<template>
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-3xl font-bold text-primary">All {{ collection }}</h1>

    <div class="flex gap-4">
      <Select
        v-model="collectionViewMode"
        width="200px"
        :items="[
          { label: 'All', value: 'all' },
          { label: 'Draft', value: 'draft' },
          { label: 'Published', value: 'published' },
        ]"
      />

      <Button
        text="Add item"
        :to="`/admin/${collection}/new`"
        icon="lucide:plus"
      />
    </div>
  </div>

  <div>
    <DataTable
      data-key="path"
      :columns="[
        { key: 'path', header: 'Path', width: '200px' },
        { key: 'title', header: 'Title' },
        { key: 'actions', header: '', alignment: 'right', width: '100px' },
      ]"
      :items="[
        { path: '/', title: 'Home' },
        { path: '/about', title: 'About' },
        { path: '/contact', title: 'Contact' },
      ]"
      toggle-all
    >
      <template #actions>
        <UIconButton
          icon="lucide-trash"
          size="small"
          class="text-red-500 hover:bg-red-500 hover:text-white"
          flat
        />
      </template>
    </DataTable>
  </div>
</template>
