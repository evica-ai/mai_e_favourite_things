(() => {
    // set up a vue instance and start using it!

    // vue needs an element to use and some data to render / manage
    const myVue = new Vue({
        //el: "#app",

        data: {
            headline: "Hi from Vue!",
            desc: "Vue is pretty awesome once you get used to it.",
            myImage : "me.jpg",

            faveThings: [
                "Hockey",
                "Golf",
                "Cooking"
            ]
        },

        methods: {
            logClick() {
                // vue methods are the same as named functions in JS
                console.log("you clicked on me!");
            },

            showFaveThing(item) {
                debugger;
                console.log("fave thing button", item);
            }
        }
    }).$mount("#app");
})();