<template>
  <q-layout view="hHh lpR fFf">
    <div class="q-ml-xs" style="max-height: 60rem">
      <q-card
        dark
        class="q-pa-none q-mr-none bg-grey-8 my-card"
        style="width: 56rem"
      >
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-white">{{ contactName }}</q-item-label>
            <q-item-label class="text-white" caption>
              {{ lastConnection }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section class="q-pa-xl">
          <div class="q-pa-xl row justify-center">
            <div style="width: 100%; max-width: 100rem">
              <q-chat-message :text="['hey, how are you?']" sent />
              <q-chat-message :text="['doing fine, how r you?']" />
              <q-chat-message :text="['hey, how are you?']" sent />
              <q-chat-message :text="['doing fine, how r you?']" />
              <q-chat-message :text="['hey, how are you?']" sent />
              <q-chat-message :text="['doing fine, how r you?']" />
            </div>
          </div>
        </q-card-section>
      </q-card>
      <div class="q-pa-xs bg-grey-8 text-white" style="width: 56rem">
        <div class="row">
          <q-input
            rounded
            outlined
            style="flex; width: 53rem"
            color="primary"
            type="text"
            placeholder="Type a new message"
          />
          <q-btn to="" flat icon="las la-paper-plane" dense />
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "ActiveConversationComponent",

  data() {
    return {
      contactName: "Ruben Gonzalez",
      lastConnection: "10:24 am",
    };
  },
};
</script>