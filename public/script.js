//console.log(Vue);

new Vue({
    el: '#app',
    data: {
        total: 0
    },
    methods: {
        addItem: function() {
            //console.log('addItem')
            this.total += 9.99;
        }
    }
})