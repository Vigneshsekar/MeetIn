cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.microsoft.azure-mobile-services/www/MobileServices.Web.Ext.js",
        "id": "com.microsoft.azure-mobile-services.AzureMobileServices.Ext",
        "runs": true
    },
    {
        "file": "plugins/com.microsoft.azure-mobile-services/www/MobileServices.Web.js",
        "id": "com.microsoft.azure-mobile-services.AzureMobileServices",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.1.0",
    "com.microsoft.azure-mobile-services": "1.2.9",
    "cordova-plugin-geolocation": "1.0.1",
    "cordova-plugin-network-information": "1.0.1",
    "org.apache.cordova.inappbrowser": "0.6.0"
}
// BOTTOM OF METADATA
});