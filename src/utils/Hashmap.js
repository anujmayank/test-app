// Hash map
export default class HashMap {
    constructor() {
        this.data = {};
    }

    getItem(id) {
        return this.data[id];
    }

    setItem(id, value) {
        if(this.data[id]){
            this.data[id].push(value);
        }else{
            this.data[id] = [value];
        }
    }

    getAllItems() {
        const temp = [];
        for (let i = 0, keys = Object.keys(this.data); i < keys.length; i++) {
            temp.push(this.data[keys[i]]);
        }
        return temp;
    }

    removeItem(id) {
        delete this.data[id];
    }

    removeAllItems() {
        const props = Object.getOwnPropertyNames(this.data);
        props.forEach((item) => {
            delete this.data[item];
        });
    }
}
