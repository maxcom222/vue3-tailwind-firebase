<template>
  <div class="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ ' ' }}
        <router-link :to="{ name: 'SignUp' }" class="font-medium text-indigo-600 hover:text-indigo-500"
          >Create a new account
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmit" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required="" class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-2">
              <input id="password" name="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" required="" class="px-2 lock w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div class="text-sm">
              <router-link :to="{ name: 'ForgotPassword' }" class="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
                >Forgot Password?
              </router-link>
            </div>
          </div>

          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Loading class="h-5 w-5" v-if="loading" />
              Sign in
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-3">
            <div>
              <button class="inline-flex w-full justify-center rounded-md bg-white py-2 px-4 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
                <span class="sr-only">Sign in with Google</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> </svg>  
              </button>
            </div>
          </div>
        </div>
        <div v-if="error.length > 0" class="mt-4 p-4 bg-error rounded">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Loading from "@/components/Loading.vue";
import { isValidEmail } from "@/helpers";

import { notify } from "notiwind"

export default {
  components: {
    Loading,
  },
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const showPassword = ref(false);

    const loading = ref(false);
    const error = ref("");

    const handleSubmit = async (e) => {
      loading.value = true;
      const { email, password } = e.target.elements;
      if (
        email.value.length > 0 &&
        password.value.length > 0 &&
        isValidEmail(email.value)
      ) {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          notify({
            title: "Success",
            text: "You are logged in successfully.",
            type: "success",
            group: "app",
          }, 3000)
          await router.replace({ name: "Home" });
        } catch (e) {
          error.value = e.message;
        }
      } else {
        error.value = "Enter valid Email and Password";
      }
      loading.value = false;
    };

    const googleSignUp = async () => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      try {
        const result = await signInWithPopup(auth, provider);
        GoogleAuthProvider.credentialFromResult(result);
        router.replace({ name: "Home" });
      } catch (e) {
        error.value = e.message;
      }
    };
    return { showPassword, handleSubmit, googleSignUp, error, loading };
  },
};
</script>

