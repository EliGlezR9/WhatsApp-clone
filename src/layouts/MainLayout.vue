<template>
  <q-layout view="hHh lpR fFf">
    <q-row class="row q-mb-md">
      <div class="q-pa-xm q-mt-none text-white" style="width: 27rem">
        <div class="col-4">
          <!--Header section-->
          <div class="q-pa-xs bg-grey-8 text-white" style="width: rem">
            <HeaderComponent />
          </div>
          <!-- Search section-->
          <div class="q-pa-xs bg-grey-8 text-white" style="width: 27rem">
            <q-list bordered class="rounded-borders">
              <div class="q-pa-xm q-mt-none text-white">
                <q-input
                  rounded
                  outlined
                  style="flex-centered"
                  placeholder="Search or start a new chat"
                />
              </div>

              <q-item-label class="text-white text-weight-bold" header
                >Chats</q-item-label
              >

              <!-- ContactList start-->
              <ContactComponent />
            </q-list>
          </div>
        </div>
      </div>
      <div class="q-pa-xm q-mt-none text-white" style="width: 56rem">
        <div class="col-8">
          <ActiveConversationComponent />
        </div>
      </div>
    </q-row>
  </q-layout>
  <router-view />
</template>

<script>
import { defineComponent, ref } from "vue";
//import EssentialLinkVue from "components/EssentialLink.vue";
import ActiveConversationComponent from "components/ActiveConversationComponent.vue";
import ContactComponent from "components/ContactComponent.vue";
import HeaderComponent from "components/HeaderComponent.vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {};
  },

  components: {
    //EssentialLinkVue,
    HeaderComponent,
    ActiveConversationComponent,
    ContactComponent,
  },
});
</script>

