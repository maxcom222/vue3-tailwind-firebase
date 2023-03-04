<template>
	<div v-if="loading" class="grid place-items-center h-screen">
    <Loading class="h-16 w-16" />
  </div>
	<div class="w-full px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Application List</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all application including their full name, phone and address.</p>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Full Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Phone</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Address</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">City</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">State</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="(one, ind) in list" :key="++ind" :class="ind % 2 === 0 ? undefined : 'bg-gray-50'">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ one.fullname }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ one.phone }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ one.address }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ one.city }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ one.state }}</td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
										<router-link :to="{ name: 'ViewForm', params: { doc_id: one.id } }" class="text-indigo-600 hover:text-indigo-900">View</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Loading from "@/components/Loading.vue";
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  
  import { db } from "@/firebase";
  import { query, collection, getDocs, where, orderBy } from "firebase/firestore";
	const router = useRouter();
	const loading = ref(false);
	let list = [];
	const loadingApplication = async() => {
		const colRef = collection(db, 'applications')
		loading.value = true;
		const querySnap = await getDocs(query(colRef, orderBy('createdAt', 'desc')));
		querySnap.forEach((doc) => {
			list.push({...doc.data(), id: doc.id})
		})
		loading.value = false;
	}
	loadingApplication();
</script>