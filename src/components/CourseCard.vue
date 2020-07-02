<template>
  <v-card style="height: 100%" outlined>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline" v-text="item.title ? item.title : ''"></v-card-title>

        <v-card-subtitle v-text="'Курс'"></v-card-subtitle>
        <v-card-actions>
          <v-btn v-if="item.id !== ''" text :to="`/courses/${item.id}/details`">Подробнее</v-btn>
          <v-divider class="mx-4" vertical></v-divider>
          <v-tooltip bottom>
            <template v-slot:activator="{on}">
              <v-icon class="mr-1" color="green" v-on="on">mdi-checkbox-marked-outline</v-icon>
            </template>

            <span>Пройдено уроков/всего</span>
          </v-tooltip>

          <span class="subheading mr-2">5/10</span>
          <span class="mr-1">·</span>
          <v-tooltip bottom>
            <template v-slot:activator="{on}">
              <v-icon class="mr-1" color="blue darken-2" v-on="on">mdi-clock-outline</v-icon>
            </template>

            <span>Затрачено времени</span>
          </v-tooltip>
          <span class="subheading">00:45</span>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3 d-none d-sm-block" size="125" tile>
        <v-img v-if="item.image" :src="item.image"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    item: Object
  }
};
</script>

<style>
</style>