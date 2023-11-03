<template>
  <q-layout>
    <TheHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <VBackgroundStars/>
</template>

<script>
import { useQuasar } from "quasar";
import TheHeader from "./layouts/TheHeader.vue";
import VBackgroundStars from "./components/VBackgroundStars.vue";

export default {
  name: "MainLayout",

  components: { TheHeader, VBackgroundStars },

  setup() {
    const $q = useQuasar();
    $q.dark.set(true);
    return {};
  },
};
</script>
