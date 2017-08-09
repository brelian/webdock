module.exports = {
    list: {
        args: {},
        path: 'numbers',
        method: 'GET',
        single: false
    },
    create: {
        args: {},
        path: 'numbers',
        method: 'POST',
        single: false
    },
    find: {
        args: {},
        path: 'numbers/available',
        method: 'GET',
        single: false
    },
    get: {
        args: {'id': null},
        path: 'numbers/${id}',
        method: 'GET',
        single: true
    },
    cancel: {
        args: {'id': null},
        path: 'numbers/${id}',
        method: 'DELETE',
        single: true
    }
};