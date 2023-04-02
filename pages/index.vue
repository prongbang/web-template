<template>
    <div>
        <div>Home {{ foo }}</div>

        <div>{{ $hello('world') }}</div>
    </div>
</template>
  
<script setup>
const foo = useFoo()

// alternatively, you can also use it here
const { $hello } = useNuxtApp()

</script>