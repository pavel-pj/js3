class Truncater {

    static defaultOptions = {
        separator: '...',
        length: 200,
    };

    constructor (options = {}) {
         options.length ? this.constructor.defaultOptions.length = options.length : '';
         options.separator ?  this.constructor.defaultOptions.separator = options.separator : '';
    }

    truncate (text, options = {}) {

        const currentOptions = {}

        options.length
            ? currentOptions.length = options.length
            : currentOptions.length = this.constructor.defaultOptions.length

        options.separator
            ? currentOptions.separator = options.separator
            : currentOptions.separator = this.constructor.defaultOptions.separator

        if (currentOptions.length < text.length ) {

           return text.substring(0,currentOptions.length) + currentOptions.separator;
        }

        return text;


    }

}

export default Truncater;