<template>
    <div class="w-full">
      <form class="" @submit.prevent="handleSubmit" method="POST">
        <div>
          <h1 class="md:text-3xl sm:text-base font-semibold leading-10 text-gray-900">Application</h1>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">PLEASE TELL US ABOUT YOURSELF</p>
        </div>
        <div class="mt-4">
          <label for="fullname" class="block text-sm font-medium leading-6 text-gray-900">Your Full Name</label>
          <div class="relative">
            <input type="text" name="fullname" id="fullname" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Current Address</label>
          <div class="relative">
            <input type="text" name="address" id="address" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-10 mt-4">
          <div>
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number </label>
            <div class="relative">
              <input type="text" name="phone" id="phone" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
          <div class="ml-5">
            <label for="besttime" class="block text-sm font-medium leading-6 text-gray-900"> Best time to reach you ?</label>
            <div class="relative">
              <input type="text" name="besttime" id="besttime" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-5">
          <div class="mt-4">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="relative">
              <input type="text" name="city" id="city" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
          <div class="mt-4">
            <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State</label>
            <div class="relative">
              <input type="text" name="state" id="state" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
          <div class="mt-4">
            <label for="zip" class="block text-sm font-medium leading-6 text-gray-900">Zip</label>
            <div class="relative">
              <input type="text" name="zip" id="zip" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-10">
          <div class="mt-4">
            <label for="marry" class="block text-sm font-medium leading-6 text-gray-900">Are you married</label>
            <div class="relative">
              <input type="text" name="marry" id="marry" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
          <div class="mt-4">
            <label for="kid" class="block text-sm font-medium leading-6 text-gray-900">Do you have Kids</label>
            <div class="relative">
              <input type="text" name="kid" id="kid" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-10">
          <div class="mt-4">
            <label for="pet" class="block text-sm font-medium leading-6 text-gray-900">Do you have a pet</label>
            <div class="relative">
              <input type="text" name="pet" id="pet" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
          <div class="mt-4">
            <label for="car" class="block text-sm font-medium leading-6 text-gray-900">Do you have a car</label>
            <div class="relative">
              <input type="text" name="car" id="car" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
              <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <label for="occupation" class="block text-sm font-medium leading-6 text-gray-900">Occupation</label>
          <div class="relative">
            <input type="text" name="occupation" id="occupation" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="people_cnt" class="block text-sm font-medium leading-6 text-gray-900">How many people will be living in the house</label>
          <div class="relative">
            <input type="text" name="people_cnt" id="people_cnt" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="reason_leaving" class="block text-sm font-medium leading-6 text-gray-900">Reasons for Leaving present home</label>
          <div class="relative">
            <input type="text" name="reason_leaving" id="reason_leaving" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="long_lease" class="block text-sm font-medium leading-6 text-gray-900">How long lease are you looking for</label>
          <div class="relative">
            <input type="text" name="long_lease" id="long_lease" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="intend_moving" class="block text-sm font-medium leading-6 text-gray-900">How soon do you intend moving in</label>
          <div class="relative">
            <input type="text" name="intend_moving" id="intend_moving" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="date_birth" class="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
          <div class="relative">
            <input type="text" name="date_birth" id="date_birth" placeholder="0000-00-00" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="num_car" class="block text-sm font-medium leading-6 text-gray-900">Numbers of Cars</label>
          <div class="relative">
            <input type="text" name="num_car" id="num_car" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="picture" class="block text-sm font-medium leading-6 text-gray-900">A picture of occupant</label>
          <div class="relative">
            <input type="text" name="picture" id="picture" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="payment" class="block text-sm font-medium leading-6 text-gray-900">How soon you make the payment</label>
          <div class="relative">
            <input type="text" name="payment" id="payment" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="receive_keys" class="block text-sm font-medium leading-6 text-gray-900">How soon do you want to receive the keys/ documents</label>
          <div class="relative">
            <input type="text" name="receive_keys" id="receive_keys" class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-3">
          <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <Loading class="h-5 w-5" v-if="loading" />
                Submit
              </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  
  import Loading from "@/components/Loading.vue";
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  
  import { db } from "@/firebase";
  import { collection, addDoc } from "firebase/firestore";
  
  import { notify } from "notiwind";
  
  import moment from 'moment'

  export default {
    components: {
      Loading,
    },
    setup(props) {
      const router = useRouter();
  
      const loading = ref(false);
      const error = ref("");
  
      const handleSubmit = async (e) => {
        loading.value = true;
        const elements = e.target.elements;
        if (fullname.value.length > 0 && address.value.length > 0 && phone.value.length > 0) {
          try {
            const colRef = collection(db, 'applications')
            let document = {createdAt: moment(new Date()).format("YYYY-MM-DD HH:mm:ss")};
            for (const element of elements) {
              const key = element.getAttribute("name");
              if (key) document[key] = element.value;
            }
            await addDoc(colRef, document)
            await router.push({ name: 'Success', params: { text: "Successfully Submitted!" } });
          } catch (e) {
            error.value = e.message;
            console.error("err", e.message);
          }
        } else {
            notify({
              title: "Error",
              text: "Full Name, Address, Phone Number are required fields.",
              type: "error",
              group: "app",
            }, 3000);
        }
        loading.value = false;
      };
  
      return {handleSubmit, loading, error}
    }
  }
  </script>