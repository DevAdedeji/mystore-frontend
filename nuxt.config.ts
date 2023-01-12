export default defineNuxtConfig({
    ssr:false,
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    },
    buildModules: [
        ['@pinia/nuxt', { disableVuex: true }]
    ],
    css:[
        '@/assets/css/tailwind.css'
    ],
    plugins:['@/plugins/vue-toastification']
})
