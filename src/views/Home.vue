<template>
  <v-container>
    <!-- <v-row dense wrap>
     
    </v-row>-->
    <v-row dense wrap justify="center" justify-lg="start" class="mb-5">
      <v-col cols="12">
        <!-- <v-btn flat exact to="/"><v-icon>arrow_back</v-icon>Недавно прослушанные</v-btn> -->
        <router-link to="/test" class="app-link text-subtitle-2">
          <span>Недавно прослушанные</span>
          <v-icon small>mdi-chevron-right</v-icon>
        </router-link>
      </v-col>
      <v-col cols="12" md="8" lg="auto" v-if="items.length === 0">
        <v-skeleton-loader class="ma-3" type="image" height="125px" width="125px"></v-skeleton-loader>
      </v-col>
      <v-col v-else v-for="(item, i) in items" :key="i" cols="12" md="8" lg="1">
        <!-- <course-card :item="item" /> -->
        <v-hover v-slot:default="{ hover }">
          <div>
            <v-card
              style="height: 100%"
              @click="currentPodcastId === item.id ? currentPodcastId = null : currentPodcastId = item.id"
            >
              <!-- <v-card> -->
              <v-img
                :src="item.image"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              >
                <v-fade-transition>
                  <div class="h-100">
                    <v-btn 
                        outlined
                        x-small
                        color="red"
                        absolute
                        top
                        left
                        style="top: 0px; left: 0px;"
                        class="ml-1 mt-1"
                    >
                      Live
                      </v-btn>
                    <v-btn
                      fab
                      x-small
                      color="white"
                      class="ml-auto mr-1 mb-1 d-block"
                      v-if="hover || item.id === currentPodcastId"
                    >
                      <v-icon v-if="item.id === currentPodcastId">mdi-pause</v-icon>
                      <v-icon v-else>mdi-play</v-icon>
                    </v-btn>
                  </div>
                </v-fade-transition>
              </v-img>
              <!-- <v-avatar class="d-none d-sm-block" size="125" tile>
            <v-img v-if="item.image" :src="item.image"></v-img>
            <v-btn icon color="pink">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
              </v-avatar>-->
            </v-card>
            <router-link to="/test" class="app-link mt-1">
              <span
                class="text-subtitle-2 text-no-wrap opacity-0"
                :class="{'opacity-1':hover}"
              >{{item.title}}</span>
            </router-link>
            <router-link :to="`author/${item.artist}`" class="app-link">
              <span
                class="text-body-2 text-caption opacity-0"
                :class="{'opacity-1':hover}"
              >{{item.artist}}</span>
            </router-link>
          </div>
        </v-hover>
      </v-col>
    </v-row>

    <!-- <v-row dense wrap justify="center" justify-lg="start" class="mb-5">
      <v-col cols="12">
        <h3 class="title">Рекомендуем послушать</h3>
      </v-col>
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
    </v-row>-->

    <!-- <v-row wrap dense>
      <v-col cols="12">
        <h3 class="title">Ваши задания</h3>
      </v-col>
      <v-col cols="12">
        <v-card outlined>
          <v-list two-line subheader>
            <v-subheader inset>Folders</v-subheader>

            <v-list-item v-for="item in list" :key="item.title" @click=''>
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

            <v-list-item v-for="item in list2" :key="item.title" @click=''>
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
    </v-row>-->
  </v-container>
</template>

<script>
// @ is an alias to /src
import CourseCard from "@/components/CourseCard";

export default {
  name: "home",
  components: { CourseCard },
  data() {
    return {
      currentPodcastId: null,
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
          artist: "Миша",
          id: 0
        },
        {
          image: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Энергия солнца",
          artist: "Миша",
          id: 1
        },
        {
          image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "5 минут до",
          artist: "Илья",
          id: 2
        },
        {
          image: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Свежий ум",
          artist: "Илья",
          id: 3
        }
      ];
    }, 500);
  }
};
</script>

