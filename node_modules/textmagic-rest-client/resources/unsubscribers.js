module.exports = {
    list: {
        args: {},
        path: 'unsubscribers',
        method: 'GET',
        single: false
    },
    create: {
        args: {},
        path: 'unsubscribers',
        method: 'POST',
        single: false
    } ,
    get: {
        args: {'id': null},
        path: 'unsubscribers/${id}',
        method: 'GET',
        single: true
    }
};