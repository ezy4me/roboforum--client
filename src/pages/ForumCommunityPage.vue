<template>
  <q-page class="q-my-md">
    <div class="text-h6">Открытые проекты</div>

    <q-input v-model="text" label="Поиск" counter>
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
    </q-input>

    <div class="q-py-md example-row-equal-width">
      <div class="row">
        <q-scroll-area
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
          class="col"
          style="overflow: auto; min-width: auto; height: 75vh">
          <q-card
            v-for="(project, index) in publicProjects"
            :key="index"
            class="my-card q-mb-md bg-negative"
            @click="navigateTo('project', { projectId: project.id })"
            flat>
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
              <q-separator vertical />
              <div class="text-body2 text-white q-px-sm">
                {{ project.user.username }}
              </div>
            </q-card-actions>
          </q-card>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
</template>
<script>
import { useNavigation } from "@/hooks/useNavigation";
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const { navigateTo } = useNavigation();
    const publicProjects = computed(() => store.state.project.publicProjects);
    const text = ref();

    const loadData = async () => {
      await store.dispatch("project/GET_PUBLIC_PROJECTS");
    };

    onMounted(() => {
      loadData();
    });

    return {
      publicProjects,
      text,
      navigateTo,
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        width: "5px",
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        width: "9px",
      },
    };
  },
};
</script>
<style lang=""></style>
