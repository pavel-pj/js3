class Cart {

    constructor(name) {
      this.name = name;

    }

    items = []

    addItem(item,count) {
        this.items.push( {
            item,
            count
        });
    }
    getItems() {
        return this.items;
    }

    getCost() {
        return this.items.reduce((acc,item)=>{
            acc += item.item.price * item.count;
            return acc;
        },0)
    }

    getCount() {
        return this.items.reduce((acc,item) =>{
           acc += item.count;
           return acc;
        },0);
    }




}
export default Cart