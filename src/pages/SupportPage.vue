<template>
  <q-page class="my-page q-py-md">
    <q-scroll-area class="col my-scroll">
      <div class="row q-mb-md">
        <div class="col">
          <q-card flat class="bg-negative">
            <q-card-section>
              <div class="text-h5 text-uppercase">Форма Обратной Связи 📝</div>
            </q-card-section>
            <q-card-section>
              Не нашли ответ на ваш вопрос в FAQ? Оставьте нам сообщение через
              форму обратной связи, и мы постараемся ответить вам как можно
              быстрее.
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row q-mb-md">
        <div class="col">
          <q-card flat class="bg-negative">
            <q-card-section>
              <div class="text-h5 text-uppercase">Электронная Почта ✉️</div>
            </q-card-section>
            <q-card-section>
              Напишите нам на support@robotforum.com, и наша команда поддержки
              рассмотрит ваш запрос и предоставит вам необходимую помощь.
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row q-mb-md">
        <div class="col">
          <q-card flat class="bg-negative">
            <q-card-section>
              <div class="text-h5 text-uppercase">Социальные Сети 🌐</div>
            </q-card-section>
            <q-card-section>
              Следите за нами в социальных сетях, чтобы быть в курсе последних
              обновлений и связаться с нами через сообщения.
            </q-card-section>
            <q-list bordered>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar
                    color="blue-10"
                    text-color="white"
                    icon="facebook" />
                </q-item-section>
                <q-item-section>Наш Facebook</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar color="blue" text-color="white" icon="telegram" />
                </q-item-section>
                <q-item-section>Наш Telegram</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar
                    color="red"
                    text-color="white"
                    icon="smart_display" />
                </q-item-section>
                <q-item-section>Наш YouTube</q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>

      <div class="row q-mb-md">
        <div class="col">
          <q-card flat class="bg-negative">
            <q-card-section>
              <div class="text-h5 text-uppercase">
                Часто задаваемые вопросы (FAQ)
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="row q-mb-md">
        <div class="col">
          <q-list  bordered class="rounded-borders">
            <q-expansion-item
              class="bg-grey-10"
              v-for="(q, index) in faq"
              :key="index"
              expand-separator
              :icon="q.icon"
              :label="q.question">
              <q-card>
                <q-card-section>
                  {{ q.answer }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const faq = reactive([
      {
        icon: "looks_one",
        question: "Как зарегистрироваться на нашем форуме?",
        answer:
          "Для регистрации просто перейдите на страницу входа, нажмите 'Зарегистрироваться', и заполните необходимую информацию. После завершения регистрации, вы сможете создавать проекты и участвовать в обсуждениях.",
      },
      {
        icon: "looks_two",
        question: "Как создать новый проект?",
        answer:
          "После входа в свой аккаунт, перейдите на страницу 'Мои проекты' и нажмите 'Создать проект'. Заполните необходимую информацию о вашем проекте, добавьте изображения или файлы, и сохраните проект.",
      },
      {
        icon: "looks_3",
        question: "Могу ли я комментировать проекты других участников?",
        answer:
          "Да, конечно! Мы поддерживаем активное взаимодействие в сообществе. После просмотра проекта другого участника, просто оставьте комментарий с вашим мнением или вопросом.",
      },
      {
        icon: "looks_4",
        question: "Как изменить информацию в своем профиле?",
        answer:
          "Перейдите на страницу своего профиля и нажмите 'Редактировать профиль'. Здесь вы можете обновить информацию о себе, добавить аватар, и изменить другие настройки.",
      },
      {
        icon: "looks_5",
        question: "Как связаться с администрацией форума в случае проблемы?",
        answer:
          "Для связи с администрацией используйте раздел 'Поддержка'. Там вы найдете форму обратной связи, где можете описать свою проблему или вопрос. Мы постараемся ответить в кратчайшие сроки.",
      },
      {
        icon: "looks_6",
        question:
          "Могу ли я использовать форум для поиска партнеров или коллег по проектам?",
        answer:
          "Да, форум поддерживает объединение участников для совместных проектов. Вы можете создать обсуждение или присоединиться к существующему, чтобы найти интересных партнеров и начать совместную работу.",
      },
    ]);

    return {
      faq,
    };
  },
};
</script>
<style lang=""></style>
