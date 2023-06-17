<template>
  <q-layout view="hHh lpR fFf">
    <q-row class="row q-mb-md">
      <div class="q-pa-xm q-mt-none text-white" style="width: 27rem">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card" flat bordered>
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

            <q-card-section class="bg-grey-8 text-white">
              <div class="text-overline text-white text-weight-bold">
                Profile picture
              </div>
              <div class="text-h5 q-mt-sm q-mb-xs">Uzi Gonzalez</div>
              <div class="text-caption text-white">Keep calm and code .</div>
            </q-card-section>

            <q-card-actions class="bg-grey-8 text-white">
              <q-btn to="" flat icon="las la-sms" round dense />
              <q-btn to="" flat icon="las la-cog" round dense />

              <q-space />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </q-row>
  </q-layout>
  <router-view />
</template>

<script>
import { ref } from "vue";

export default {
  name: "ProfilePicture",

  setup() {
    return {
      expanded: ref(false),
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>