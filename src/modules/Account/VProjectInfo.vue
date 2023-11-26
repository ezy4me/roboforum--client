<template>
  <q-page class="q-my-md">
    <div class="q-py-md example-row-equal-width">
      <div class="row">
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          class="col"
          style="overflow: auto; min-width: auto; height: 90vh">
          <q-card v-if="project" class="q-mb-md bg-negative" flat>
            <q-card-section horizontal class="bg-grey-10">
              <q-card-section class="q-pt-xs">
                <div class="text-h4 q-mt-sm q-mb-xs">{{ project.title }}</div>
                <div class="text-body1">
                  {{ project.description }}
                </div>
              </q-card-section>
            </q-card-section>

            <q-separator />

            <div class="row">
              <q-card flat v-for="(i, index) in project.projectFiles">
                <q-img
                  v-if="isImage(i.file)"
                  class="q-ma-md"
                  fit="cover"
                  :key="index"
                  :src="`${VITE_APP_API_URL}/uploads/${i.file}`"
                  no-native-menu>
                  <div class="absolute-bottom text-center">
                    <a
                      class="text-white q-link"
                      :href="`${VITE_APP_API_URL}/uploads/${i.file}`">
                      {{ i.file }}
                    </a>
                  </div>
                </q-img>
                <q-img
                  v-else
                  class="q-ma-md"
                  fit="cover"
                  src="/file.png"
                  no-native-menu>
                  <div class="absolute-bottom text-center">
                    <a
                      class="text-white q-link"
                      :href="`${VITE_APP_API_URL}/uploads/${i.file}`">
                      {{ i.file }}
                    </a>
                  </div>
                </q-img>
              </q-card>
            </div>

            <q-separator />

            <q-card-actions align="right">
              <q-btn flat round icon="event" />
              <q-btn flat>
                {{ new Date(project.date).toLocaleDateString("ru") }}
              </q-btn>
              <q-separator vertical class="q-mx-md" />
              <div class="text-body1 bg-indigo q-pa-sm rounded-borders">{{ project.user.username }}</div>
            </q-card-actions>
          </q-card>
          <VCommentsWall :projectId="projectId" />
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import VCommentsWall from "./VCommentsWall.vue";

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

    const fileTypes = ["jpg", "jpeg", "png"];

    function isImage(file) {
      if (file) {
        const extension = file.split(".").pop().toLowerCase();
        const isSuccess = fileTypes.indexOf(extension) > -1;

        return isSuccess;
      }
    }

    onMounted(() => {
      loadData();
    });

    return {
      projectId: ref(props.projectId),
      project,
      isImage,
      VITE_APP_API_URL: import.meta.env.VITE_APP_API_URL,
    };
  },
  components: { VCommentsWall },
};
</script>

<style lang="scss">
.q-img {
  width: 300px;
  aspect-ratio: 1;
}
</style>
