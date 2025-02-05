class PasswordValidator {

    constructor ( obj = {} ) {

    if (!Object.hasOwn(obj,'containNumbers')) {
        this.containNumbers = true
    } else {
        this.containNumbers = obj.containNumbers
    }

    if (!Object.hasOwn(obj,'minLength')) {
        this.minLength = 8
    } else {
        this.minLength = obj.minLength
    }

    this.errors = {};

    }

    validate ( password) {
        this.errors = {}
        if( this.containNumbers === true ) {
            if (!hasNumber(password)) {
                this.errors.containNumbers = 'should contain at least one number';
            }
        }

        if(password.length < this.minLength) {
            this.errors.minLength = 'too small';

        }

         return this.errors ;

    }

}
const hasNumber = (string) => (string.search(/\d/) !== -1);
export default PasswordValidator;