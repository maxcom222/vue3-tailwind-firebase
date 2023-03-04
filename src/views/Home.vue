<template>
  <Form v-if="!user" />
  <List v-else />
</template>

<script setup>

import { useAuthState } from "@/firebase";
import Form from "@/components/application/Form.vue";
import List from "@/components/application/List.vue";

const { user } = useAuthState();
</script>