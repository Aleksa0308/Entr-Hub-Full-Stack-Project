<template>
    <div>
        <a :href="pathSingle">
            <div class="item-card">
                <img id="cover" src="@/assets/user-icon.svg" alt="">
                <div id="tekst">
                    <h2 id="title">{{ username }}</h2>
                    <h1 id="desc">{{ content }}</h1>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'ItemCard',
    props: {
        id: null,
        username: null,
        content: null
    },
    method: {

    }
}
</script>

<style scoped>
.item-card {
    display: flex;
    margin-bottom: 20px;
    width: max-content;
    
    text-align: justify;
    background-color: white;
    /*border-radius: 8px;*/
    border: solid;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-width: 1px;
    border-color: black;

    /*box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.1);*/
   

}
.item-card #tekst {
    padding: 10px;
}

a {
    text-decoration: none;
}

.item-card img {
    width: 50px;
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
</style>