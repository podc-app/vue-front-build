<template>
  <v-container fill-height>
    <v-row dense wrap justify="center" align="center">
      <v-col cols="12" md="5">
        <v-card class="elevation-12" max-width="480">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Зарегестрироваться</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-form ref="form" @submit.prevent="submitForm">
            <v-card-text>
              <v-text-field
                label="Имя"
                name="first_name"
                prepend-icon="mdi-account-outline"
                :rules="[rules.required, rules.username]"
                v-model="first_name"
              ></v-text-field>
              <v-text-field
                label="Фамилия"
                name="last_name"
                prepend-icon="mdi-account-outline"
                ref="emailField"
                :rules="[rules.required, rules.username]"
                v-model="last_name"
              ></v-text-field>
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
              <v-text-field
                id="password"
                label="Повторите пароль"
                name="password"
                prepend-icon="mdi-lock-outline"
                type="password"
                v-model="repeatedPassword"
                :rules="[rules.required,rules.counter,rules.repeatPassword]"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <router-link class="text-xs-left" to="/login">Уже есть аккаунт? Войти</router-link>

              <v-spacer></v-spacer>
              <v-btn color="primary" type="submit" :loading="verifyRegisterLoading">Далее</v-btn>
            </v-card-actions>
            <!-- <v-card-text class="d-flex justify-content-between mt-2"> -->
            <!-- <router-link class="text-xs-right" to="/forgot">Forgot Password?</router-link> -->
            <!-- </v-card-text> -->
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      snackbar: false,
      text: "Oops... Something went wrong",
      timeout: 5000,
      title: "Preliminary report",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      repeatedPassword: "",
      submitted: false,
      rules: {
        required: value => !!value || "Обязательно.",
        username: value =>
          (value.length >= 4 && value.length <= 150) || "От 4 - 150 символов",
        counter: value => value.length >= 8 || "Мин. 8 символов",
        repeatPassword: value =>
          value === this.password || "Пароли не совпадают",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Некорректный e-mail.";
        }
      }
    };
  },
  methods: {
    submitForm() {
      if (!this.$refs.form.validate()) {
        this.text = "Fill the form correctly";
        this.snackbar = true;
      } else {
        const data = {
          crossdomain: true,
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        };
        this.$axios
          .post(`${this.$hostname}/api/user/`, data)
          .then(response => {
            if (response.status === 201) {
              this.submitted = true;
            }
          })
          .catch(error => {
            this.text = "Connection error";
            this.snackbar = true;
          });
      }
    }
  }
};
</script>

<style scoped>
</style>
