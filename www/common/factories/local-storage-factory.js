function localStorageFactory($window) {
    return {
        setItem: function (key, value) {
            $window.localStorage[key] = value;
        },
        getItem: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key) {
            return JSON.parse($window.localStorage[key] || '{}');
        },
        getObjectWithDefault: function (key, withDefault) {
            return JSON.parse($window.localStorage[key] || JSON.stringify(withDefault));
        },
        removeObject: function (key) {
            $window.localStorage.removeItem(key);
        },
        clear: function () {
            $window.localStorage.clear();
        }
    }
}

localStorageFactory.$inject = ['$window'];

app.factory('$localStorage', localStorageFactory);