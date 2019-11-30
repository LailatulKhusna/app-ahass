<template>
  <div>
    <v-toolbar fixed>
      <v-toolbar-title>
        <div class="title small">Pengaturan</div>
      </v-toolbar-title>
    </v-toolbar>

    <v-container class="fill-height">
      <v-row>
        <v-col>
          <center>
            <img src="http://skripsi-ela.ardata.co.id/storage/images/logout.jpg" style="max-width:80vw" alt="">
          </center>
          <v-btn block color="error" @click="logout()">Keluar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods:{
    push(page){
      this.$router.push(page)
    },
    logout(){
      this.$store.dispatch('logout').then(()=>{
        this.$router.push('login')
      })
    }
  }
}
</script>

<style>

</style>