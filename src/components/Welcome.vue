<template>
  <v-carousel height="100vh" :next-icon="false" :prev-icon="false">
    <v-carousel-item>
      <v-sheet
        color="red"
        height="100%"
        tile
      >
        <v-container class="fill-height">
          <v-row
            align="center"
            justify="center"
          >
            <v-col>
              <center>
                <img src="http://skripsi-ela.ardata.co.id/storage/images/cs.png" style="max-width:60vw;max-height:40vh" alt="">
              </center>
              <div class="title">
                Selamat Datang di Aplikasi Survei Kepuasan Pelanggan AHASS Handayani
              </div>
              <div class="caption">
                Aplikasi ini digunakan untuk menilai kualitas pelayanan AHASS Handayani
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item>
      <v-sheet
        color="red"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
           <v-col>
              <center>
               <img src="http://skripsi-ela.ardata.co.id/storage/images/ayo-service.png" style="max-width:60vw;max-height:40vh" alt="">
              </center>
            <div class="title">
              Kenapa di AHASS Handayani?
            </div>
            <v-container>
              <div class="caption">
                AHASS Handayani melayani One Stop Service untuk perawatan / perbaikan ringan dan berat. Tersedia juga suku cadang atau sparepart untuk semua model sepeda motor Honda yang diproduksi  oleh PT Astra Honda Motor (AHM)
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>

    <v-carousel-item>
      <v-sheet
        color="red"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-col>
            <center>
              <img src="http://skripsi-ela.ardata.co.id/storage/images/icon ahass.png" style="max-width:60vw;max-height:40vh" alt="">
            </center>
            <div class="title">
              TUNGGU APA LAGI?
            </div>
            <v-btn text @click="push('intro')">Mulai Sekarang</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		data () {
	      return {
	        
	      }
	    },
		name: 'Welcome',
		computed : {
			...mapState(['title','forLoop','token','user'])
		},
		mounted(){

		},
		methods:{
			toLogin:function(){
				this.$router.push('/login')
      },
      push(page){
        this.$router.push(page)
      }
		}
	}
</script>

<style>

</style>
