module.exports = {
    invioces: {
        args: {},
        path: 'invoices',
        method: 'GET',
        single: false
    },
    statsMessages: {
        args: {},
        path: 'stats/messaging',
        method: 'GET',
        single: false
    },
    statsSpending: {
        args: {},
        path: 'stats/spending',
        method: 'GET',
        single: false
    },
    timezones: {
        args: {},
        path: 'timezones',
        method: 'GET',
        single: false
    },
    info: {
        args: {},
        path: 'user',
        method: 'GET',
        single: false
    },
    update: {
        args: {'id': null},
        path: 'user',
        method: 'PUT',
        single: false
    },
    invite: {
        args: {},
        path: 'subaccounts',
        method: 'POST',
        single: false
    }
};