<template>
    <div>
        <Navbar />
        <div class="item">
            
            <div class="info">
                <h1>{{ singleItem.title }}</h1>
                <h2>{{ singleItem.content }}</h2>
                <h3>Author: {{ singleItem.author }}</h3>
                <h3>Date: {{ singleItem.createdAt }}</h3>
            </div>
            <div v-if="token">
                <form @submit="postComment">
                    <div class="forma">
                        <div>
                    <label for="kom">POST A COMMENT:</label>
                    </div>
                    <input v-model="form.content" type="text" name="content" required>
                    <input type="submit" value="POST" id="submit-btn">
                    </div>
                    
                </form>
            </div>
            <div v-else class="else">
                <h1>TO BE ABLE TO COMMENT YOU NEED TO HAVE AN ACCOUNT!</h1>
                <button id="reg-btn" @click="reg">REGISTER</button>
            </div>
            <div class="comments">
                <div v-for="comment in comments" :key="comment.id">
                    <CommentCard :username="comment.author" :content="comment.content"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CommentCard from '@/components/CommentCard.vue';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'SingleDiscuss',
    props: {
    },
    components: {
        Navbar,
        CommentCard,

    },
    data() {
        return {
            id: null,
            form:{
                author: '',
                id: null,
                content: ''
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
            'singleItem',
            'comments'
        ])
    },
    mounted() {
        this.id = this.$route.params.id;
        this.fetchDiscuss(this.id);
        this.fetchComments(this.id);
        this.form.author = this.user.username
        this.form.id = this.id
    },
    methods: {
        ...mapActions([
            'fetchDiscuss',
            'fetchComments',
            'postComments'
        ]),
        postComment(e){
            e.preventDefault();
            this.postComments({ obj: this.form, id: this.id })
            this.$router.go()
        },
        reg(){
            this.$router.push('/register')
        }
    }

}
</script>

<style scoped>
#reg-btn{
    
        border: solid;
        border-width: 1px;
        width: 200px;
        min-height: 30px;
        margin-top: 10px;
        padding: 8px;
        background-color: rgb(9, 107, 178);
        transition: 0.4s;
        color: white;
}
#reg-btn:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(139, 180, 255);
    cursor: pointer;
}
.else{
    margin-top: 20px;
    margin-right: 8%;
    border: dashed;
    padding: 20px;
}
.else h1{
    font-size: 20px;
}
input {
    width: 50%;
    border: solid;

}
#submit-btn {
    display: block;
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
.forma{
    border: dashed;
    padding: 15px;
    margin-top: 20px;
    margin-right: 9%;
    text-align: justify;
    display: block;
}
.comments{
    z-index: -10;
        border: solid;
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
        padding: 20px;
        width: 50vw;
        height: max-content;
        text-align: justify;
        margin-top: 40px;
}
.item {
    display: block;
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

.item .edit {
    position: absolute;
    margin-top: 45px;
    margin-left: -90px;
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

.item .info h2 {
    color: gray;
}

.item .info h3 {
    font-size: 18px;
}

@media (max-width: 660px) {
    .item {
        margin: 0;
        margin-left: 150px;
        margin-right: 100px;
    }
    .forma{
        margin: 0;
        margin-top: 20px;
         margin-right: 70px;
    }
    input{
        width: 100%;
    }
}
</style>