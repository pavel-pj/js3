export default (value) => ({
        value,
        valueOf() {
                return `Value is ${this.value}`;
        },
})

export default solution