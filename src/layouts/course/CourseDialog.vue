<template>
  <core-dialog
    v-model="model"
    :width="650"
    :height="700"
    persistent
    :title="title"
  >
    <template v-slot:title>
      <div style="width: 100%;">{{ title }}</div>
      <v-divider class="my-1" color="#ccc"></v-divider>
    </template>
    <template v-slot:body>
      <div>
        <v-row no-gutters class="">
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Name:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.name }}
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Title:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.title }}
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Image:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              <v-img :src="course.imageUrl"></v-img>
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Description:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.description }}
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Price:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.price }}
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Level:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.level }}
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Language:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.language }}
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Category:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.categoryId }}
            </div>
          </v-col>
        </v-row>
      </div>
    </template>
    <template v-slot:actions>
      <div class="d-flex justify-center">
        <core-button
          @click.native="closeDialog()"
          outlined
          color="primary"
          class="rounded-lg"
        >
          Cancel
        </core-button>
      </div>
    </template>
  </core-dialog>
</template>

<script>
import CoreDialog from "@/components/core/CoreDialog.vue";
import CoreButton from "@/components/core/CoreButton.vue";
import { getCourse } from "@/api/course";

export default {
  components: { CoreDialog, CoreButton },
  data() {
    return {
      course: {
        name: "",
        title: "",
        imageUrl: "",
        description: "",
        price: 0,
        level: "",
        language: "",
        categoryId: ""
      }
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  },

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },

    fetchData() {
      getCourse(this.idInit).then(res => {
        this.course = res.data;
      });
    }
  },

  created() {
    this.fetchData();
  },

  props: {
    title: {
      type: String
    },
    value: {
      type: Boolean
    },
    idInit: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped></style>
