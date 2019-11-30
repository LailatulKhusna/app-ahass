<template>
  <div id="dashboard">
    <v-toolbar fixed>
      <v-toolbar-title><div class="title small">Beranda</div></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon @click="logout"><v-icon>logout</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-container class="fill-height" style="min-height:80vh">
      <v-row align="center" justify="center">
        <v-col>
          <center>
            <img src="http://skripsi-ela.ardata.co.id/storage/images/siap.jpg" style="max-width:60vw;max-height:40vh" alt="">
            </center>
          <div class="title pb-3">SURVEI KEPUASAN PELANGGAN AHASS HANDAYANI</div>
          <v-btn color="error" block @click="push('field')"><v-icon>thumb_up</v-icon> Mulai</v-btn>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'dashboard',
  computed : {
    //mapstate berfungsi untuk memanggil data distore
      ...mapState(['title','forLoop','token','user'])
    },
  components: {

  },
  mounted(){

  },
  methods:{
  	logout: function () {
	    this.$store.dispatch('logout')
	    .then(() => {
	      this.$router.push('/login')
	    })
    },
    push(page){
      this.$router.push(page)
    }
  }
}
</script>

<style type="text/css">

</style>
