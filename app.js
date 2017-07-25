Vue.component('example-component-name', {
    template: '<h2 class="subtitle">Example Component</h2>'
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        itemList: [
            {text: 'Learn HTML & CSS'},
            {text: 'Learn JavaScript'},
            {text: 'Learn VueJS'},
            {text: 'Build something amazing'},
        ]
    },
    methods: {
        add: function (event) {
            this.itemList.push({ text: this.message });
            this.message = '';
        }
    }
});