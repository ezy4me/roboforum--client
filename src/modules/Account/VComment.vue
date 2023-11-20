<template>
  <q-card flat class="my-card full-width q-pa-md">
    <q-card-section class="bg-grey-10">
      <div class="text-h6">{{ comment.user.username }}</div>
      <div class="text-body1">{{ comment.comment }}</div>
    </q-card-section>
    <q-card-actions align="right" class="bg-grey-9">
      {{ new Date(comment.date).toLocaleDateString("ru") }}
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
      default: () => ({
        comment: "",
        user: { username: "", email: "" },
        date: "",
      }),
    },
  },
  setup() {
    return {};
  },
};
</script>
<style lang=""></style>
