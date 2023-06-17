<template>
  <q-layout view="1hh lpR 1Ff">
    <div class="q-pa-xs">
      <q-list bordered class="rounded-borders">
        <q-item v-for="contact in contacts" :key="contact.id" v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-bold text-white" lines="1"
              >{{ contact.contactName }}
            </q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-thin text-white">
                {{ contact.lastMessage }}
              </span>
            </q-item-label>
          </q-item-section>
          <q-item-section class="text-weight-thin text-white" side top>
            {{ contact.receivedTime }}
          </q-item-section>
          <q-separator inset="item" />
        </q-item>
      </q-list>
    </div>
  </q-layout>
</template>

<script>
export default {
  name: "ContactComponent",

  data() {
    return {
      contacts: [
        {
          id: 1,
          contactName: "Ruben Gonzalez",
          lastMessage: "Hello world",
          lastConnection: "12:45 pm",
          receivedTime: "1:50 pm",
          status: "Can't talk, only whatsapp.",
        },
        {
          id: 2,
          contactName: "Juan perez",
          lastMessage: "Good morning",
          lastConnection: "9:50 am",
          receivedTime: "10:50 am",
          status: "Can't talk, only whatsapp.",
        },
        {
          id: 3,
          contactName: "Chuy mecanico",
          lastMessage: "Time to go home",
          lastConnection: "12.00 pm",
          receivedTime: "11:11 pm",
          status: "Can't talk, only whatsapp.",
        },
        {
          id: 4,
          contactName: "Manager",
          lastMessage: "I want to learn code",
          lastConnection: "10:10 pm",
          receivedTime: "11:50 pm",
          status: "Can't talk, only whatsapp.",
        },
        {
          id: 5,
          contactName: "Ruben Gonzalez",
          lastMessage: "Hello world",
          lastConnection: "12:45 pm",
          receivedTime: "1:50 pm",
          status: "Can't talk, only whatsapp.",
        },
        {
          id: 6,
          contactName: "Juan perez",
          lastMessage: "Good morning",
          lastConnection: "9:50 am",
          receivedTime: "10:50 am",
          status: "Can't talk, only whatsapp.",
        },
        {
          id: 7,
          contactName: "Chuy mecanico",
          lastMessage: "Time to go home",
          lastConnection: "12.00 pm",
          receivedTime: "11:11 pm",
          status: "Can't talk, only whatsapp.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.active .q-router-link--exact-active {
  color: white !important;
}
</style>
