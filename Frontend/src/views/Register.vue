<template>
    <div class="back">
        <div class="login">
            <div class="left">
                <div class="form">
                    <a href="/"><img src="@/assets/Entr_logo.png" alt=""></a>
                    <form @submit="onSubmit">
                        <label for="username">USERNAME:</label>
                        <input v-model="form.username" type="text" name="username" id="username" required>
                        <label for="email">EMAIL:</label>
                        <input v-model="form.email" type="text" name="email" id="email" required>
                        <label for="password">PASSWORD:</label>
                        <input v-model="form.password" type="password" name="password" id="password" required>
                        <input type="submit" value="REGISTER" id="login-btn">
                    </form>
                    

                </div>
            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions([
            'register'
        ]),

        onSubmit(e) {
            e.preventDefault();

            this.register(this.form);
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style scoped>
#login-btn {
    border: solid;
    border-width: 1px;
    min-width: 95%;
    min-height: 30px;
    margin-top: 10px;
    padding: 8px;
    background-color: rgb(31, 31, 31);
    transition: 0.4s;
    color: white;
}

#login-btn:hover {
    color: rgb(252, 252, 252);
    background-color: rgb(77, 77, 77);
    cursor: pointer;
}

#register-btn {
    border: solid;
    border-width: 1px;
    min-width: 95%;
    min-height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px;
    color: white;
    background-color: rgb(48, 48, 48);
    transition: 0.4s;

}

#register-btn:hover {
    color: rgb(253, 253, 253);
    background-color: rgb(91, 91, 91);
    cursor: pointer;
}

.form {
    min-width: 300px;
    display: block;
    margin: auto;
    margin-top: 20%;
    width: 30%;
    height: auto;
    border: 2px solid rgb(0, 0, 0);
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: justify;
}

.form img {
    margin-left: 32%;
    width: 100px;
    margin-top: 15px;
    margin-bottom: 20px;
}

.form label {
    font-weight: 600;
    text-align: justify;
}

.form input {
    border: solid;
    border-width: 1px;
    width: 99%;
    height: 40px;
}

.back {
    background-color: black;
}

.login {
    display: flex;
    background-image: url('@/assets/login_background.jpg');
    background-size: cover;
    background-position: center;
    background-color: black;
    animation: reveal 3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

@keyframes reveal {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.left {
    width: 60vw;
    height: 100vh;
    opacity: 0.95;
    backdrop-filter: blur(30px);
    background-color: rgb(254, 254, 254);


}

.right {
    width: 50vw;
    height: 100vh;
    opacity: 0.4;
    background-color: black;
}
</style>