module.exports = {
    bulks: {
        args: {},
        path: 'bulks',
        method: 'GET',
        single: false
    },
    bulk: {
        args: {},
        path: 'bulks/${id}',
        method: 'GET',
        single: true
    },
    chats: {
        args: { },
        path: 'chats',
        method: 'GET',
        single: false
    },
    chat: {
        args: {
            phone: null
        },
        path: 'chats/${phone}',
        method: 'GET',
        single: false
    },
    list: {
        args: {},
        path: 'messages',
        method: 'GET',
        single: false
    },
    send: {
        args: {},
        path: 'messages',
        method: 'POST',
        single: false
    } ,
    price: {
        args: {},
        path: 'messages/price',
        method: 'GET',
        single: false
    },
    find: {
        args: {},
        path: 'messages/search',
        method: 'GET',
        single: false
    },
    get: {
        args: {'id': null},
        path: 'messages/${id}',
        method: 'GET',
        single: true
    },
    delete: {
        args: {'id': null},
        path: 'messages/${id}',
        method: 'DELETE',
        single: true
    },
    Replies: '/resources/replies.js',
    Schedules: '/resources/schedules.js',
    Sessions: '/resources/sessions.js'
};