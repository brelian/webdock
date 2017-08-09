module.exports = {
    list: {
        args: {},
        path: 'senderids',
        method: 'GET',
        single: false
    },
    create: {
        args: {},
        path: 'senderids',
        method: 'POST',
        single: false
    },
    get: {
        args: {'id': null},
        path: 'senderids/${id}',
        method: 'GET',
        single: true
    },
    delete: {
        args: {'id': null},
        path: 'senderids/${id}',
        method: 'DELETE',
        single: true
    }
};