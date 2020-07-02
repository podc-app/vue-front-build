<template>
  <v-container>
    <v-row dense wrap justify="center">
      <v-col cols="12" md="7">
        <h3 class="title">Список уроков</h3>
        <v-card outlined>
          <v-list-group value="true">
            <template v-slot:activator>
              <v-list-item-title>
                <v-subheader class="pl-0">Модуль 1</v-subheader>
              </v-list-item-title>
            </template>
            <v-list subheader>
              <v-list-item v-for="item in items" :key="item.title" @click>
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                  <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list>
          </v-list-group>

          <v-divider></v-divider>
          <v-list-group value="false">
            <template v-slot:activator>
              <v-list-item-title>
                <v-subheader class="pl-0">Модуль 2</v-subheader>
              </v-list-item-title>
            </template>
            <v-list subheader>
              <v-list-item v-for="item in items2" :key="item.title" @click>
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-group>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <h3 class="title">Просмотренные</h3>
        <v-card outlined>
          <v-list subheader>
            <v-subheader>Recent chat</v-subheader>

            <v-list-item v-for="item in items" :key="item.title" @click>
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list subheader>
            <v-subheader>Previous chats</v-subheader>

            <v-list-item v-for="item in items2" :key="item.title" @click>
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CourseDetails",
  data: () => ({
    items: [
      {
        active: true,
        title: "Jason Oner",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        active: true,
        title: "Ranee Carlson",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      },
      {
        title: "Cindy Baker",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      },
      {
        title: "Ali Connors",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      }
    ],
    items2: [
      {
        title: "Travis Howard",
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg"
      }
    ]
  })
};
</script>

<style>
</style>