<template>
  <q-card style="width: 300px">
    <q-card-section>
      <div class="text-h6">Авторизация</div>
    </q-card-section>
    <q-card-section>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="state.email"
          label="Email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
          ]" />

        <q-input
          filled
          v-model="state.password"
          label="Пароль"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
          ]" />

        <div>
          <q-btn
            class="full-width"
            label="Войти"
            type="submit"
            color="primary" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import store from "@/store";
import { useQuasar } from "quasar";
import { reactive, ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const initialState = reactive({
      email: "",
      password: "",
    });

    const state = reactive({ ...initialState });

    const onSubmit = () => {
      store.dispatch("auth/ON_LOGIN", {
        ...state,
      });
    };

    const onReset = () => {
      state.email = "";
      state.password = "";
      accept.value = false;
    };

    return {
      state,
      onSubmit,
      onReset,
    };
  },
};
</script>

<style lang="scss"></style>
