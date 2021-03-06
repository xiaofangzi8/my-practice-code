(function (exports){
    var STORAGE_KEY = "todomvc-vue";
    exports.todoStorage = {
        fetch: function () {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        },
        save: function (todos){
            localStorage.setItem(STORAGE_KEY,JSON.stringify(todos));
        }
    };
})(window);

export default todoStorage;