<template>
  <v-container>
    <v-row dense wrap>
      <v-col cols="12">
        <h3 class="title">Последние курсы</h3>
      </v-col>
    </v-row>
    <v-row dense wrap justify="center" justify-lg="start">
      <v-col cols="12" md="8" lg="6" v-if="items.length === 0">
        <v-card style="height: 100%;" outlined>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div style="width: 100%">
              <v-skeleton-loader type="article"></v-skeleton-loader>
            </div>
            <div>
              <v-skeleton-loader class="ma-3" type="image" height="125px" width="125px"></v-skeleton-loader>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col v-else v-for="(item, i) in items" :key="i" cols="12" md="8" lg="6">
        <course-card :item="item" />
      </v-col>
    </v-row>
    <v-row dense wrap>
      <v-col cols="12">
        <h3 class="title">Ваши задания</h3>
      </v-col>
    </v-row>
    <v-row wrap dense>
      <v-col cols="12">
        <v-card outlined>
          <v-list two-line subheader>
            <v-subheader inset>Folders</v-subheader>

            <v-list-item v-for="item in list" :key="item.title" @click>
              <v-list-item-avatar>
                <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-subheader inset>Files</v-subheader>

            <v-list-item v-for="item in list2" :key="item.title" @click>
              <v-list-item-avatar>
                <v-icon :class="[item.iconClass]" v-text="item.icon"></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CourseCard from "@/components/Courses/CourseCard";

export default {
  name: "home",
  components: { CourseCard },
  data() {
    return {
      list: [
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Photos",
          subtitle: "Jan 9, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Recipes",
          subtitle: "Jan 17, 2014"
        },
        {
          icon: "folder",
          iconClass: "grey lighten-1 white--text",
          title: "Work",
          subtitle: "Jan 28, 2014"
        }
      ],
      list2: [
        {
          icon: "assignment",
          iconClass: "blue white--text",
          title: "Vacation itinerary",
          subtitle: "Jan 20, 2014"
        },
        {
          icon: "call_to_action",
          iconClass: "amber white--text",
          title: "Kitchen remodel",
          subtitle: "Jan 10, 2014"
        }
      ],
      items: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.items = [
        {
          image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Тем кто рано встает",
          artist: "Модуль 1",
          id: 0
        },
        {
          image: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Энергия солнца",
          artist: "Модуль 2",
          id: 1
        },
        {
          image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "5 минут до",
          artist: "Модуль 3",
          id: 2
        },
        {
          image: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Свежий ум",
          artist: "Модуль 4",
          id: 3
        }
      ];
    }, 500);
  }
};
</script>
