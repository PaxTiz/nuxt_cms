<script lang="ts" setup>
import Button from "~/components/admin/Button.vue";
import IconButton from "~/components/admin/IconButton.vue";
import InputText from "~/components/admin/InputText.vue";

const searchQuery = ref();

const { data } = useFetch("/api/collections/system");
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-white border-b-2 border-solid border-base">
      <header class="w-[80%] mx-auto flex items-center gap-10 bg-white py-2">
        <div class="w-[200px]">
          <img
            src="https://develop.anteno.fr/_ipx/s_270x86/images/logo-anteno.svg"
            width="100"
          />
        </div>

        <div class="flex justify-between items-center flex-1 w-full">
          <nav>
            <InputText
              v-model="searchQuery"
              placeholder="Click to search in all content"
              icon-right="lucide:search"
              class="w-[300px]"
            />
          </nav>

          <div>
            <IconButton icon="lucide:user" />
          </div>
        </div>
      </header>
    </div>

    <main class="flex gap-10 w-[80%] mx-auto py-8">
      <div class="w-[200px] text-primary">
        <ul>
          <li>
            <Button text="Home" to="/admin" icon="lucide:home" link />
          </li>

          <li
            v-for="collection in data ?? []"
            :key="collection.name"
            class="mt-4"
          >
            <Button
              :text="collection.display.plural"
              :to="`/admin/${collection.name}`"
              :icon="collection.display.icon"
              link
            />
          </li>
        </ul>

        <div class="w-full h-[2px] bg-gray-200 my-4"></div>
      </div>

      <div class="flex-1 w-full">
        <slot />
      </div>
    </main>
  </div>
</template>
