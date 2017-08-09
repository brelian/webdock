module.exports = {
    list: {
        args: {},
        path: 'lists',
        method: 'GET',
        single: false
    },
    create: {
        args: {},
        path: 'lists',
        method: 'POST',
        single: false
    } ,
    find: {
        args: {},
        path: 'lists/search',
        method: 'GET',
        single: false
    },
    get: {
        args: {'id': null},
        path: 'lists/${id}',
        method: 'GET',
        single: true
    },
    update: {
        args: {'id': null},
        path: 'lists/${id}',
        method: 'PUT',
        single: false
    },
    delete: {
        args: {'id': null},
        path: 'lists/${id}',
        method: 'DELETE',
        single: true
    },
    contactsByList: {
        args: {'id': null},
        path: 'lists/${id}/contacts',
        method: 'GET',
        single: true
    },
    assign: {
        args: {'id': null},
        path: 'lists/${id}/contacts',
        method: 'PUT',
        single: false
    },
    unassign: {
        args: {'id': null},
        path: 'lists/${id}/contacts',
        method: 'DELETE',
        single: true
    }
};