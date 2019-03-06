Package.describe({
   name: 'red62labs:two-factor',
   version: '1.3.0',
   summary: 'Two-factor authentication for accounts-password',
   git: 'https://github.com/red62labs/meteor-two-factor.git',
   documentation: 'README.md'
});

Package.onUse((api) => {
   api.versionsFrom('1.2.1');
   api.use(['ecmascript', 'check']);
   api.use('reactive-dict', 'client');
   api.use('accounts-password', ['client', 'server']);
   api.addFiles('common.js');
   api.addFiles('client.js', 'client');
   api.addFiles('server.js', 'server');
   api.export('twoFactor');
});

Package.onTest((api) => {
   api.use('ecmascript');
   api.use('tinytest');
   api.use('dburles:two-factor');
   api.addFiles('tests.js');
});
