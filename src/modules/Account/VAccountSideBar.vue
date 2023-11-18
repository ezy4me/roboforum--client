<template>
  <div
    class="col q-mr-md"
    style="overflow: auto; min-width: 25%; max-width: 25%">
    <q-card flat class="my-card q-mb-md bg-negative">
      <q-card-section>
        <q-img
          src="/alien.jpg"
          spinner-color="white"
          img-class="my-avatar"
          fit="cover">
          <div class="absolute-bottom text-subtitle1 text-center">
            {{ user.username }}
          </div>
        </q-img>
      </q-card-section>
    </q-card>
    <q-card flat class="my-card q-mb-md bg-negative">
      <q-card-section>
        <q-btn
          @click="navigateTo('accountEdit')"
          flat
          class="full-width q-mb-md bg-grey-10"
          label="Редактировать профиль" />
        <q-btn @click="onLogout" class="full-width" color="red" label="Выйти" />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const user = computed(
      () => store.state.auth.user || localStorage.getItem("user")
    );

    const navigateTo = (routeName) => {
      router.push({ name: routeName });
    };

    const onLogout = async () => {
      await store.dispatch("auth/ON_LOGOUT").then(() => {
        location.reload();
      });
    };

    return {
      navigateTo,
      onLogout,
      user,
    };
  },
};
</script>
<style lang=""></style>
