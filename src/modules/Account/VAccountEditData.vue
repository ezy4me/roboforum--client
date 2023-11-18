<template>
  <q-scroll-area
    class="col"
    style="overflow: auto; min-width: auto; height: 90vh">
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <div class="text-h4 text-uppercase">Информация профиля</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-input
              disable
              filled
              v-model="state.email"
              label="Email"
              :dense="dense" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-input
              filled
              v-model="state.username"
              label="Username"
              :dense="dense" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-input filled v-model="state.name" label="Name" :dense="dense" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-input
              filled
              v-model="state.company"
              label="Company"
              :dense="dense" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-input
              filled
              v-model="state.location"
              label="Location"
              :dense="dense" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md" v-for="(link, index) in state.links" :key="index">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-input
              filled
              v-model="state.links[index].link"
              label="Link"
              :dense="dense" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-select
              filled
              v-model="single"
              :options="options"
              label="Single" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-btn
          @click="onSave"
          class="full-width"
          color="indigo"
          label="Сохранить" />
      </div>
    </div>
  </q-scroll-area>
</template>
<script>
import { onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const user = computed(() => store.state.auth.user);

    const initialState = reactive({
      username: "",
      email: "",
      name: "",
      company: "",
      location: "",
      links: [{ link: "" }, { link: "" }],
    });

    const state = reactive({ ...initialState });

    const loadData = async () => {
      await store.dispatch("user/GET_USER_PROFILE", {
        userId: user.value.userId,
      });
    };

    const onSave = async () => {
      ///
    };

    onMounted(() => {
      loadData();
    });

    return { state, onSave };
  },
};
</script>
<style lang=""></style>
