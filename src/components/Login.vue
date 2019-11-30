<template>
  <div>
    <v-app-bar color="white accent-4">
      <v-app-bar-nav-icon>
        <v-btn icon @click="push('intro')"><VIcon>arrow_back</VIcon></v-btn>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Sign In</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-container id="login" bg grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex>
          <v-form>
            <v-container>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field name="name" label="Email" v-model="username" id="id"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    name="name"
                    v-model="password"
                    label="Password"
                    id="id"
                    type="password"
                  ></v-text-field>
                </v-flex>

                <!-- <v-flex xs12>
                <v-spacer></v-spacer>
                <v-btn flat small>Lupa password?</v-btn>
                </v-flex>-->
                <div class="subheading red--text" v-show="form.error.display">{{ form.error.text }}</div>
                <v-btn
                  round
                  block
                  outline
                  :loading="form.loading"
                  :disabled="form.loading"
                  @click="login"
                  color="error"
                >Masuk</v-btn>
              </v-layout>
            </v-container>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      form: {
        loading: false,
        error: {
          text: "Maaf, Anda salah. tolong periksa ulang sandi Anda.",
          display: false
        }
      }
    };
  },
  methods: {
    login: function() {
      let access = {
        username: this.username,
        password: this.password
      };
      this.form.loading = true;
      this.$store
        .dispatch("login", access)
        .then(() => this.$router.push("/dashboard"))
        .catch(err => {
          console.log(err);
          this.form.loading = false;
          this.form.error.display = true;
        });
    },
    push(page){
      this.$router.push(page)
    }
  }
};
</script>
<style type="text/css">
#card-form {
  opacity: 0.8;
}
</style>
