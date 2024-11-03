<script lang="ts" setup>
import Button from "~/components/admin/Button.vue";
import DataTable from "~/components/admin/DataTable.vue";
import IconButton from "~/components/admin/IconButton.vue";
import Select from "~/components/admin/Select.vue";
import LoadingView from "~/components/LoadingView.vue";

definePageMeta({ layout: "admin" });

const route = useRoute();
const collection = route.params.collection;

const { data: metadata } = await useFetch(
  `/api/collections/${collection}/__metadata`
);
if (!metadata.value) {
  throw createError({ statusCode: 404 });
}

const { data: results } = await useFetch(
  `/api/collections/${collection}/search`
);

const dataTableColumns = Object.keys(metadata.value.fields)
  .filter((e) => !!metadata.value.fields[e].views?.list)
  .map((e) => ({ key: e, header: metadata.value.fields[e].label ?? e }));

const collectionViewMode = ref<"all" | "draft" | "published">("all");
</script>

<template>
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-3xl font-bold text-primary">
      All {{ metadata.display.plural }}
    </h1>

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
      data-key="__id__"
      :columns="[...dataTableColumns, { key: 'actions' }]"
      :items="results.items"
      toggle-all
    >
      <template #actions>
        <div class="flex gap-2">
          <IconButton icon="lucide-pencil" size="small" flat />

          <IconButton
            icon="lucide-trash"
            size="small"
            class="text-red-500 hover:bg-red-500 hover:text-white"
            flat
          />
        </div>
      </template>
    </DataTable>
  </div>
</template>
