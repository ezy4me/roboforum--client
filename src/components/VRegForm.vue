<template>
  <q-card style="width: 300px">
    <q-card-section>
      <div class="text-h6">Регистрация</div>
    </q-card-section>
    <q-card-section>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
          ]" />

        <q-input
          filled
          v-model="password"
          label="Пароль"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
          ]" />

        <q-toggle v-model="accept" label="Подтвердить регистрацию" />

        <div>
          <q-btn
            class="full-width"
            label="Зарегистрироваться"
            type="submit"
            color="primary" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const email = ref(null);
    const password = ref(null);
    const accept = ref(false);

    return {
      email,
      password,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Вам нужно подтвердить регистрацию",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Вы успешно зарегистрированы",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
<style lang=""></style>
