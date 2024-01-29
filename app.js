const app = Vue.createApp({

    data(){
        return {
            quote:'Soy batman',
            message: "Hola mundo!!! desde Los confines de mis ser...."
        }
    },
    method:{
        changeQuote(){
            console.log('Hola Mundo')
        }
    }
})


app.mount('#myApp')




