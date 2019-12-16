cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-voxeet.VoxeetSDK",
      "file": "plugins/cordova-plugin-voxeet/www/VoxeetSDK.js",
      "pluginId": "cordova-plugin-voxeet",
      "clobbers": [
        "VoxeetSDK"
      ]
    },
    {
      "id": "cordova-plugin-voxeet.VoxeetMedia",
      "file": "plugins/cordova-plugin-voxeet/www/VoxeetMedia.js",
      "pluginId": "cordova-plugin-voxeet",
      "clobbers": [
        "VoxeetMedia"
      ]
    },
    {
      "id": "cordova-plugin-voxeet.UserInfo",
      "file": "plugins/cordova-plugin-voxeet/www/UserInfo.js",
      "pluginId": "cordova-plugin-voxeet",
      "clobbers": [
        "UserInfo"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-voxeet": "1.3.16",
    "cordova-plugin-whitelist": "1.3.4"
  };
});