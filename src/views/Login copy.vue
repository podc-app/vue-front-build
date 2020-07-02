<template>
  <v-container fill-height>
    <v-row dense wrap justify="center" align="center">
      <v-col cols="12" md="5">
        <v-card class="elevation-12" max-width="480">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Войти</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form ref="form" @submit.prevent="submitLoginForm">
            <v-card-text>
              <v-text-field
                label="Email"
                name="Email"
                prepend-icon="mdi-email-outline"
                ref="emailField"
                :rules="[rules.required,rules.email]"
                v-model="email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock-outline"
                type="password"
                v-model="password"
                :rules="[rules.required,rules.counter]"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <router-link class="text-xs-left" to="/register">Нет аккауната? Зарегестрироваться</router-link>

              <v-spacer></v-spacer>
              <v-btn color="primary" type="submit" :loading="verifyRegisterLoading">Войти</v-btn>
            </v-card-actions>
            <!-- <v-card-text class="d-flex justify-content-between mt-2"> -->
            <!-- <router-link class="text-xs-right" to="/forgot">Forgot Password?</!-->
            <!-- </v-card-text> -->
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import this.$axios from "this.$axios";
export default {
  name: "Login",
  data() {
    return {
      snackbar: false,
      text: "Oops... Something went wrong",
      timeout: 5000,
      title: "Preliminary report",
      username: "",
      email: "",
      password: "",
      verifyRegisterLoading: false,
      rules: {
        required: value => !!value || "Обязательно.",
        username: value =>
          (value.length >= 4 && value.length <= 150) ||
          "Username between the 4 - 150 characters",
        counter: value => value.length >= 8 || "Мин 8 символов",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Некорректный e-mail.";
        }
      }
    };
  },
  methods: {
    // submitLoginForm() {
    //   if (!this.$refs.form.validate()) {
    //     this.text = "Fill the form correctly";
    //     this.snackbar = true;
    //   } else {
    //     const data = {
    //       crossdomain: true,
    //       // email: this.email,
    //       password: this.password,
    //       email: this.email
    //     };
    //     this.$axios
    //       .post(`${this.$hostname}/api/user/auth/`, data)
    //       .then(response => {
    //         if (response.status === 200 && response.data.token) {
    //           this.$session.start();
    //           this.$session.set("jwt", response.data.token);
    //           this.$axios.defaults.headers.common["Authorization"] =
    //             "JWT " + this.$session.get("jwt");
    //           // this.$store.commit('set',{type: 'isSuperuser', items: response.data.is_superuser});

    //           // this.$session.set("isSuperuser", response.data.admin);

    //           // this.$store.dispatch('set',response.data.is_superuser)
    //           this.$router.push("/home");
    //         }
    //       })
    //       .catch(error => {
    //         this.text = "Connection error";
    //         this.snackbar = true;
    //         console.log(error);
    //       });
    //   }
    // }
    submitLoginForm() {
      this.$session.start();
      this.$session.set("jwt", "11221");
      this.$axios.defaults.headers.common["Authorization"] =
        "JWT " + this.$session.get("jwt");
      this.$router.push("/home");
    }
  },
  beforeCreate() {
    this.$session.destroy();
    // this.$router.push('/');
    this.$axios.defaults.headers.common["Authorization"] = "";
    if (this.$route.params.token) {
      this.verifyRegisterLoading = true;
      this.$axios
        .get(
          `${this.$hostname}/api/register_activate/${this.$route.params.token}/`
        )
        .then(response => {
          if (response.status === 200) {
            this.verifyRegisterLoading = false;
            this.name = response.username;
            this.text = "Registration successful";
            this.snackbar = true;
          }
        })
        .catch(error => {
          this.verifyRegisterLoading = false;
          this.text = "Connection error";
          console.log(error);
          this.snackbar = true;
        });
    }
  },
  mounted() {}
};
</script>

<style>
</style>