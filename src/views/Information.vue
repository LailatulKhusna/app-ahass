<template>
  <div>
    <v-toolbar fixed>
      <v-toolbar-title>
        <div class="title small">Informasi</div>
      </v-toolbar-title>
    </v-toolbar>

    <v-container class="fill-height">
      <v-row>
        <v-col cols="12">
          <center>
            <img src="http://skripsi-ela.ardata.co.id/storage/images/hari-buka.jpg" style="max-width:80vw" alt="">
          </center>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="text-left">
       <v-row>
          <v-col cols="2">
            <v-icon large color="error">home</v-icon>
            <div class="caption">Alamat</div>
          </v-col>
          <v-col cols="10" align-self="center">
            <div class="caption">Jalan Taman Siswa, Sekaran, Kec.Gunungpati, Kota Semarang</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon large color="error">phone</v-icon>
            <div class="caption">Telepon</div>
          </v-col>
          <v-col cols="10" align-self="center">
            <div class="caption">(024)8508120 atau 0822 2389  5758</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-icon large color="error">build</v-icon>
            <div class="caption">Fasilitas</div>
          </v-col>
          <v-col cols="10" align-self="center">
            <div class="caption">Gratis Cuci Motor</div>
            <div class="caption">Gratis Wifi,Snack dan Minuman</div>
            <div class="caption">Gratis Jemput & Antar Motor</div>
            <div class="caption">Gratis Nitrogen</div>
            <div class="caption">Booking Service</div>
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
    }
  }
}
</script>

<style>

</style>