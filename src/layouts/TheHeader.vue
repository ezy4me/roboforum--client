<template>
  <q-header class="text-white bg-negative" height-hint="61.59">
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

      <div
        v-if="$q.screen.gt.sm"
        class="GL__toolbar-link q-ml-xs q-gutter-md text-body2 text-weight-bold row items-center no-wrap">
        <router-link
          v-for="(link, index) in headerLinks"
          :key="index"
          :to="{ name: 'main' }"
          >{{ link.name }}</router-link
        >
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

              <q-item
                clickable
                class="GL__menu-link"
                v-for="(link, index) in accountLinks"
                @click="goToPage(link)">
                <q-item-section>{{ link.name }}</q-item-section>
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
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "TheHeader",

  setup() {
    const router = useRouter();
    const headerLinks = reactive([
      {
        name: "Обсуждения",
        route: "discussions",
      },
      {
        name: "Сообщество",
        route: "community",
      },
      {
        name: "Магазин",
        route: "shop",
      },
      {
        name: "Поддержка",
        route: "support",
      },
    ]);
    const accountLinks = reactive([
      {
        name: "Ваш профиль",
        route: "account",
      },
      {
        name: "Ваши проекты",
        route: "main",
      },
      {
        name: "Ваши обсуждения",
        route: "main",
      },
      {
        name: "Ваши товары",
        route: "main",
      },
      {
        name: "Помощь",
        route: "main",
      },
      {
        name: "Настройки",
        route: "main",
      },
    ]);

    const goToPage = (link) => {
      router.push({ name: link.route });
    };
    return {
      headerLinks,
      accountLinks,
      goToPage
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
