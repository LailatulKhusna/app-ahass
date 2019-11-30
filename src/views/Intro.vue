<template>
  <div class="fill-height">
      <div class="splash-bg"></div>
        <div class="splash-info">
            <div class="splash-logo"></div>
            <div class="splash-intro">
            Selamat datang di Aplikasi Survei Online AHASS HANDAYANI

            </div>
        </div>
        <v-container>
            <v-btn color="error" block @click="push('login')">Masuk</v-btn>
        </v-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        push(page){
            this.$router.push(page)
        }
    }
}
</script>

<style>
  .splash-bg {
    position: relative;
    background: url('http://skripsi-ela.ardata.co.id/storage/images/splash.jpg') no-repeat transparent;
    background-size: cover;
    height: 45%;
    z-index: 1;
    background-repeat: repeat-x;
    animation: animatedBackground 40s linear infinite;
  }

  @keyframes animatedBackground {
    from { background-position: 0 0; }
    to { background-position: 100% 0; }
  }

  .splash-info {
    position: relative;
    z-index: 2;
    margin-top: -64px;
    text-align: center;
  }
  .splash-logo {
    margin: auto;
    background: url('http://skripsi-ela.ardata.co.id/storage/images/honda_ori.png') repeat transparent;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 218px;
    height: 218px;
  }
  .splash-intro {
    font-size: 18px;
    font-weight: bold;
    max-width: 80%;
    margin: auto;
  }
  button.login {
    margin-top: 25px;
    background-color: red;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    color: white;

    &.activated {
      background-color: rgb(220, 220, 220);
    }
  }
  button.signup {
    margin-top: 25px;
    background-color: red;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    color: white;
  }

</style>