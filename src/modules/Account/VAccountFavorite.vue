<template>
    <v-account-favorite-projects :userId="user.userId" />
    <!-- <v-account-discussions :userId="user.userId"/> -->
</template>
<script>
import store from "@/store";
// import VAccountDiscussions from "./VAccountDiscussions.vue";
import VAccountFavoriteProjects from "./VAccountFavoriteProjects.vue";
import { computed } from "vue";
export default {
  components: { VAccountFavoriteProjects },
  setup() {
    const user = computed(() => store.state.auth.user);
    return {
      user,
    };
  },
};
</script>
