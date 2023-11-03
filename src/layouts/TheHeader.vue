<template>
  <q-header
    class="text-white shadow-1"
    style="background: #050a14"
    height-hint="61.59">
    <q-toolbar class="q-py-sm q-px-md">
      <q-btn
        dense
        flat
        icon="computer"
        label="ROBOFORUM"
        size="24px"
        color="white"
        class="q-pa-sm logo"
        no-caps />

      <!-- <q-select
        ref="search"
        dark
        dense
        standout
        use-input
        hide-selected
        class="GL__toolbar-select q-ml-sm"
        color="black"
        :stack-label="false"
        label="Поиск"
        v-model="text"
        :options="filteredOptions"
        @filter="filter"
        style="width: 300px">
        <template v-slot:no-option>
          <q-item>
            <q-item-section>
              <div class="text-center">
                <q-spinner-pie color="grey-5" size="24px" />
              </div>
            </q-item-section>
          </q-item>
        </template>

        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps" class="GL__select-GL__menu-link">
            <q-item-section side>
              <q-icon name="collections_bookmark" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
            </q-item-section>
            <q-item-section side :class="{ 'default-type': !scope.opt.type }">
              <q-btn
                outline
                dense
                no-caps
                text-color="blue-grey-5"
                size="12px"
                class="bg-grey-1 q-px-sm">
                {{ scope.opt.type || "Jump to" }}
                <q-icon name="subdirectory_arrow_left" size="14px" />
              </q-btn>
            </q-item-section>
          </q-item>
        </template>
      </q-select> -->

      <div
        v-if="$q.screen.gt.sm"
        class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
        <a href="javascript:void(0)" class="text-white"> Обсуждения </a>
        <a href="javascript:void(0)" class="text-white"> Сообщество </a>
        <a href="javascript:void(0)" class="text-white"> Магазин </a>
        <a href="javascript:void(0)" class="text-white"> Поддержка </a>
      </div>

      <q-space />

      <div
        v-if="$q.screen.gt.sm"
        class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
        <a href="javascript:void(0)" class="text-white"> Войти </a>
        <a href="javascript:void(0)" class="text-white"> Зарегистрироваться </a>
      </div>

      <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
        <q-btn
          v-if="$q.screen.gt.xs"
          dense
          flat
          round
          size="sm"
          icon="notifications" />
        <q-btn v-if="$q.screen.gt.xs" dense flat>
          <div class="row items-center no-wrap">
            <q-icon name="add" size="20px" />
            <q-icon
              name="arrow_drop_down"
              size="16px"
              style="margin-left: -2px" />
          </div>
          <q-menu :offset="[0, 10]" auto-close>
            <q-list dense style="min-width: 100px">
              <q-item clickable class="GL__menu-link">
                <q-item-section>Новый проект</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link">
                <q-item-section>Новое обсуждение</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn round flat class="q-pa-sm">
          <q-avatar size="40px">
            <img src="/avatar.png" />
          </q-avatar>

          <q-menu :offset="[0, 10]" auto-close>
            <q-list dense>
              <q-item class="GL__menu-link-signed-in">
                <q-item-section>
                  <div>Привет, <strong>User</strong></div>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="GL__menu-link-status">
                <q-item-section>
                  <div>
                    <q-icon name="tag_faces" color="blue-9" size="14px" />
                     Статус
                  </div>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="GL__menu-link">
                <q-item-section>Ваш профиль</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link">
                <q-item-section>Ваши проекты</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link">
                <q-item-section>Ваши обсуждения</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link">
                <q-item-section>Ваши товары</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable class="GL__menu-link">
                <q-item-section>Помощь</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link">
                <q-item-section>Настройки</q-item-section>
              </q-item>
              <q-item clickable class="GL__menu-link bg-red">
                <q-item-section>Выход</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script>
import { ref } from "vue";
import { fabGithub } from "@quasar/extras/fontawesome-v6";

const stringOptions = [
  "quasarframework/quasar",
  "quasarframework/quasar-awesome",
];

export default {
  name: "TheHeader",

  setup() {
    const text = ref("");
    const options = ref(null);
    const filteredOptions = ref([]);
    const search = ref(null);

    function filter(val, update) {
      if (options.value === null) {
        setTimeout(() => {
          options.value = stringOptions;
          search.value.filter("");
        }, 2000);
        update();
        return;
      }

      if (val === "") {
        update(() => {
          filteredOptions.value = options.value.map((op) => ({ label: op }));
        });
        return;
      }

      update(() => {
        filteredOptions.value = [
          {
            label: val,
            type: "In this repository",
          },
          {
            label: val,
            type: "All GitHub",
          },
          ...options.value
            .filter((op) => op.toLowerCase().includes(val.toLowerCase()))
            .map((op) => ({ label: op })),
        ];
      });
    }

    return {
      fabGithub,

      text,
      options,
      filteredOptions,
      search,

      filter,
    };
  },
};
</script>
<style lang="sass">
.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden

    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible

  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7

  &__menu-link:hover
    background: #0366d6
    color: white

  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9

  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none
</style>
