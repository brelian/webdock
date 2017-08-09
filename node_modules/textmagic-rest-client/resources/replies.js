module.exports = {
    list: {
        args: {},
        path: 'replies',
        method: 'GET',
        single: false
    },
    find: {
        args: {},
        path: 'replies/search',
        method: 'GET',
        single: false
    },
    get: {
        args: {'id': null},
        path: 'replies/${id}',
        method: 'GET',
        single: true
    },
    delete: {
        args: {'id': null},
        path: 'replies/${id}',
        method: 'DELETE',
        single: true
    }
};