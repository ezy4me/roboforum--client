<template>
  <q-page class="my-page q-py-md">
    <div class="fit row justify-center items-start content-start">
      <div
        class="col q-mr-md"
        style="overflow: auto; min-width: 25%; max-width: 25%">
        <q-card flat class="my-card q-mb-md bg-negative">
          <q-card-section>
            <q-img
              src="/alien.jpg"
              spinner-color="white"
              img-class="my-avatar"
              fit="cover">
              <div class="absolute-bottom text-subtitle1 text-center">
                Пользователь
              </div>
            </q-img>
          </q-card-section>
        </q-card>
        <q-card flat class="my-card q-mb-md bg-negative">
          <q-card-section>
            <q-btn
              @click="navigateTo('account-edit')"
              flat
              class="full-width q-mb-md bg-grey-10"
              label="Редактировать профиль" />
            <q-btn
              @click="onLogout"
              class="full-width"
              color="red"
              label="Выйти" />
          </q-card-section>
        </q-card>
      </div>
      <q-scroll-area
        class="col"
        style="overflow: auto; min-width: auto; height: 90vh">
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <div class="text-h4 text-uppercase">Информация профиля</div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-input
                  disable
                  filled
                  v-model="text"
                  label="Email"
                  :dense="dense" />
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-input
                  filled
                  v-model="text"
                  label="Username"
                  :dense="dense" />
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-input filled v-model="text" label="Name" :dense="dense" />
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-input filled v-model="text" label="Company" :dense="dense" />
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-input
                  filled
                  v-model="text"
                  label="Location"
                  :dense="dense" />
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-input filled v-model="text" label="Link" :dense="dense" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-select
                  filled
                  v-model="single"
                  :options="options"
                  label="Single" />
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-mb-md">
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-input filled v-model="text" label="Link" :dense="dense" />
              </q-card-section>
            </q-card>
          </div>
          <div class="col">
            <q-card flat class="my-card bg-negative">
              <q-card-section>
                <q-select
                  filled
                  v-model="single"
                  :options="options"
                  label="Single" />
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-mb-md">
          <div class="col">
            <q-btn class="full-width" color="indigo" label="Сохранить" />
          </div>
        </div>
      </q-scroll-area>
    </div>
  </q-page>
</template>
<script>
export default {};
</script>
<style lang=""></style>
