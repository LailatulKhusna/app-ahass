<template>
  <div id="home">
    <router-view></router-view>
    <v-bottom-navigation
      active.sync="recent"
      :value="true"
      fixed
      grow
      app
    >
      <v-btn text color="teal" @click="push('dashboard')">
        <span>Beranda</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn text color="teal" @click="push('information')">
        <span>Informasi</span>
        <v-icon>info</v-icon>
      </v-btn>

      <v-btn text color="teal" @click="push('setting')">
        <span>Pengaturan</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {

  },
  computed : {

  },
  mounted(){

  },
  methods:{
    push(page){
      this.$router.push(page)
    }
  }
}
</script>

<style type="text/css">

</style>
