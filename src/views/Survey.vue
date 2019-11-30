<template>
  <div>
    <v-toolbar fixed>
      <v-app-bar-nav-icon>
        <v-btn icon @click="push('field')">
          <VIcon>arrow_back</VIcon>
        </v-btn>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <div class="title small">Survei</div>
      </v-toolbar-title>
    </v-toolbar>

    <v-carousel :next-icon="false" :prev-icon="false" height="87vh">
      <v-carousel-item
        class="fill-height"
        v-for="(question,q) in field.question_lists"
        :key="question.id"
      >
        <v-container>
          <v-card color="error" dark>
            <VCardText>
              <div class="body-2">Jawablah pertanyaan berikut:</div>
              <div class="title">{{ question.name }}</div>
            </VCardText>
          </v-card>
        </v-container>
        <v-container>
          <div class="body-2">Apakah Aspek ini Penting?</div>
          <v-row justify="space-between">
            <v-col cols="2" v-for="importance in importances" :key="importance.id">
              <v-avatar>
                <v-img :src="importance.img" max-width="60vw" max-height="40vh" class="emot-img" :id="`importance${question.id}${importance.id}`" @click="giveImportance(q,question.id,importance.id,importance.value)"></v-img>
              </v-avatar>
              <div class="caption">{{importance.name}}</div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row>
            <v-col>
              <div class="body-2">Apakah Anda Puas dengan Pelayanan Bengkel?</div>
            </v-col>
          </v-row>
          <v-row justify="space-between">
            <v-col cols="2" v-for="performance in performances" :key="performance.id">
              <v-avatar>
                <v-img :src="performance.img" max-width="60vw" max-height="40vh" class="emot-img" :id="`performance${question.id}${performance.id}`" @click="givePerformance(q,question.id,performance.id,performance.value)"></v-img>
              </v-avatar>
              <div class="caption">{{performance.name}}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item v-if="field.question_lists.length > 0">
        <v-container class="fill-height">
          <v-row justify="center" align="center">
            <v-col>
              <v-btn color="error" @click="push('field')">Apakah Ingin Menilai Bidang Lain?</v-btn>
            </v-col>
            <v-col>
              <v-btn color="error" @click="finish()" :loading="loading" :disabled="loading">Selesai</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  props: {
    field_id: null
  },
  data() {
    return {
      field: {
        question_lists:[]
      },
      loading:false,
      importances: [
        {
          id: 1,
          name: "Sangat Tidak",
          value: 1,
          img: "http://skripsi-ela.ardata.co.id/storage/images/buruk.gif"
        },
        {
          id: 2,
          name: "Tidak",
          value: 2,
          img: "http://skripsi-ela.ardata.co.id/storage/images/parah.gif"
        },
        {
          id: 3,
          name: "Cukup",
          value: 3,
          img: "http://skripsi-ela.ardata.co.id/storage/images/cukup.gif"
        },
        {
          id: 4,
          name: "Penting",
          value: 4,
          img: "http://skripsi-ela.ardata.co.id/storage/images/puas.gif"
        },
        {
          id: 5,
          name: "Sangat Penting",
          value: 5,
          img: "http://skripsi-ela.ardata.co.id/storage/images/oke.gif"
        }
      ],
      performances: [
        {
          id: 1,
          name: "Sangat Tidak",
          value: 1,
          img: "http://skripsi-ela.ardata.co.id/storage/images/buruk.gif"
        },
        {
          id: 2,
          name: "Tidak",
          value: 2,
          img: "http://skripsi-ela.ardata.co.id/storage/images/parah.gif"
        },
        {
          id: 3,
          name: "Cukup",
          value: 3,
          img: "http://skripsi-ela.ardata.co.id/storage/images/cukup.gif"
        },
        {
          id: 4,
          name: "Puas",
          value: 4,
          img: "http://skripsi-ela.ardata.co.id/storage/images/puas.gif"
        },
        {
          id: 5,
          name: "Sangat Puas",
          value: 5,
          img: "http://skripsi-ela.ardata.co.id/storage/images/oke.gif"
        }
      ]
    };
  },
  mounted() {
    if (this.field_id == null) {
      this.$router.push("field");
    } else {
      this.$store
        .dispatch("showFieldLists", this.field_id)
        .then(res => {
          this.field = res.data;
        })
        .catch(err => {});
    }
  },
  methods: {
    push(page) {
      this.$store.commit('addFields',{field:this.field})
      this.$router.push(page);
    },
    finish(){
      this.loading = true
      this.$store.commit('addFields',{field:this.field});
      this.$store.dispatch('sendSurvey');
      this.loading = false
      this.$router.push({
        name: 'field',
        params:{
          success:true
        }
      })
    },
    giveImportance(question_index,question_id,importance_id,value){
      this.field.question_lists[question_index].importance = value;
      // console.log(this.field.question_lists);
      var imp_image = document.getElementById("importance"+question_id+importance_id);
      imp_image.style.transform = "scale(1.5)";
      this.importances.forEach((imp,i)=>{
        this.field.question_lists.forEach((ques,q)=>{
          if(imp.id != importance_id && ques.id == question_id){
            var other_imp_image = document.getElementById("importance"+ques.id+imp.id);
            other_imp_image.style.transform = "scale(0)";
          }
        });
      });
    },
    givePerformance(question_index,question_id,performance_id,value){
      this.field.question_lists[question_index].performance = value;
      var perf_image = document.getElementById("performance"+question_id+performance_id); 
      perf_image.style.transform = "scale(1.5)";
      this.performances.forEach((perf,i)=>{
        this.field.question_lists.forEach((ques,q)=>{
          if(perf.id != performance_id && ques.id == question_id){
            var other_perf_image = document.getElementById("performance"+ques.id+perf.id); 
            other_perf_image.style.transform = "scale(0)";
          }
        });
      });
    }
  }
};
</script>

<style>
  .emot-img{
		transition: transform .3s;
	}
	.emot-img:hover{
		transform: scale(1.5);
	}
</style>
