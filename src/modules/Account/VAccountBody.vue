<template>
  <q-scroll-area
    class="col"
    style="overflow: auto; min-width: auto; height: 90vh">
    <v-account-projects :userId="user.userId"/>
    <v-account-discussions />
  </q-scroll-area>
</template>
<script>
import store from "@/store";
import VAccountDiscussions from "./VAccountDiscussions.vue";
import VAccountProjects from "./VAccountProjects.vue";
import { computed } from "vue";
export default {
  components: { VAccountProjects, VAccountDiscussions },
  setup() {
    const user = computed(() => store.state.auth.user)
    return {
      user
    };
  },
};
</script>
<style lang=""></style>
