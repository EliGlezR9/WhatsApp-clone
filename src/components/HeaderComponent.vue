<template>
  <div class="q-pa-sm q-gutter-none">
    <div class="row-q-mb-md">
      <div class="col-4 col-sm-3 col-md-4">
        <q-layout
          view="lHh Lpr lff"
          container
          style="height: 4rem"
          class="shadow-2 q-pa-sm"
        >
          <q-header class="bg-grey-8">
            <q-toolbar
              class="bg-gray text-white shadow-2 rounded-borders"
              style="height: 4rem"
            >
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
              <q-space />
              <q-tabs v-model="tab" shrink>
                <div class="q-pa-sm">
                  <q-btn to="" flat icon="las la-sync" round dense />
                </div>
                <div class="q-pa-sm">
                  <q-btn to="" flat icon="las la-sms" round dense />
                </div>
                <div class="q-pa-sm">
                  <q-btn flat round dense icon="las la-ellipsis-v" />
                </div>
              </q-tabs>
            </q-toolbar>
          </q-header>
        </q-layout>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

