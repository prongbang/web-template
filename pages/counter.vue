<template>
    <div>
        {{ pending ? 'Loading' : count }}
        <button @click="refresh">Refresh</button>
    </div>
    <div>
        Counter: {{ counter }}
        <button @click="counter++">
            +
        </button>
        <button @click="counter--">
            -
        </button>
    </div>
</template>
  
<script setup>

const counter = useState('counter', () => Math.round(Math.random() * 1000))

const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))
watch(count, (newCount) => {
    // Because count starts out null, you won't have access
    // to its contents immediately, but you can watch it.
})

const refresh = () => refreshNuxtData('count')

</script>
  