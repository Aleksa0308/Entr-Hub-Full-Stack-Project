<template>
    <div>
        <h1><span>[ERROR]</span>: YOU DONT HAVE <span>PERMISSION</span> TO VIEW THIS PAGE!</h1>
    </div>
</template>

<script>
export default {
    name: 'PermissionError'
}
</script>

<style scoped>
span{
    color: red;
    font-weight: bold;
}
h1{
    color: black;
}
</style>