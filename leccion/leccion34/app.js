const app = Vue.createApp({

    data(){
        return {
            quote:'soy batman',
            message: "Hola mundo!!! desde Los confines de mis ser...."
        }
    },
    methods: {
        changeQuote( event){
            console.log('Hola Mundo', event)
            this.geUpperCase()
        }, // end func
        geUpperCase(){
            this.quote = this.quote.toUpperCase()

        }
    }// end method
})


app.mount('#myApp')




