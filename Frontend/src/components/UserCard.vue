<template>
    <div>
        <a :href="pathSingle">
            <div class="item-card">
                <div id="tekst">
                    <img src="@/assets/user-icon.svg" alt="">
                    <h1 id="title">{{ title }}</h1>
                    <h2 id="desc">{{ desc }}</h2>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        id: null,
        pathSingle: null,
        title: null,
        desc: null
    },
    method: {

    },
    mounted() {
        this.pathSingle = this.$router.currentRoute.path + "/" + this.id
    }
}
</script>

<style scoped>
.item-card {
    margin-left: 20px;
    margin-bottom: 20px;
    max-width: 181px;
    text-align: justify;
    background-color: white;
    border-radius: 8px;
    border: solid;
    border-color: white;
    box-shadow: 0px 8px 25px 0px rgba(0, 0, 0, 0.1);
    transition: 1s;

}

.item-card:hover {
    transform: scale(1.05);
}

.item-card #tekst {
    padding: 10px;
}

a {
    text-decoration: none;
}

.item-card img {
    width: 80px;
    margin-left: -15px;
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