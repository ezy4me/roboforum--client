<template>
  <div
    class="col q-mr-md"
    style="overflow: auto; min-width: 25%; max-width: 25%">
    <q-card flat class="q-mb-md bg-negative">
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
    <q-card flat class="q-mb-md bg-negative">
      <q-card-section>
        <q-btn
          @click="navigateTo('account')"
          class="full-width q-mb-md bg-grey-10"
          flat
          label="Главная" />

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
import { useStore } from "vuex";
import { useNavigation } from "@/hooks/useNavigation";
export default {
  setup() {
    const store = useStore();
    const { navigateTo } = useNavigation();

    const user = computed(
      () => store.state.auth.user || localStorage.getItem("user")
    );

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
