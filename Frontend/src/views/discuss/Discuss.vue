<template>
  <div>
  <Navbar />
  <div class="discuss">
    <a v-if="token" href="discuss/admin/add">
      <div class="add">
        <img src="@/assets/add-plus.svg" alt="">
      </div>
      </a>
      <div class="elements">
        <div 
        v-for="dis in discuss"
        :key="dis.id">
                <DiscussCard :title="dis.title" :content="dis.content" :author="dis.author" :id="dis.id"/>
        </div>
      </div>
    
  </div>
  </div>
</template>

<script>
import DiscussCard from '@/components/DiscussCard.vue'
import Navbar from '@/components/Navbar.vue'
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Discuss',
  components: {
    DiscussCard,
    Navbar
  },
  data(){
    return{
      disId:null
    }
  },
  computed:{
    ...mapState([
      'discuss',
      'token'
    ])
  },
  mounted(){
    this.fetchDiscussions();
  },
  methods: {
    ...mapActions([
      'fetchDiscussions'
    ])
  }
}
</script>

<style scoped>
.add{
  border: dashed;
  border-width: 1px;
  border-color: black;
  padding: 10px;
}
.add:hover{
  opacity: 0.6;
}
.add img{
  width: 50px;
  opacity: 0.9;
}
.discuss{
  margin-left: 35%;
  margin-right: 35%;
  opacity: 0;
  animation: elem 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  animation-delay: 0.3s;
}
.elements{
  margin-top: 15px;
  opacity: 1;
  
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
@media (max-width: 660px) {
  .discuss{
    margin: 0;
    margin-left: 100px;
    margin-right: 100px;
  }
}
</style>
