Vue.component('example-component-name', {
    template: '<h2 class="subtitle is-size-4">My tasks</h2>'
});

Vue.component('footer-section', {
    template: `<footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                        <p>
                            <strong>WebCoder</strong>
                        </p>
                        <p>
                            <a class="icon has-text-primary" href="https://github.com/webcoder-club/vue-ws-junior">
                                <i class="fa fa-github"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>`
});

Vue.component('todo-item', {
    props: ['todo'],
    data() {
        return {
            resolved: false
        };
    },
    computed: {
        getTextClass: function () {
            return `item has-text-${this.todo.color} ${this.resolved ? 'is-resolved' : ''}`;
        }
    },
    methods: {
        resolve() {
            this.resolved = true;
        }
    },
    template: '<li v-on:click="resolve" class="is-size-5"><span v-bind:class="getTextClass">{{ todo.text }}</span></li>'
});

const DEFAULT_COLOR = 'primary';

let app = new Vue({
    el: '#app',
    data: {
        message: '',
        priority: {
            minor: {name: 'Minor', color: 'gray'},
            medium: {name: 'Medium', color: 'primary'},
            high: {name: 'High', color: 'danger'},
            optional: {name: 'Optional', color: 'info'}
        },
        selectedColor: DEFAULT_COLOR,
        itemList: [
            {id: 1, text: 'Learn HTML & CSS', color: 'primary'},
            {id: 2, text: 'Learn JavaScript', color: 'primary'},
            {id: 3, text: 'Learn VueJS', color: 'primary'}
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
        }
    }
});