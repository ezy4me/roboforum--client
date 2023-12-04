<template>
  <q-card flat class="full-width q-pa-md">
    <q-card-section class="bg-grey-10">
      <div class="text-h6 text-indigo">
        {{ comment.userComment.user.username }}
      </div>
      <div class="text-body1">{{ comment.userComment.comment }}</div>
    </q-card-section>
    <q-card-actions align="right" class="bg-grey-9">
      {{ new Date(comment.userComment.dateTime).toLocaleDateString("ru") }}
      <q-separator spaced inset vertical dark />
      <q-btn
        flat
        color="blue"
        icon="mood"
        label="ответить"
        @click="onAnswerComment" />
    </q-card-actions>

    <div v-show="isAnswer" class="row">
      <q-card flat class="full-width q-pb-sm">
        <q-card-section class="row">
          <div class="text-body2">
            Ответить пользователю {{ comment.userComment.user.username }}:
          </div>
        </q-card-section>
        <q-card-section>
          <q-input
            class="bg-blue-grey-10"
            v-model="state.comment"
            filled
            type="textarea"
            :rules="[
              (val) => (val && val.length > 0) || 'Поле не должно быть пустым',
            ]" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            flat
            color="red"
            icon="mood_bad"
            label="Отмена"
            @click="onCancelAnswerComment" />
          <q-btn
            @click="onSubmit"
            color="indigo"
            icon-right="mail"
            class="q-mr-sm"
            label="Отправить" />
        </q-card-actions>
      </q-card>
    </div>

    <q-card-section
      v-for="(answer, index) in comment.projectCommentFork"
      :key="index"
      class="q-ml-xl q-my-md bg-blue-grey-10">
      <div class="text-h6 text-indigo">
        {{ answer.userComment.user.username }}
      </div>
      <div class="text-body1">{{ answer.userComment.comment }}</div>
    </q-card-section>
  </q-card>
</template>
<script>
import { ref, reactive } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    comment: {
      type: Object,
      required: true,
      default: () => ({
        comment: "",
        userCommentId: "",
        projectCommentFork: {},
        user: { username: "", email: "", userId: "" },
        date: "",
      }),
    },
    projectId: String,
  },
  setup(props, { emit }) {
    const store = useStore();

    const initialState = reactive({
      userId: store.state.auth.user?.userId || "",
      commentAnswer: "",
      projectId: props.projectId,
      userCommentId: props.comment.userCommentId,
    });

    const state = reactive({
      ...initialState,
    });

    const isAnswer = ref(false);

    const onAnswerComment = async () => {
      isAnswer.value = true;
    };

    const onCancelAnswerComment = async () => {
      isAnswer.value = false;
    };

    const onSubmit = async () => {
      await store
        .dispatch("project/POST_PROJECT_COMMENT_ANSWER", {
          ...state,
        })
        .then(() => {
          emit("loadData");
          state.comment = null;
          onCancelAnswerComment();
        });
    };

    return {
      onAnswerComment,
      onCancelAnswerComment,
      onSubmit,
      isAnswer,
      state,
    };
  },
};
</script>
<style lang=""></style>
