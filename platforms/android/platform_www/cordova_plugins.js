cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "phonegap-plugin-push.PushNotification",
      "file": "plugins/phonegap-plugin-push/www/push.js",
      "pluginId": "phonegap-plugin-push",
      "clobbers": [
        "PushNotification"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-buildinfo.BuildInfo",
      "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
      "pluginId": "cordova-plugin-buildinfo",
      "clobbers": [
        "BuildInfo"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification_android",
      "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-whitelist.whitelist",
      "file": "plugins/cordova-plugin-whitelist/whitelist.js",
      "pluginId": "cordova-plugin-whitelist",
      "runs": true
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "phonegap-plugin-mobile-accessibility.mobile-accessibility",
      "file": "plugins/phonegap-plugin-mobile-accessibility/www/mobile-accessibility.js",
      "pluginId": "phonegap-plugin-mobile-accessibility",
      "clobbers": [
        "window.MobileAccessibility"
      ]
    },
    {
      "id": "phonegap-plugin-mobile-accessibility.MobileAccessibilityNotifications",
      "file": "plugins/phonegap-plugin-mobile-accessibility/www/MobileAccessibilityNotifications.js",
      "pluginId": "phonegap-plugin-mobile-accessibility",
      "clobbers": [
        "MobileAccessibilityNotifications"
      ]
    },
    {
      "id": "cordova-launch-review.LaunchReview",
      "file": "plugins/cordova-launch-review/www/launchreview.js",
      "pluginId": "cordova-launch-review",
      "clobbers": [
        "LaunchReview"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-safariviewcontroller.SafariViewController",
      "file": "plugins/cordova-plugin-safariviewcontroller/www/SafariViewController.js",
      "pluginId": "cordova-plugin-safariviewcontroller",
      "clobbers": [
        "SafariViewController"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.istablet.IsTablet",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.istablet/www/istablet.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.istablet",
      "runs": true
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-screen-orientation.screenorientation",
      "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
      "pluginId": "cordova-plugin-screen-orientation",
      "clobbers": [
        "cordova.plugins.screenorientation"
      ]
    },
    {
      "id": "cordova-plugin-actionsheet.ActionSheet",
      "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
      "pluginId": "cordova-plugin-actionsheet",
      "clobbers": [
        "window.plugins.actionsheet"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "clobbers": [
        "launchnavigator"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "clobbers": [
        "localforage"
      ]
    },
    {
      "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
      "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/android/launchnavigator.js",
      "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
      "merges": [
        "launchnavigator"
      ]
    },
    {
      "id": "cordova-plugin-phone-call.phonedialer",
      "file": "plugins/cordova-plugin-phone-call/www/dialer.js",
      "pluginId": "cordova-plugin-phone-call",
      "merges": [
        "cordova.plugins.phonedialer"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-support-google-services": "1.3.2",
    "phonegap-plugin-multidex": "1.0.0",
    "phonegap-plugin-push": "2.3.0",
    "cordova-plugin-statusbar": "2.1.3",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-buildinfo": "4.0.0",
    "cordova-plugin-dialogs": "1.2.1",
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-camera": "4.0.3",
    "cordova-plugin-network-information": "3.0.0-dev",
    "phonegap-plugin-mobile-accessibility": "1.0.5-dev",
    "cordova-launch-review": "3.1.1",
    "cordova-plugin-inappbrowser": "4.0.0",
    "cordova-plugin-wkwebview-engine": "1.2.1",
    "cordova-plugin-wkwebview-file-xhr": "2.1.4",
    "cordova-plugin-safariviewcontroller": "1.6.0",
    "uk.co.workingedge.phonegap.plugin.istablet": "1.2.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-screen-orientation": "3.0.2",
    "cordova-plugin-actionsheet": "2.3.3",
    "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.4",
    "cordova-plugin-phone-call": "1.0.7"
  };
});