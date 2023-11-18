<template>
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
          <q-btn @click="navigateTo('newProject')" round color="indigo" size="0.84rem" icon="add" />
        </q-card-section>
      </q-card>
    </div>
  </div>

  <q-card
    v-for="(project, index) in userProjects"
    :key="index"
    class="my-card q-mb-md bg-grey-10"
    flat>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <div class="text-h5 q-mt-sm q-mb-xs">{{ project.title }}</div>
        <div class="text-caption">{{ project.description }}</div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat round icon="event" />
      <q-btn flat>
        {{ new Date(project.date).toLocaleDateString("ru") }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
<script>
import { useNavigation } from "@/hooks/useNavigation";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    userId: Number,
  },
  setup(props) {
    const store = useStore();
    const { navigateTo } = useNavigation();

    const userProjects = computed(() => store.state.user.userProjects);

    const loadData = async () => {
      await store.dispatch("user/GET_USER_PROJECTS", {
        userId: props.userId,
      });
    };

    onMounted(() => {
      loadData();
    });

    return {
      userProjects,
      navigateTo
    };
  },
};
</script>
<style lang=""></style>
