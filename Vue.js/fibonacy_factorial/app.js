var fibonacciComponent = Vue.extend({
    template: '#fibonacci-template',
    data: function() {
        return {
            result: '-'
        }
    },
    methods: {
        fibonacci: function(n) {
            var a = 0, b = 1, c;
            if (n < 3) return 1;
            while (--n)
                c = a + b, a = b, b = c;
            return c;
        }
    },
    computed: {
        calculate: function() {
            if (isNaN(this.n)) {
                return false;
            }
            return this.fibonacci(this.n);
        }
    }
});

var factorialComponent = Vue.extend({
    template: '#factorial-template',
    data: function() {
        return {
            result: '-'
        }
    },
    methods: {
        factorial: function(n) {
            var r = 1;
            for (var i = 2; i <= n; i++) {
                r = r*i;
            }
            return r;
        }
    },
    computed: {
        calculate: function() {
            if (isNaN(this.n)) {
                return false;
            }
            return this.factorial(this.n);
        }
    }

});

/**
 * Register constructor of each components
 */
Vue.component('fibonacci-component', fibonacciComponent);
Vue.component('factorial-component', factorialComponent);

var mathematic = new Vue({
    el: '#mathematic',
    data: {
        title: 'factorial and fibonacci number with javaScript'
    }
});