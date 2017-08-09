module.exports = {
    list: {
        args: {},
        path: 'templates',
        method: 'GET',
        single: false
    },
    create: {
        args: {},
        path: 'templates',
        method: 'POST',
        single: false
    } ,
    find: {
        args: {},
        path: 'templates/search',
        method: 'GET',
        single: false
    },
    get: {
        args: {'id': null},
        path: 'templates/${id}',
        method: 'GET',
        single: true
    },
    update: {
        args: {'id': null},
        path: 'templates/${id}',
        method: 'PUT',
        single: false
    },
    delete: {
        args: {'id': null},
        path: 'templates/${id}',
        method: 'DELETE',
        single: true
    }
};