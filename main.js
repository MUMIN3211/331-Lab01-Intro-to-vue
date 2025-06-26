const { createApp, ref , computed} = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('Stylish and comfortable boots for handsome')
        //const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th/')
        //const inStock = ref(false)
        const inventory = ref(100)
        //const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234,color: 'green',image: './assets/images/socks_green.jpg', quantity: 50},
            { id: 2235,color: 'blue',image: './assets/images/socks_blue.jpg', quantity: 0},
        ])
        const selectedVariant = ref(0)

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const sizes = ref(['S','M', 'L'])
        const cart = ref(0)

        function addToCart() {
            cart.value += 1
        }

        const title = computed(() => {
            return brand.value + ' ' + product.value
        })

        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        
        const onSale = computed(() => {
        return variants.value[selectedVariant.value].quantity > 0
        })

        const saleMessage = computed(() => {
        if (onSale.value) {
            return `${brand.value} ${product.value} is on sale`
        }
        return ''
        })

        function removeFromCart() {
            if (cart.value > 0) {
                cart.value -= 1
            }
        }

        function updateImage(variantImage) {
            image.value = variantImage
        }

        return {
            title,
            description,
            image,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            removeFromCart,
            updateImage,
            updateVariant,
            saleMessage
            
        }
    }

}).mount('#app')