<template>
    <div>
        <Navbar/>
        <div class="item">
            <div v-if="this.user.role === 'admin'" class="edit">
                <a :href="this.id + '/edit'">
                    <img src="@/assets/edit_btn.svg" alt="">
                </a>
            </div>
            <div class="info">
                <h1>{{ singleItem.name }}</h1>
                <h2>{{ singleItem.author }}</h2>
                <h3>Issue: {{ singleItem.issue }}</h3>
                <h3>Publisher: {{ singleItem.publisher }}</h3>
            </div>
            <div class="pic">
                <img :src="'http://localhost:8000/' + singleItem.image" alt="oopsie">
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapActions, mapState } from 'vuex';
export default {
    name: 'SingleComic',
    props:{
    },
    components:{
        Navbar,

    },
    data() {
        return {
            id: null,
        }
    },
    mounted() {
        if (localStorage.token) {
            this.setToken(localStorage.token);
        }
    },
    computed: {
        ...mapState([
            'token',
            'user',
            'singleItem'
        ])
    },
    mounted() {
        this.id = this.$route.params.id; 
        this.fetchComic(this.id);
    },
    methods: {
        ...mapActions([
            'fetchComic'
        ])
    }

}
</script>

<style scoped>
.item{
    display: flex;
    margin-top: 50px;
    margin-left: 25%;
    margin-right: 20%;
    opacity: 0;
    animation: elem 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    animation-delay: 0.3s;
}
@keyframes elem {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }

    to {
        transform: translateY(0px);
        opacity: 100;
    }

}
.item .edit{
    position: absolute;
    margin-top: 45px;
    margin-left: -90px;
}

.item .edit img {
    width: 50px;
    border: dashed;
        color: black;
        padding: 5px;
}
.item .pic{
    width: 50vw;
}
.item .info {
    z-index: -10;
    border: solid;
    padding: 20px;
    width: 50vw;
    height: max-content;
    text-align: justify;
    margin-top: 40px;

}
.item .info h1 {
    color: black;
    font-weight: bold;
}
.item .info h2{
    color: gray;
}
.item .info h3 {
    font-size: 18px;
}
.item .pic img{
    max-width: 300px;
}
</style>