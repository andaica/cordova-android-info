# cordova-android-info
```
cordova plugin add https://github.com/andaica/cordova-android-info.git
```

## Build your first Cordova plugin
### Step 1: Determine what you want your plugin to do
- ex: plugin name "DeviceInfoPlugin" and id "cordova-android-info"
### Step 2: Create the plugin skeleton
```
plugman create --name DeviceInfoPlugin --plugin_id cordova-android-info --plugin_version 0.0.1
```
### Step 3: Design the JS interface
- interface of js function you will call. Ex:
```
var exec = require('cordova/exec');

exports.getDeviceInfo = function (arg0, success, error) {
    exec(success, error, 'DeviceInfoPlugin', 'getDeviceInfo', [arg0]);
};
```
### Step 4: Implement the native functionality
```
plugman platform add --platform_name android
```
- When the command completes, your folder structure should now look like this:
```
DeviceInfoPlugin/
|- plugin.xml
|- src/
|  \- android/
|     \- DeviceInfoPlugin.java
\- www/
   \- DeviceInfoPlugin.js
```
- add the following middle line to plugin.xml (with XXX is android permission):
```
<config-file parent="/*" target="AndroidManifest.xml">
    <uses-permission android:name="android.permission.XXXXX"/>
</config-file>
```
### Step 5 (optional): Publish the plugin to NPM
```
plugman createpackagejson .
```
- If everything looks right, you are ready to publish!
```
npm publish .
```