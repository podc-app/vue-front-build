<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-snackbar v-model="snackbar" top :timeout="timeout">{{ 'text' }}</v-snackbar>
    <v-app-bar extended extension-height="1" clipped-left app v-if="visible" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title>PURE</v-toolbar-title> -->
      <!-- <v-btn outlined fab small @click="$router.push('/home')" class="mx-3"> -->
      <!-- <img :src="require('@/assets/images/logo.png')" height="30" width="auto" /> -->
      <!-- </v-btn> -->
      <!-- <v-toolbar-title>Курсы</v-toolbar-title> -->

      <v-btn icon class="ml-auto">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template #extension>
        <v-divider></v-divider>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed clipped app v-if="visible">
      <v-list dense shaped>
        <v-list-item v-for="item in items" :key="item.title" link color="primary" :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout">Выход</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-content app>
      <router-view />
    </v-content>
  </v-app>
</template>
<style lang="scss">
* i {
  font-family: "Material Icons";
}
.v-toolbar__extension {
  padding: 0 !important;
}
.v-data-table tr .actions {
  visibility: hidden;
}
.v-data-table tr:hover .actions {
  visibility: visible;
}
</style>
<script lang='ts'>
export default {
  name: "App",

  data() {
    return {
      drawer: true,
      snackbar: true,
      timeout: 1500,
      items: [
        { title: "Лента", icon: "mdi-bulletin-board", route: "/home" },
        {
          title: "Подкасты",
          icon: "mdi-folder-multiple-outline",
          route: "/courses"
        },
        { title: "Задания", icon: "mdi-file-outline", route: "/leads" },
        {
          title: "Пользователи",
          icon: "mdi-account-multiple-outline",
          route: "/users"
        },
        {
          title: "Платежи",
          icon: "mdi-wallet-membership",
          route: "/payments"
        },
        {
          title: "Уведомления",
          icon: "mdi-bell-outline",
          route: "/notifications"
        },
        {
          title: "Настройки",
          icon: "mdi-settings-outline",
          route: "/settings"
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$session.destroy();
      this.$axios.defaults.headers.common["Authorization"] = "";
      this.$router.push("/");
    }
  },
  computed: {
    visible() {
      return this.$route.name !== "login" && this.$route.name !== "register";
      //TODO test
      // return !this.$session.get("jwt") || !this.$route.name === "login";
    },
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  mounted() {
    if (this.$session.get("jwt")) {
      this.$axios.defaults.headers.common["Authorization"] =
        "JWT " + this.$session.get("jwt");
    }
    this.$axios.interceptors.response.use(
      response => {
        // intercept the global error
        return response;
      },
      error => {
        if (error.response.status == 401) {
          this.logout();
          // if the error is 401 and hasent already been retried
        }
        return Promise.reject(error);
      }
    );
    // this.$axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    // this.$axios.defaults.credentials = "same-origin";
  }
};
</script>

<style lang="scss">
.opacity-0 {
  opacity: 0;
  transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.opacity-1 {
  opacity: 1;
}
.v-application .app-link {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  // line-height: 0;
  &:hover {
    span {
      text-decoration: underline;
    }
  }
}
</style>