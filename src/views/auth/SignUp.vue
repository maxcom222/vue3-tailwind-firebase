<template>
  <div class="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create a new account</h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white pb-8 pt-4 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-3" @submit.prevent="handleSubmit" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" v-model="email" autocomplete="email" required="" class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p class="mt-0.5 text-error text-xs italic" v-show="!validEmail">
              Enter Valid Email
            </p>
          </div>
          <div>
            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-1">
              <input id="name" name="name" type="text" v-model="name" autocomplete="name" required="" class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="mt-1">
              <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="cpassword" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            <div class="mt-1">
              <input id="cpassword" name="cpassword" type="password" v-model="cpassword" autocomplete="current-password" required="" class="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            <p class="mt-0.5 text-error text-xs italic" v-show="!equalPassword">
              Password and Confirm Password doesn't match.
            </p>
          </div>

          <p class="pt-1 text-right text-sm text-gray-600 sm:pl-24">
            Already Signed Up?
            {{ ' ' }}
            <router-link :to="{ name: 'Login' }" class="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
              >Login
            </router-link>
          </p>
          <div>
            <button type="submit" class="mt-4 flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Loading class="h-5 w-5" v-if="loading" />
              Sign Up
            </button>
          </div>
          <div v-if="error.length > 0" class="mt-4 p-4 bg-error rounded">
            {{ error }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { reactive, toRefs, computed, ref } from "vue";
import Loading from "@/components/Loading.vue";
import { isValidEmail } from "@/helpers";

export default {
  name: "SignUp",
  components: {
    Loading,
  },
  setup() {
    const auth = getAuth();
    const router = useRouter();
    const showPassword = ref(false);

    const state = reactive({
      email: "",
      name: "",
      password: "",
      cpassword: "",
    });

    const loading = ref(false);
    const error = ref("");

    const validate = () => {
      if (
        !isValidEmail(state.email) ||
        state.name.length === 0 ||
        state.password.length < 6 ||
        state.password !== state.cpassword
      )
        return false;
      return true;
    };

    const equalPassword = computed(() =>
      state.cpassword.length > 0 ? state.password === state.cpassword : true
    );
    const validEmail = computed(() =>
      state.email.length > 1 ? isValidEmail(state.email) : true
    );

    const handleSubmit = async () => {
      loading.value = true;
      if (validate()) {
        try {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            state.email,
            state.password
          );
          await updateProfile(user, {
            name: state.name,
          });
          await router.replace({ name: "Profile" });
        } catch (e) {
          error.value = e.message;
        }
      } else {
        error.value =
          "Make sure your email id is valid, Display Name is present, Password is more than 5 characters and Password and Confirm Password are same";
      }
      loading.value = false;
    };

    return {
      showPassword,
      ...toRefs(state),
      equalPassword,
      validEmail,
      handleSubmit,
      loading,
      error,
    };
  },
};
</script>
