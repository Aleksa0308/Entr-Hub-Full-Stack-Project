<template>
    <div>
        <div class="error" v-if="!token">
            <PermissionError />
        </div>
        <Navbar />
        <div v-if="token" class="edit">
            <form @submit="onSubmit">
                <label for="title">TITLE:</label>
                <input v-model="form.title" type="text" name="title" required>
                <label for="category">CATEGORY:</label>
                <input v-model="form.category" type="category" name="category" required>
                <label for="content">CONTENT:</label>
                <textarea v-model="form.content" id="content" name="content" rows="6" cols="22" required></textarea>
                <input type="submit" value="POST" id="submit-btn">
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue'
import PermissionError from '@/components/PermissionError.vue'
import { mapActions, mapState } from 'vuex';

export default {
    name: 'AddDiscuss',
    components: {
        Navbar,
        PermissionError
    },
    data() {
        return {
            id: null,
            form: {
                title: '',
                category: '',
                content: '',
                author: '',
            },

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
            'user'
        ])
    },
    methods: {
        ...mapActions([
            'postDiscuss',
        ]),
        onSubmit(e) {
            e.preventDefault();
            this.form.author = this.user.username
            this.postDiscuss(this.form)
            this.$router.push({ name: 'discuss' })
                .then(() => { this.$router.go() });
        },
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
    font-size: 14px;
}

input {
    width: 100%;
    border: none;
    border-bottom: 2px solid black;

}

input[type="file"] {
    border: none;
}

input::file-selector-button {
    background-color: white;
    color: black;
    transition: 0.3s;
}

input::file-selector-button:hover {
    background-color: rgb(220, 219, 219);
    color: black;
    cursor: pointer;
}

textarea {
    border: 2px solid black
}

.error {
    position: absolute;
    width: 100vw;
    height: 100vh;
    padding-top: 20%;
    background-color: white;
    z-index: 1;
}

.error span {
    color: red;
    font-weight: bold;
}

.edit {
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

form {
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