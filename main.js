const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Stylish and comfortable boots for handsome')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/')

        return {
            product,
            description,
            image,
            link
            
        }
    }

}).mount('#app')