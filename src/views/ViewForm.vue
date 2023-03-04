<template>
    <div class="w-full">
      <div>
        <h1 class="md:text-3xl sm:text-base font-semibold leading-10 text-gray-900">Application</h1>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">PLEASE TELL US ABOUT YOURSELF</p>
      </div>
      <div class="mt-4">
        <label for="fullname" class="block text-sm font-medium leading-6 text-gray-900">Your Full Name</label>
        <div class="relative">
          <input type="text" name="fullname" v-model="data.fullname" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Current Address</label>
        <div class="relative">
          <input type="text" name="address" v-model="data.address" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10 mt-4">
        <div>
          <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone Number </label>
          <div class="relative">
            <input type="text" name="phone" v-model="data.phone" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="ml-5">
          <label for="besttime" class="block text-sm font-medium leading-6 text-gray-900"> Best time to reach you ?</label>
          <div class="relative">
            <input type="text" name="besttime" v-model="data.besttime" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <div class="mt-4">
          <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
          <div class="relative">
            <input type="text" name="city" v-model="data.city" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State</label>
          <div class="relative">
            <input type="text" name="state" v-model="data.state" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="zip" class="block text-sm font-medium leading-6 text-gray-900">Zip</label>
          <div class="relative">
            <input type="text" name="zip" v-model="data.zip" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10">
        <div class="mt-4">
          <label for="marry" class="block text-sm font-medium leading-6 text-gray-900">Are you married</label>
          <div class="relative">
            <input type="text" name="marry" v-model="data.marry" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="kid" class="block text-sm font-medium leading-6 text-gray-900">Do you have Kids</label>
          <div class="relative">
            <input type="text" name="kid" v-model="data.kid" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10">
        <div class="mt-4">
          <label for="pet" class="block text-sm font-medium leading-6 text-gray-900">Do you have a pet</label>
          <div class="relative">
            <input type="text" name="pet" v-model="data.pet" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
        <div class="mt-4">
          <label for="car" class="block text-sm font-medium leading-6 text-gray-900">Do you have a car</label>
          <div class="relative">
            <input type="text" name="car" v-model="data.car" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
            <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div class="mt-4">
        <label for="occupation" class="block text-sm font-medium leading-6 text-gray-900">Occupation</label>
        <div class="relative">
          <input type="text" name="occupation" v-model="data.occupation" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="people_cnt" class="block text-sm font-medium leading-6 text-gray-900">How many people will be living in the house</label>
        <div class="relative">
          <input type="text" name="people_cnt" v-model="data.people_cnt" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="reason_leaving" class="block text-sm font-medium leading-6 text-gray-900">Reasons for Leaving present home</label>
        <div class="relative">
          <input type="text" name="reason_leaving" v-model="data.reason_leaving" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="long_lease" class="block text-sm font-medium leading-6 text-gray-900">How long lease are you looking for</label>
        <div class="relative">
          <input type="text" name="long_lease" v-model="data.long_lease" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="intend_moving" class="block text-sm font-medium leading-6 text-gray-900">How soon do you intend moving in</label>
        <div class="relative">
          <input type="text" name="intend_moving" v-model="data.intend_moving" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="date_birth" class="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
        <div class="relative">
          <input type="text" name="date_birth" v-model="data.date_birth" placeholder="0000-00-00" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="num_car" class="block text-sm font-medium leading-6 text-gray-900">Numbers of Cars</label>
        <div class="relative">
          <input type="text" name="num_car" v-model="data.num_car" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="picture" class="block text-sm font-medium leading-6 text-gray-900">A picture of occupant</label>
        <div class="relative">
          <input type="text" name="picture" v-model="data.picture" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="payment" class="block text-sm font-medium leading-6 text-gray-900">How soon you make the payment</label>
        <div class="relative">
          <input type="text" name="payment" v-model="data.payment" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
      <div class="mt-4">
        <label for="receive_keys" class="block text-sm font-medium leading-6 text-gray-900">How soon do you want to receive the keys/ documents</label>
        <div class="relative">
          <input type="text" name="receive_keys" v-model="data.receive_keys" readonly class="peer block w-full border-0 bg-gray-50 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" />
          <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600" aria-hidden="true" />
        </div>
      </div>
    </div>
</template>
  
<script>

import { useRouter } from "vue-router";

import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default {
  data() {
    return {
      loading: false,
      data: {
        address: "", besttime: "", car: "", city: "", date_birth: "", fullname: "", intend_moving: ""
        , kid: "", long_lease: "", marry: "", num_car: "", occupation: "", payment: "", people_cnt: "", pet: ""
        , phone: "", picture: "", reason_leaving: "", receive_keys: "", state: "", zip: "" }
    }
  },
  props: {
    doc_id: String
  },
  async created () {
    const router = useRouter();
    if (!this.doc_id) {
      router.push({name: "Home"});
    } else {
      const docD = await getDoc(doc(db, 'applications', this.doc_id))
      if (docD.exists()) {
        this.data = docD.data()
      }
    }
  }
}

</script>