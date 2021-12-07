// this file isnt transpiled so must use common js and ESS

//Register babel to transpile before our tests run

require('@babel/register')();

//disable webpack features that Mocha doesn't understand.

require.extensions['.css'] = function() {};
