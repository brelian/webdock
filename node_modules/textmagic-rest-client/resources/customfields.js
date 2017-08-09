module.exports = {
    list: {
        args: {},
        path: 'customfields',
        method: 'GET',
        single: false
    },
    create: {
        args: {},
        path: 'customfields',
        method: 'POST',
        single: false
    } ,
    get: {
        args: {'id': null},
        path: 'customfields/${id}',
        method: 'GET',
        single: true
    },
    update: {
        args: {'id': null},
        path: 'customfields/${id}',
        method: 'PUT',
        single: false
    },
    delete: {
        args: {'id': null},
        path: 'customfields/${id}',
        method: 'DELETE',
        single: true
    },
    updateForContact: {
        args: {'id': null},
        path: 'customfields/${id}/update',
        method: 'PUT',
        single: false
    }
};