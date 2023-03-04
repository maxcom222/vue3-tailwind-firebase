<template>
  <div class="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Forgot Password</h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white pb-8 pt-4 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-3" @submit.prevent="handleSubmit" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <p class="pt-1 text-right text-sm text-gray-600 sm:pl-24">
            Remembered Password?
            {{ ' ' }}
            <router-link :to="{ name: 'Login' }" class="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
              >Login
            </router-link>
          </p>
          <div>
            <button type="submit" class="mt-4 flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Loading class="h-5 w-5" v-if="loading" />
              Submit
            </button>
          </div>
          <div
            v-if="message.length > 0" class="`mt-4 p-4 rounded ${message.substr(0, 5) !== 'Email' ? 'bg-error' : 'bg-primary'}`">
            {{ message }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ref } from "vue";
import Loading from "@/components/Loading.vue";
export default {
  components: {
    Loading,
  },
  setup() {
    const auth = getAuth();

    const loading = ref(false);
    const message = ref("");

    const handleSubmit = async (e) => {
      loading.value = true;
      const { email } = e.target.elements;
      if (email.value.length > 0) {
        try {
          await sendPasswordResetEmail(auth, email.value);
          message.value = "Email sent on your registered email id";
        } catch (e) {
          message.value = e.message;
        }
      } else {
        message.value = "Enter Email Id";
      }
      loading.value = false;
    };
    return { handleSubmit, message, loading };
  },
};
</script>

