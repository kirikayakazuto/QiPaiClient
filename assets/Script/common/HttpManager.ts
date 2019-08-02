class HttpManager {
    public Get(url: string, callback: Function){
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                var respone = xhr.responseText;
                callback(null, respone);
            }
        };
        xhr.open("GET", url, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
 
        xhr.timeout = 5000;
        xhr.send();

    }
    public Post(url, body, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.timeout = 5000;
        
        xhr.open("POST",url, true);
        if (cc.sys.isNative){
            xhr.setRequestHeader("Accept-Encoding","gzip,deflate");
        }

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Content-Length", body.length);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)){
                let ret = xhr.responseText;
                callback(null, ret);
            }
        };
        xhr.send(body);
    }

}

export default new HttpManager();