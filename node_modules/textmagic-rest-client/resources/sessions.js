module.exports = {
    get: {
        args: {'id': null},
        path: 'sessions/${id}',
        method: 'GET',
        single: true
    },
    delete: {
        args: {'id': null},
        path: 'sessions/${id}',
        method: 'DELETE',
        single: true
    },
    messages: {
        args: {},
        path: 'sessions/${id}/messages',
        method: 'GET',
        single: true
    }
};