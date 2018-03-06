var exec = require('cordova/exec');

exports.getDeviceInfo = function (arg0, success, error) {
    exec(success, error, 'cordova-android-info', 'getDeviceInfo', [arg0]);
};
