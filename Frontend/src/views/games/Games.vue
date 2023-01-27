<template>
    <div>
        <Navbar />
    <div class="books">
        <a v-if="this.user.role ==='admin'" href="games/admin/add">
        <div class="add" >
            <img src="@/assets/add-plus.svg" alt="">
        </div>
        </a>
        <div class="elements">
            <div v-for="gam in games" :key="gam.id">
                <ItemCard :title="gam.name" :image="gam.image" :desc="gam.genre" :id="gam.id"/>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ItemCard from '@/components/ItemCard.vue'
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
    name: 'Games',
    components: {
        Navbar,
        ItemCard
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
            'games'
        ])
    },
    mounted() {
        this.fetchGames();
    },
    methods: {
        ...mapActions([
            'fetchGames'
        ])
    }
}
</script>


<style scoped>
.books .elements{
    display: flex;
    flex-wrap: wrap;
}
.add {
    margin-left: -200px;
    border: dashed;
    border-width: 1px;
    border-color: black;
    padding: 10px;
    width: 180px;
    height: 270px;
    position: absolute;
}

.add:hover {
    opacity: 0.6;
}

.add img {
    width: 50px;
    margin-top: 50%;
    opacity: 0.9;
}
.books{
    margin-left: 28.5%;
        margin-right: 28.5%;
        margin-top: 40px;
        opacity: 0;
        animation: elem 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
        animation-delay: 0.3s;
        display: inline-flex
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
</style>