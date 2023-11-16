<template>
  <q-page class="my-page q-py-md">
    <div class="fit row justify-center items-start content-start">
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
                Пользователь
              </div>
            </q-img>
          </q-card-section>
        </q-card>
        <q-card flat class="my-card q-mb-md bg-negative">
          <q-card-section>
            <q-btn
              @click="navigateTo('account-edit')"
              flat
              class="full-width q-mb-md bg-grey-10"
              label="Редактировать профиль" />
            <q-btn
              @click="onLogout"
              class="full-width"
              color="red"
              label="Выйти" />
          </q-card-section>
        </q-card>
      </div>
      <q-scroll-area
        class="col"
        style="overflow: auto; min-width: auto; height: 90vh">
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <div class="text-h4 text-uppercase">Проекты</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-ml-md">
            <q-card flat class="my-card bg-negative">
              <q-card-section align="end">
                <q-btn round color="indigo" size="0.84rem" icon="add" />
              </q-card-section>
            </q-card>
          </div>
        </div>

        <q-card
          v-for="(item, index) in 4"
          :key="index"
          class="my-card q-mb-md bg-grey-10"
          flat>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs">Название</div>
              <div class="text-caption">Описание</div>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat round icon="event" />
            <q-btn flat> {{ new Date().toLocaleDateString("ru") }} </q-btn>
          </q-card-actions>
        </q-card>

        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <div class="text-h4 text-uppercase">Обсуждения</div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-ml-md">
            <q-card flat class="my-card bg-negative">
              <q-card-section align="end">
                <q-btn round color="indigo" size="0.84rem" icon="add" />
              </q-card-section>
            </q-card>
          </div>
        </div>

        <q-card
          v-for="(item, index) in 4"
          :key="index"
          class="my-card q-mb-md bg-grey-10"
          flat>
          <q-card-section horizontal>
            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs">Название</div>
              <div class="text-caption">Описание</div>
            </q-card-section>
          </q-card-section>

          <q-separator />

          <q-card-actions align="right">
            <q-btn flat round icon="event" />
            <q-btn flat> {{ new Date().toLocaleDateString("ru") }} </q-btn>
          </q-card-actions>
        </q-card>
      </q-scroll-area>
    </div>
  </q-page>
</template>
<script>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const user = computed(() => store.state.auth.user);

    const loadData = async () => {
      await store.dispatch("user/GET_USER_PROFILE", {
        userId: user.value.userId,
      });
    };

    const onLogout = async () => {
      await store.dispatch("auth/ON_LOGOUT").then(() => {
        location.reload();
      });
    };

    const navigateTo = (routeName) => {
      router.push({ name: routeName });
    };

    onMounted(() => {
      loadData();
    });

    return {
      onLogout,
      navigateTo
    };
  },
};
</script>
<style lang="scss">
.my-card {
  width: 100%;
}
</style>
