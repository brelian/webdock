module.exports = {
    list: {
        args: {},
        path: 'contacts',
        method: 'GET',
        single: false
    },
    create: {
        args: {},
        path: 'contacts',
        method: 'POST',
        single: false
    } ,
    find: {
        args: {},
        path: 'contacts/search',
        method: 'GET',
        single: false
    },
    get: {
        args: {'id': null},
        path: 'contacts/${id}',
        method: 'GET',
        single: true
    },
    update: {
        args: {'id': null},
        path: 'contacts/${id}',
        method: 'PUT',
        single: false
    },
    delete: {
        args: {'id': null},
        path: 'contacts/${id}',
        method: 'DELETE',
        single: true
    },
    contactLists: {
        args: {'id': null},
        path: 'contacts/${id}/lists',
        method: 'GET',
        single: false
    },
    Customfields: '/resources/customfields.js',
    Unsubscribers: '/resources/unsubscribers.js'
};