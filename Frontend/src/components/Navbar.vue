<template>
    <div class="navigacija">
        <ul>
            <div class="dropdown">
                <button class="dropbtn">EXPLORE <img id="arrow" src="@/assets/arrow-down-2-svgrepo-com.svg" alt=""></button>
                <div class="dropdown-content">
                    <a href="/books">BOOKS</a>
                    <a href="/movies">MOVIES</a>
                    <a href="/anime">ANIME</a>
                    <a href="/manga">MANGA</a>
                    <a href="/comicbooks">COMIC BOOKS</a>
                    <a href="/tvshows">TV SHOWS</a>
                    <a href="/games">GAMES</a>
                </div>
            </div>
        </ul>
        <ul>
            <l1><a id="logo" href="/"><img src="@/assets/Entr_logo.png" alt="no img oopsie"></a></l1>
        </ul>
        <ul>
            <l1><a href="/discuss">DISCUSS</a></l1>
        </ul>
        <a v-if="!token" id="log_btn" href="/login">LOG IN</a>
        <div v-else class="dropdown">
            <button id="username" class="dropbtn">{{this.user.username}} <img id="arrow" src="@/assets/arrow-down-2-svgrepo-com.svg" alt=""></button>
            <div class="dropdown-content">
                <a v-if="this.user.role === 'admin'" href="/users">ALL USERS</a>
                <a href="/" @click="logout()">LOG OUT</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
    name: 'Navbar',
    data(){
        return {
            
        }
    },
    mounted(){
        
        if (localStorage.token) {
            this.setToken(localStorage.token);
        }
    },
    computed: {
        ...mapState([
            'token',
            'user'
        ])
    },
    methods:{
        ...mapMutations([
            'removeToken',
            'setToken'
        ]),
        logout() {
            this.removeToken();
        }
    }
}
</script>

<style scoped>
#logo{
    background-color: white;
    width: 80px;
}
#username{
    font-size: 16px;
    
}
.navigacija{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 25px;
    padding-right: 10%;
    padding-left: 25.7%;
    font-size: 14px;
    position: relative;
    z-index: 99;
    animation: navi 5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

@keyframes navi {
    from{
        transform: translateY(-20px);
        opacity: 0;
    }
    to{
        transform: translateY(0px);
        opacity: 100;
    }
    
}
.navigacija img{
    margin-top: -15px;
    width: 100px;
    height: auto;
}


.navigacija a{
    color: black;
    text-decoration: none;
    font-weight: lighter;
}
.navigacija ul{
    text-decoration: none;
    padding: 10px;
}
.navigacija a{
    padding: 15px;
    transition: 0.4s;
}
.navigacija a:hover{
    color: white;
    background-color: rgb(53, 53, 53);
}


.dropbtn {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    padding: 15px;
    border: none;
    cursor: pointer;
    min-width: 120px;
}

.dropdown {
    position: relative;
    display: inline-block;
    z-index: 999;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
   
}

.dropdown-content a {
    color: black;
    padding: auto;
    text-decoration: none;
    display: block;
    transition: 0.3s;
}

.dropdown-content a:hover {
    color: white;
    background-color: rgb(53, 53, 53);
}

.dropdown:hover .dropdown-content {
    display: block;
}
#arrow {
    height: auto;
    width: 20px;
    transition: 0.2s;
    transform-origin: center;
}
.dropdown:hover .dropbtn #arrow{
    transform: rotate(180deg);
}

.navigacija #log_btn{
    border: solid;
    border-width: 1px;
    min-width: 120px;
    min-height: 30px;
    background-color: white;
    transition: 0.4s;
}
.navigacija #log_btn:hover {
    color: white;
    background-color: rgb(53, 53, 53);
    cursor: pointer;
}

@media (max-width: 660px) {
    .navigacija{
        padding-left: 80px;
    }
}
</style>