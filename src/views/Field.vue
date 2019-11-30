<template>
  <div>
      <v-toolbar fixed>
        <v-app-bar-nav-icon>
            <v-btn icon @click="push('dashboard')"><VIcon>arrow_back</VIcon></v-btn>
        </v-app-bar-nav-icon>
        <v-toolbar-title><div class="title small">Bidang</div></v-toolbar-title>
      </v-toolbar>

      <v-container class="fill-height">
          <v-row>
              <v-col cols="12">
                 <v-card>
                     <v-card-text>
                         <div class="body-2">Pilihlah bidang yang akan Anda nilai dibawah ini:</div>
                     </v-card-text>
                     <center>
                        <img src="http://skripsi-ela.ardata.co.id/storage/images/ahass1.jpg" style="max-width:90vw;max-height:40vh" alt="">
                    </center>
                 </v-card>
              </v-col>
              <v-col cols="12" v-for="fieldlist in user.branch.field_lists" :key="fieldlist.id" class="pt-1 pb-1">
                  <v-btn block color="error" @click="push('survey',fieldlist.id)">{{ fieldlist.name }}</v-btn>
              </v-col>
              <v-col cols="12">
                  <v-btn block color="error" @click="push('review')">Tulis Kritik dan Saran</v-btn>
              </v-col>
          </v-row>
      </v-container>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'

export default {
    props:{
        success: {
            default: false
        }
    },
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['user'])
    },
    mounted(){
        if(this.success == true){
            Swal.fire({
                type: 'success',
                title: 'Sukses',
                text: 'Terimakasih sudah mengisi Survei',
            })
        }
    },
    methods:{
        push(page,id){
            if(id){
                this.$router.push({
                    name:page,
                    params:{
                        field_id:id
                    }
                })
            } else {
                this.$router.push(page)
            }
        }
    }
}
</script>

<style>

</style>