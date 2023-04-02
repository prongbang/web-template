// https://nuxt.com/docs/guide/directory-structure/composables

export const useFoo = () => {
    return useState('foo', () => 'bar')
}
