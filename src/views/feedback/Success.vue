<template>
  <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
    <div>
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <CheckIcon class="h-10 w-10 text-green-600" aria-hidden="true" />
      </div>
      <div class="mt-3 text-center sm:mt-5">
        <h3 class="sm:text-3xl font-semibold leading-6 text-gray-900">{{ text }}</h3>
        <!-- <div class="mt-2">
          <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
        </div> -->
      </div>
    </div>
    <div class="mt-1 sm:mt-2">
      <button type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="router.replace({ name: 'Home' })">Go back home</button>
    </div>
  </main>
</template>

<script setup>

import { useRouter } from "vue-router";
import { CheckIcon } from '@heroicons/vue/24/outline'

defineProps(['text'])
const router = useRouter();

</script>