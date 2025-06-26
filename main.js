const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Stylish and comfortable boots for handsome')
        
        return {
            product,
            description
            
        }
    }

}).mount('#app')