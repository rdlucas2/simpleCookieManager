var CookieManager = (function() {
    function CookieManager() {}

    CookieManager.prototype.createCookie = function(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; Path=/;";
    };

    CookieManager.prototype.getCookie = function(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    };

    CookieManager.prototype.deleteCookie = function(c_name) {
        document.cookie = c_name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    return CookieManager;
})();
