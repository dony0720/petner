<script setup lang="ts">
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import AdoptionHero from '@/components/adoption/main/AdoptionHero.vue';
import AdoptionGraph from '@/components/adoption/main/AdoptionGraph.vue';
import AdoptionCategory from '@/components/adoption/main/AdoptionCategory.vue';
import AdoptionMap from '@/components/adoption/main/AdoptionMap.vue';
import AdoptionReviews from '@/components/adoption/main/AdoptionReviews.vue';
import AdoptionCardBanner from '@/components/adoption/main/AdoptionCardBanner.vue';
import { onMounted } from 'vue';
import { getShelterAniamls, getShelterInfo, getShelterListApi } from '@/apis/adoption/shelter';

// API TEST 용
onMounted(async () => {
  const res = await getShelterListApi();
  //const res = await getShelterInfo(311322200900001);
  //const res = await getShelterAniamls(311322200900001);
  console.log('res from main', res);
});
</script>

<template>
  <div class="main-wrapper">
    <!-- <AppHeader /> -->
    <AdoptionHero />
    <div class="fitted-contents">
      <AdoptionGraph />
    </div>
    <AdoptionCategory />
    <div class="fitted-contents">
      <AdoptionMap />
      <AdoptionReviews />
      <AdoptionCardBanner />
    </div>
    <!-- <AppFooter /> -->
  </div>
</template>

<style scoped>
.main-wrapper {
  width: 100vw;
}

.fitted-contents {
  width: 1280px;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
