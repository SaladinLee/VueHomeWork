new Vue({
    el: '#app',
    data: {
        input: '',
        itemList: [
            'IPhoneX',
            'Macbook Air',
            'Macbook Pro'
        ],
    },
    methods: {
        addInputItem() {
            this.itemList.push(this.input);
            this.input = '';
        },
        removeClickedItem(index) {
            this.itemList.splice(index, 1);
        }
    }
});