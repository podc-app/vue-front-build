<template>
  <v-container>
    <v-row dense wrap justify="center">
      <v-col cols="12">
        <h3 class="title">Ваши курсы</h3>
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
    <v-btn color="primary" dark fixed bottom right fab>
      <v-icon>add</v-icon>
    </v-btn>
    <!-- <v-dialog v-model="dialog" max-width="600px"> -->
    <!-- <template v-slot:activator="{ on }">
                    <v-fab-transition>
                        <v-btn
                                color="primary"
                                dark
                                fixed
                                bottom
                                right
                                fab
                                v-on="on"
                        >
                            <v-icon>add</v-icon>
                        </v-btn>
                    </v-fab-transition>
                </template>

                <v-card>
                    <v-card-title>
                        <span class="headline">Package</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container grid-list-md>
                            <v-form
                                    ref="form"
                            >
                                <v-layout wrap>

                                  
                                </v-layout>
                            </v-form>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">Close</v-btn>
                        <v-btn color="primary" text @click="submitPackageForm">Save</v-btn>
                    </v-card-actions>
                </v-card>
    </v-dialog>-->
  </v-container>
</template>

<script>
import CourseCard from "@/components/CourseCard";

export default {
  name: "Courses",
  components: { CourseCard },
  data() {
    return {
      items: [],
      on: false,
      dialog: false
      // items: [
      //   {
      //     id: 2,
      //     title: "Test Course 2",
      //     user_id: null,
      //     image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      //   },
      //   {
      //     id: 1,
      //     title: "Test Course",
      //     user_id: 8,
      //     image: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
      //   }
      // ]
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(`${this.$hostname}/api/course/`)
        .then(response => {
          this.items = response.data;
          console.log(response);
        })
        .catch(error => {});
    }
  },
  mounted() {
    this.getData();
    setTimeout(() => {
      this.items = [
        {
          id: 2,
          title: "Test Course 2",
          user_id: null,
          image: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
        },
        {
          id: 1,
          title: "Test Course",
          user_id: 8,
          image: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
        }
      ];
    }, 500);
  }
};
</script>

<style>
</style>