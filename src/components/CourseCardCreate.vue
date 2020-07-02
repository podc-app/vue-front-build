<template>
  <v-card style="height: 100%">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline" v-text="'test'"></v-card-title>

        <v-card-subtitle v-text="'Курс'"></v-card-subtitle>
        <v-card-actions>
          <v-btn text>Подробнее</v-btn>
          
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="125" tile>
        <!-- <v-img :src="item.image"></v-img> -->
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CourseCardCreate",
  props: {
    item: Object
  }
};
</script>

<style>
</style>