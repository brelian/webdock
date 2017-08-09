module.exports = {
    list: {
        args: {},
        path: 'schedules',
        method: 'GET',
        single: false
    },
    get: {
        args: {'id': null},
        path: 'schedules/${id}',
        method: 'GET',
        single: true
    },
    delete: {
        args: {'id': null},
        path: 'schedules/${id}',
        method: 'DELETE',
        single: true
    }
};