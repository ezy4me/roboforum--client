<template>
  <q-page class="my-page q-py-md">
    <div class="fit row justify-center items-start content-start">
      <v-account-side-bar />
      <router-view></router-view>
    </div>
  </q-page>
</template>
<script>
import VAccountSideBar from "./VAccountSideBar.vue";
export default {
  components: { VAccountSideBar },
  setup() {
    return {};
  },
};
</script>
<style lang="scss">
.my-card {
  width: 100%;
}
</style>
