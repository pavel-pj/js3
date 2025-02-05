class Url {

    constructor (url2) {

        this.url = new URL (url2);



        this.protocol = this.url.protocol.slice(0, this.url.protocol.length -1);



        this.hostname = this.url.hostname;
        this.port = this.url.port;

        const mySearchParams = this.url.searchParams;
        const result ={};
        for (const [key, value] of mySearchParams) {
            result[key] = value
        }

        this.queryParams = result;

    }

    getUrl () {
        return this.url;
    }

    getScheme() {
        return this.protocol
    }

    getHostName() {
        return this.hostname
    }

    getQueryParams( ) {
         return this.queryParams
    }
    getQueryParam(par ,defaultPar = null) {

        if (Object.hasOwn(this.queryParams, par)) {
            return this.queryParams[par];
        } else if (defaultPar) {
            return defaultPar
        }
            return null;

    }

    equals (url) {

        if (!( this.protocol === url.protocol &&
             this.hostname === url.hostname &&
             this.port === url.port )){
            return false;
        }

        for (const item of  Object.keys(this.queryParams)) {

            if(Object.hasOwn(url.queryParams,item) && Object.hasOwn(this.queryParams,item) ){

                if( url.queryParams[item] === this.queryParams[item] ) {

                }  else {
                    return false;
                }

            } else return false
        }

        return true;


    }


}

export default Url;