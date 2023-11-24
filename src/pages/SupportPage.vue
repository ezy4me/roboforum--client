<template>
  <q-page class="my-page q-py-md">
    <q-scroll-area
      class="col"
      style="overflow: auto; min-width: auto; height: 90vh">
      <div class="row q-mb-md">
        <div class="col">
          <q-card flat class="bg-negative">
            <q-card-section>
              <div class="text-h5 text-uppercase">
                1. Форма Обратной Связи 📝
              </div>
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
              <div class="text-h5 text-uppercase">2. Электронная Почта ✉️</div>
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
              <div class="text-h5 text-uppercase">3. Социальные Сети 🌐</div>
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
                  <q-avatar color="red" text-color="white" icon="smart_display" />
                </q-item-section>
                <q-item-section>Наш YouTube</q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
export default {};
</script>
<style lang=""></style>
