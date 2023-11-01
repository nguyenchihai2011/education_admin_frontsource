<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-card
          class="primary d-flex flex-column align-center py-4"
          style="border-radius: 12px;"
        >
          <v-avatar tile size="80" class="my-2">
            <img src="@/assets/lecture.jpg" alt="John" />
          </v-avatar>
          <div class="white--text text-h6">Total lecture</div>
          <div class="white--text text-h6">
            {{ statisticalTotal.totalLectures }}
          </div>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card
          class="primary d-flex flex-column align-center py-4"
          style="border-radius: 12px;"
        >
          <v-avatar tile size="80" class="my-2">
            <img src="@/assets/student.png" alt="John" />
          </v-avatar>
          <div class="white--text text-h6">Total student</div>
          <div class="white--text text-h6">
            {{ statisticalTotal.totalStudents }}
          </div>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card
          class="primary d-flex flex-column align-center py-4"
          style="border-radius: 12px;"
        >
          <v-avatar tile size="80" class="my-2">
            <img src="@/assets/course.png" alt="John" />
          </v-avatar>
          <div class="white--text text-h6">Total course</div>
          <div class="white--text text-h6">
            {{ statisticalTotal.totalCourses }}
          </div>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card
          class="primary d-flex flex-column align-center py-4"
          style="border-radius: 12px;"
        >
          <v-avatar tile size="80" class="my-2">
            <img src="@/assets/lesson.png" alt="John" />
          </v-avatar>
          <div class="white--text text-h6">Total lesson</div>
          <div class="white--text text-h6">
            {{ statisticalTotal.totalLessons }}
          </div>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card
          class="primary d-flex flex-column align-center py-4"
          style="border-radius: 12px;"
        >
          <v-avatar tile size="80" class="my-2">
            <img src="@/assets/order.jpg" alt="John" />
          </v-avatar>
          <div class="white--text text-h6">Total order</div>
          <div class="white--text text-h6">
            {{ statisticalTotal.totalOrders }}
          </div>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card
          class="primary d-flex flex-column align-center py-4"
          style="border-radius: 12px;"
        >
          <v-avatar tile size="80" class="my-2">
            <img src="@/assets/revenue.png" alt="John" />
          </v-avatar>
          <div class="white--text text-h6">Total revenue</div>
          <div class="white--text text-h6">
            {{ statisticalTotal.totalRevenue }}$
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <RevenueChart :dataRevenue="dataRevenue"></RevenueChart>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import RevenueChart from "@/components/app/RevenueChart.vue";
import { statisticalTotal, revenueMonthly } from "@/api/statistical";
export default {
  components: { RevenueChart },
  data: () => ({
    statisticalTotal: {},
    dataRevenue: []
  }),
  computed: {},

  methods: {},
  created() {
    statisticalTotal().then(res => {
      this.statisticalTotal = res.data;
    }),
      revenueMonthly().then(res => {
        this.dataRevenue = res.data;
      });
  }
};
</script>
<style lang=""></style>
