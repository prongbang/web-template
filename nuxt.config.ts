// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    imports: {
        autoImport: true,
        dirs: [
            // ... or scan all modules within given directory
            'composables/**'
        ],
    },
    typescript: {
        strict: true
    },
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
    },
    modules: [
        '@nuxt/devtools',
    ],
})
