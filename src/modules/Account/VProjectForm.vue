<template>
  <q-scroll-area
    class="col"
    style="overflow: auto; min-width: auto; height: 90vh">
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <div class="text-h4 text-uppercase">Создание проекта</div>
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
              v-model="state.title"
              label="Название"
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
              type="textarea"
              v-model="state.description"
              label="Описание"
              :dense="dense" />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-file
              filled
              v-model="state.projectFiles"
              label="Файлы для загрузки">
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-md">
      <div class="col">
        <q-card flat class="my-card bg-negative">
          <q-card-section>
            <q-radio
              class="q-mr-md"
              v-model="state.projectTypeId"
              val="1"
              label="Публичный" />
            <q-radio v-model="state.projectTypeId" val="2" label="Приватный" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-mb-md">
      <div class="col">
        <q-btn
          @click="onSubmit"
          class="full-width"
          color="indigo"
          label="Создать" />
      </div>
    </div>
  </q-scroll-area>
</template>
<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const initialState = reactive({
      title: "",
      description: "",
      projectTypeId: "1",
      projectFiles: [],
    });

    const state = reactive({ ...initialState });

    const onSubmit = async () => {
      store.dispatch("user/POST_USER_PROJECT", {
        userId: store.state.auth.user.userId,
        title: state.title,
        description: state.description,
        projectTypeId: state.projectTypeId,
        projectFiles: state.projectFiles,
      });
    };

    return {
      state,
      onSubmit
    };
  },
};
</script>
<style lang=""></style>
