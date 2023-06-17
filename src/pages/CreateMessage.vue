<template>
  <q-layout view="hHh lpR fFf">
    <q-row class="row q-mb-md">
      <div class="col-4">
        <q-list bordered class="q-pa-sm rounded-borders bg-grey-8">
          <q-page-container>
            <q-page>
              <text-h4 text-weight-bold>
                Select a contact to start a chat</text-h4
              >
              <q-separator inset="item" />

              <q-item
                class="active"
                v-for="contact in contacts"
                :key="contact.id"
                v-ripple
              >
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-white">
                  <q-item-label lines="1">
                    {{ contact.contactName }}
                  </q-item-label>
                  <q-item-label caption lines="2">
                    <span class="text-weight-thin text-white">
                      {{ contact.status }}
                    </span>
                  </q-item-label>
                </q-item-section>

                <q-item-section side top class="text-white text-weight-thin">
                  {{ contact.lastConnection }}
                </q-item-section>
              </q-item>

              <q-separator inset="item" />
            </q-page>
          </q-page-container>
        </q-list>
      </div>
    </q-row>
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
          status: "Can't talk, whatsApp only",
        },
        {
          id: 2,
          contactName: "Juan perez",
          lastMessage: "Good morning",
          lastConnection: "9:50 am",
          receivedTime: "10:50 am",
          status: "Can't talk, whatsApp only",
        },
        {
          id: 3,
          contactName: "Chuy mecanico",
          lastMessage: "Time to go home",
          lastConnection: "12.00 pm",
          receivedTime: "11:11 pm",
          status: "Can't talk, whatsApp only",
        },
        {
          id: 4,
          contactName: "Manager",
          lastMessage: "I want to learn code",
          lastConnection: "10:10 pm",
          receivedTime: "11:50 pm",
          status: "Can't talk, whatsApp only",
        },
        {
          id: 5,
          contactName: "Ruben Gonzalez",
          lastMessage: "Hello world",
          lastConnection: "12:45 pm",
          receivedTime: "1:50 pm",
          status: "Can't talk, whatsApp only",
        },
        {
          id: 6,
          contactName: "Juan perez",
          lastMessage: "Good morning",
          lastConnection: "9:50 am",
          receivedTime: "10:50 am",
          status: "Can't talk, whatsApp only",
        },
        {
          id: 7,
          contactName: "Chuy mecanico",
          lastMessage: "Time to go home",
          lastConnection: "12.00 pm",
          receivedTime: "11:11 pm",
          status: "Can't talk, whatsApp only",
        },
      ],
    };
  },
};
</script>
