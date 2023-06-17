import Vue from 'vue'
import {uid} from 'quasar'
import { Date } from 'core-js'

const state = {
    chats: {

        'ID1' : {
            contactName: 'Ruben Gonzalez',
            lastMessage: 'Hello world',
            messageSent: true,
            messageReceived: true,
            messageSeen: false,
            lastConnection: Date,

        },
        'ID2' : {
            contactName: 'Juan perez',
            lastMessage: 'Good morning',
            messageSent: true,
            messageReceived: true,
            messageSeen: false,
            lastConnection: Date,

        },
        'ID3' : {
            contactName: 'Chuy mecanico',
            lastMessage: 'Time to go home',
            messageSent: true,
            messageReceived: true,
            messageSeen: false,
            lastConnection: Date,
        },
        'ID4' : {
            contactName: 'Manager',
            lastMessage: 'I want to learn code',
            messageSent: true,
            messageReceived: true,
            messageSeen: false,
            lastConnection: Date,
        }
    },
    search: '',
    sort: 'contactName'
}