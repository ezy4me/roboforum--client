<template>
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

    <q-card-actions align="left">
      <q-btn flat round icon="event" />
      <q-btn flat> {{ new Date().toLocaleDateString("ru") }} </q-btn>
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style lang=""></style>
