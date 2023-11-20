<template>
  <q-page class="q-my-md">
    <div class="q-py-md example-row-equal-width">
      <div class="row">
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          class="col"
          style="overflow: auto; min-width: auto; height: 90vh">
          <q-card v-if="project" class="my-card q-mb-md bg-negative" flat>
            <q-card-section horizontal>
              <q-card-section class="q-pt-xs">
                <div class="text-h5 q-mt-sm q-mb-xs">{{ project.title }}</div>
                <div class="text-caption text-grey">
                  {{ project.description }}
                </div>
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn flat round icon="event" />
              <q-btn flat>
                {{ new Date(project.date).toLocaleDateString("ru") }}
              </q-btn>
            </q-card-actions>
            <q-img
            class="q-ma-md"
              fit="cover"
              v-for="(i, index) in project.projectFiles"
              :key="index"
              :src="'http://localhost:3000/uploads/' + i.file"
              no-native-menu>
            </q-img>
          </q-card>
          <div class="row">
            <div class="q-pa-md full-width">
            <div class="text-h5 q-mb-md">Оставить комментарий</div>
              <q-input v-model="text" filled type="textarea" />
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onUpdated, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    projectId: Number,
  },
  setup(props) {
    const store = useStore();
    const project = computed(() => store.state.project.project);

    const loadData = async () => {
      await store.dispatch("project/GET_ONE_PROJECT", {
        projectId: props.projectId,
      });
    };

    onMounted(() => {
      loadData();
    });

    return {
      projectId: ref(props.projectId),
      project,
    };
  },
};
</script>

<style lang="scss">
.q-img {
  width: 300px;
  aspect-ratio: 1;
}
</style>
