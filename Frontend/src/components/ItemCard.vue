<template>
    <div>
        <a :href="pathSingle">
        <div class="item-card">
            <img id="cover" :src="fullImage" alt="">
            <div id="tekst">
                <h1 id="title">{{title}}</h1>
                <h2 id="desc">{{desc}}</h2>
            </div>
        </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ItemCard',
    props:{
        id: null,
        pathSingle: null,
        image: null,
        fullImage: null,
        title:null,
        desc: null
    },
    method:{
        
    },
    mounted(){
        this.fullImage = "http://localhost:8000/" + this.image;
        this.pathSingle = this.$router.currentRoute.path + "/" + this.id
    }
}
</script>

<style scoped>
.item-card{
    margin-left: 20px;
    margin-bottom: 20px;
    max-width: 181px;
    text-align: justify;
    background-color: white;
    /*border-radius: 8px;*/
    border: solid;
    border-width: 1px;
    border-color: black;

    /*box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.1);*/
    transition: 1s;
    
}
.item-card:hover{
    transform: scale(1.05);
}
.item-card #tekst{
    padding: 10px;
}

a{
    text-decoration: none;
}

.item-card img{
    width: 180px;
}
.item-card h1 {
    color: black;
    font-size: 22px;
    font-weight: bold;
}

.item-card h2 {
    font-size: 18px;
    color: grey;
}

@media (max-width: 660px) {
    .item-card img{
        width: 250px;
    }
    .item-card{
        max-width: 250px;
    }
}
</style>