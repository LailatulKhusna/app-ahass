<template>
  <div>
    <v-toolbar fixed>
      <v-app-bar-nav-icon>
        <v-btn icon @click="push('field')">
          <VIcon>arrow_back</VIcon>
        </v-btn>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <div class="title small">Review</div>
      </v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text>
              <center>
                <img src="http://skripsi-ela.ardata.co.id/storage/images/helper.gif" style="max-width:60vw;max-height:40vh" alt="">
              </center>
              <div class="title">Kritik dan Saran</div>
              <div
                class="caption"
              >Anda dapat menyampaikan kritik dan saran untuk bengkel AHASS HANDAYANI, dibawah ini:</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
            <VTextField
              v-model="review.name"
              placeholder="Kritik dan Saran"
            />
            <v-btn block color="error" @click="finish()" :loading="loading" :disabled="loading">Selesai</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return{
      loading: false
    }
  },
  methods: {
    push(page) {
      this.$router.push(page);
    },
    finish(){
      this.loading = true
      this.$store.dispatch('sendSurvey')
      this.loading = false
      this.$router.push({
        name:'field',
        params:{
          success:true
        }
      })
    }
  },
  computed : {
    ...mapState(['token','user','review'])
  },
};
</script>

<style>
</style>
