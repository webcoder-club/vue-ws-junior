Vue.component('example-component-name', {
    template: '<h2 class="subtitle">Example Component</h2>'
});

Vue.component('todo-item', {
    props: ['todo'],
    computed: {
        getTextClass: function () {
            return 'has-text-' + this.todo.color;
        }
    },
    template: '<li class="is-size-5"><span v-bind:class="getTextClass">{{ todo.text }}</span></li>'
});

const DEFAULT_COLOR = 'primary';

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        colors: [
            'primary',
            'info',
            'success',
            'warning',
            'danger'
        ],
        selectedColor: DEFAULT_COLOR,
        itemList: [
            {id: 1, text: 'Learn HTML & CSS', color: 'primary'},
            {id: 2, text: 'Learn JavaScript', color: 'primary'},
            {id: 3, text: 'Learn VueJS', color: 'primary'},
            {id: 4, text: 'Build something amazing', color: 'info'},
        ],
    },
    methods: {
        add: function (event) {
            if (this.message.trim() !== '') {
                this.itemList.push({
                    text: this.message,
                    color: this.selectedColor,
                });
            }
            this.message = '';
            this.selectedColor = DEFAULT_COLOR;
        }
    }
});