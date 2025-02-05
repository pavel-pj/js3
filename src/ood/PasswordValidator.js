class PasswordValidator {

    constructor ( options = {} ) {

        const defaultOptions ={
            minlength : 8,
            containNumbers : true
        }

        this.options = {...defaultOptions, ...options}


    }

    validate ( password) {
        //return this.options

         const errors = {}
        if( this.options.containNumbers === true ) {
            console.log('asdf')
            if (!hasNumber(password)) {
                 errors.containNumbers = 'should contain at least one number';
            }
        }

        if(password.length < this.options.minlength) {
             errors.minLength = 'too small';

        }

         return  errors ;

    }

}
const hasNumber = (string) => (string.search(/\d/) !== -1);
export default PasswordValidator;