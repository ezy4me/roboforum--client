<template>
  <q-page class="my-page q-py-md">
    <div v-if="$q.screen.gt.sm" class="fit row justify-center items-start content-start">
      <v-account-side-bar />
      <router-view></router-view>
    </div>
    <div v-if="!$q.screen.gt.sm" class="fit col justify-center items-start content-start">
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
