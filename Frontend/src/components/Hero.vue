<template>
    <div class="hero">
        <div class="text">
            <h1>FOR ALL YOUR
                <span>ENTR.</span>TAINMENT NEWS!</h1>
        </div>
        <div class="hero-img">
        <img src="@/assets/demon.png" alt="oh no">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style scoped>
.hero{
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 3%;
    align-items: center;
    justify-content: space-between;
    
}
.hero-img img{
    width: 400px;
    height: auto;
    animation: slika 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
    
}

@keyframes slika {
    from {
        opacity: 0;
        transform: translateX(300px);
    }

    to {
        opacity: 100;
        transform: translateX(0px);
    }
}
.hero .text{
    z-index: -1;
    width: 450px;
    animation: tekst 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
}
@keyframes tekst {
    from {
        opacity: 0;
        transform: translateX(-300px);
    }

    to {
        opacity: 100;
        transform: translateX(0px);
    }
}
.hero .text h1{
    letter-spacing: 0.7rem;
    color: black;
    font-weight: bold;
}
.hero .text h1 span {
    letter-spacing: 0.2rem;
    color: white;
    background-color: black;
}

@media (max-width: 480px) {
    .hero {
        margin-top: 60px;
        display: flex;
        flex-flow: column;
    }

    .text {
        order: 1;
    }

    .hero-img {
        order: 2;
    }
}
</style>