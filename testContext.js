import 'angular';
import 'angular-mocks';
const context = require.context('./cff', true, /\.spec\.js$/);
context.keys().forEach(context);
