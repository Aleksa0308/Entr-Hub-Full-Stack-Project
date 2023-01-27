<template>
    <div>
        
        <div class="error" v-if="this.user.role !== 'admin'">
            <PermissionError />
        </div>
        <Navbar />
        <div v-if="this.user.role === 'admin'" class="edit">
            <form @submit="onSubmit">
                <label for="title">TITLE:</label>
                <input v-model="form.title" type="text"  name="title" required>
                <label for="genre">GENRE:</label>
                <input v-model="form.genre" type="text" name="genre"  required>
                <label for="episodes">EPISODES:</label>
                <input v-model="form.episodes" type="number" name="episodes"  required>
                <label for="rating">RATING:</label>
                <input v-model="form.rating" type="number" name="rating"  required>
                <input type="submit" value="UPDATE" id="submit-btn">
            </form>
            <input type="submit" @click="deleteOne()" value="DELETE" id="delete-btn">
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import PermissionError from '@/components/PermissionError.vue';
import { mapActions, mapState } from 'vuex';
export default {
    name:'EditTvShow',
    components:{
        Navbar,
        PermissionError
    },
    data() {
        return {
            id: 0,
            form: {
                title: '',
                genre: '',
                episodes: '',
                rating: ''
            }
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
        this.fetchTvShow(this.id);
        this.form.title = this.singleItem.title
        this.form.episodes = this.singleItem.episodes
        this.form.genre = this.singleItem.genre
        this.form.rating = this.singleItem.rating
    },
    methods: {
        ...mapActions([
            'fetchTvShow',
            'updateTvShows',
            'deleteTvShows'
        ]),
        onSubmit(e) {
            e.preventDefault();
            this.id = this.$route.params.id;
            this.updateTvShows({obj: this.form, id: this.id});
            this.$router.push({ name: 'tvShows' });
        },
        deleteOne(){
            var result = window.confirm("Are you sure you want to delete this TV Show?")
            if (result) {
                this.id = this.$route.params.id;
                this.deleteTvShows(this.id);
                this.$router.push({ name: 'tvShows' })
                    .then(() => { this.$router.go() });
            }
        }
    }
}
</script>

<style scoped>
label{
    font-weight: bold;
    font-size: 14px;
}
input{
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
    
}
textarea{
    border: 2px solid black
}
.error{
    position: absolute;
    width: 100vw;
    height: 100vh;
    padding-top: 20%;
    background-color: white;
    z-index: 1;
}
.error span{
    color: red;
    font-weight: bold;
}
.edit{
    margin-left: 37%;
    margin-right: 37%;
    margin-top: 40px;
    align-items: center;
    border: dashed;
    display: block;
    padding: 20px;
    opacity: 0;
    animation: elem 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    animation-delay: 0.3s;

}

form{
    display: block;
    width: 300px;
    padding-left: 60px;
    padding-right: 50px;
    text-align: justify;
}

#submit-btn {
    border: solid;
    border-width: 1px;
    width: 200px;
    min-height: 30px;
    margin-top: 10px;
    padding: 8px;
    background-color: rgb(67, 67, 67);
    transition: 0.4s;
    color: white;
}

#submit-btn:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(111, 111, 111);
    cursor: pointer;
}
#delete-btn {
    border: solid;
    border-width: 1px;
    width: 200px;
    min-height: 30px;
    margin-top: 10px;
    padding: 8px;
    margin-right: 10px;
    background-color: rgb(252, 64, 64);
    transition: 0.4s;
    color: white;
}

#delete-btn:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(255, 88, 88);
    cursor: pointer;
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