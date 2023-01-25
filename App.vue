<template>
  <div class="container">
    <search-a />
    <list-a />

</div>
    
</template>

<script>
import ListA from './components/ListA'
import SearchA from './components/SearchA'
    export default {
        components: { ListA, SearchA },
        name:'App'
    }
</script>

