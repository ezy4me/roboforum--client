<template>
  <div class="row">
    <q-card flat class=" full-width q-pb-md">
      <q-card-section>
        <div class="text-h6">Оставить комментарий:</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="state.comment" filled type="textarea" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          @click="onSubmit"
          color="indigo"
          icon-right="mail"
          class="q-mr-sm"
          label="Отправить" />
      </q-card-actions>
    </q-card>
  </div>
  <div class="row">
    <VComment
      v-for="(comment, index) in projectComments"
      :key="index"
      :comment="comment" />
  </div>
</template>
<script>
import { computed, onMounted, reactive } from "vue";
import VComment from "./VComment.vue";
import { useStore } from "vuex";
export default {
  props: {
    projectId: Number,
  },
  setup(props) {
    const store = useStore();

    const initialState = reactive({
      userId: store.state.auth.user?.userId || "",
      comment: "",
      projectId: props.projectId,
    });

    const state = reactive({
      ...initialState,
    });

    const projectComments = computed(() => store.state.project.projectComments);

    const loadData = async () => {
      await store.dispatch("project/GET_PROJECT_COMMENTS", {
        projectId: props.projectId,
      });
    };

    const onSubmit = async () => {
      if(state.userId){
        await store
        .dispatch("project/POST_PROJECT_COMMENT", {
          ...state,
        })
        .then(() => {
          loadData();
        });
      }
      else {
        alert('Авторизируйся')
      }
     
    };

    onMounted(() => {
      loadData();
    });

    return {
      projectComments,
      onSubmit,
      state,
    };
  },
  components: { VComment },
};
</script>
<style lang=""></style>
