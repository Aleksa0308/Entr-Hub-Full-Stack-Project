<template>
    <div class="card">
        <ul>
            <li><h2>{{title}}</h2></li>
            <li><h3>{{ content | shortText}} </h3></li>
            <li><h4>Auhtor: {{author}}</h4></li>
            <li><button id="read-btn" @click="openDiscussion">READ MORE</button></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "DiscussCard",
    props:{
        id: null,
        title: null,
        content: null,
        author: null,
    },
    filters: {
        shortText(value) {
            if (value.length < 30) {
                return value;
            }
            return value.slice(0, 30) + '...'
        }
    },
    mounted(){
        
    },
    methods:{
        openDiscussion(){
            this.$router.push(`/discuss/${this.id}`)
        }
    }
}
</script>

<style scoped>
.card{
    width: auto;
    min-height:125px;
    border: solid;
    border-width: 1px;
    border-radius: 0px;
    padding-top: 10px;
    padding-bottom: 45px;
    margin-top: 15px;
}
.card ul{
    list-style: none;
    text-align: justify;
}
.card li h2{
    color: black;
    font-size: 24px;
    font-weight: bold;
}
.card li h3 {
    font-size: 18px;
    color: grey;
}
.card li h4 {
    font-size: 16px;
    color: grey;
    font-style: italic;
}
.card #read-btn {
    border-width: 1px;
    min-width: 120px;
    min-height: 40px;
    background-color: white;
    transition: 0.4s;
    font-size: 14px;
    right: 0;
    margin-right: 20px;
    position: absolute;
}

.card #read-btn:hover {
    color: white;
    background-color: rgb(53, 53, 53);
}
</style>