<template>
  <v-container>
    <v-row dense wrap>
      <v-col cols="12">
        <h3 class="title">Все пользователи</h3>
      </v-col>
    </v-row>
    <v-row dense wrap>
      <v-col cols="12">
        <v-card outlined>
          <div v-if="items.length === 0" class="mx-3">
            <v-skeleton-loader type="table-row-divider" />
            <v-skeleton-loader type="table-row-divider" />
            <v-skeleton-loader type="table-row-divider" />
            <v-skeleton-loader type="table-row-divider" />
            <v-skeleton-loader type="table-row-divider" />
            <v-skeleton-loader type="table-row-divider" />
            <v-skeleton-loader type="table-tfoot" />
          </div>

          <v-data-table :headers="headers" v-else :items="items" :items-per-page="5">
            <!-- <template v-slot:item.avatar="{ item }">
                <v-btn
                  fab
                  outlined
                  x-small
                  elevation="0"
                  :color="'#'+(Math.random()*0xFFFFFF<<0).toString(16)"
                >
            <span class="subtitle-1">{{`${item.last_name.charAt(0).toUpperCase()}`}}</span>-->
            <!--<v-icon light>person</v-icon>-->
            <!-- </v-btn> -->
            <!-- </template> -->
            <template v-slot:item.status="{ item }">
              <!--  <span :style="{'color': getColor(item)}">{{ getStatus(item)}}</span> -->
              <span>{{ getStatus(item)}}</span>
              <!-- <v-chip small :color="getColor(item)" dark></v-chip> -->
            </template>
            <template v-slot:item.actions="{ item }">
              <div class="actions">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn color="gray" x-small icon v-on="on">
                      <v-icon>mdi-television</v-icon>
                    </v-btn>
                  </template>
                  <span>Тест</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn color="gray" class="ml-2" x-small icon v-on="on">
                      <v-icon>mdi-update</v-icon>
                    </v-btn>
                  </template>
                  <span>Тест 2</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn color="gray" class="ml-2" x-small icon v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <span>Тест 2</span>
                </v-tooltip>
              </div>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      headers: [
        // { text: "", value: "avatar", sortable: false },
        { text: "Фамилия", value: "last_name" },
        { text: "Имя", value: "first_name" },
        {
          text: "E-mail",
          align: "left",
          value: "email"
        },
        { text: "Статус", value: "status", sortable: false },

        // { text: "Дата рождения", value: "date_of_birth" },
        { text: "Действия", value: "actions", sortable: false }
      ],
      items: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(`${this.$hostname}/api/user/`)
        .then(response => {
          this.items = response.data;
          console.log(response);
        })
        .catch(error => {});
    },
    getColor(item) {
      if (item.is_superadmin && item.is_active) return "orange";
      else if (item.is_admin && item.is_active) return "blue";
      else if (item.is_active) return "green";
      else return "gray";
    },
    getStatus(item) {
      if (item.is_superadmin && item.is_active) return "Суперадмин";
      else if (item.is_admin && item.is_active) return "Админ";
      else if (item.is_active) return "Пользователь";
      else return "Не активирован";
    }
  },
  mounted() {
    this.getData();
    setTimeout(() => {
      this.items = [
        {
          id: 8,
          email: "admin@world.com",
          first_name: "Regular",
          last_name: "Admin",
          date_of_birth: null,
          is_active: true,
          is_admin: true,
          is_superadmin: false
        },
        {
          id: 10,
          email: "2admin@world.com",
          first_name: "2Regular",
          last_name: "2Admin",
          date_of_birth: null,
          is_active: false,
          is_admin: false,
          is_superadmin: false
        },
        {
          id: 2,
          email: "test@world.com",
          first_name: "Test",
          last_name: "Stete",
          date_of_birth: null,
          is_active: true,
          is_admin: false,
          is_superadmin: false
        },
        {
          id: 9,
          email: "lala@world.com",
          first_name: "Lala",
          last_name: "Lalal",
          date_of_birth: null,
          is_active: true,
          is_admin: false,
          is_superadmin: true
        }
      ];
    }, 1500);
  }
};
</script>

<style scoped>
</style>
