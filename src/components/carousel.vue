<template>
  <div class="carousel">
    <carousel-3d :key="flash" :perspective="0" :space="400" :display="3" :controls-visible="true"
      :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" :controls-width="30" :controls-height="60"
      width="800" height="533">
      <slide v-for="(item, i) in imgList" :index="i" :key="i">
        <div>
          <!-- <img :src="``item.url" alt="" /> -->
          <img :src="item.url" alt="" />
          <div class="content">{{ item.content }}</div>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import { getBanners } from "@/api/index";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  name: "portal_site",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      imgList: [
      ],
      flash: false
    };
  },
  created() {
    this.getBanners();
  },
  methods: {
    getBanners() {
      getBanners().then((res) => {
        // 获取轮播
        if (res.code === 0) {
          const { banners } = res.data
          this.imgList = banners.length > 0 ? banners : this.imgList;
          this.flash = !this.flash
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .carousel-3d-slide {
  background-color: transparent;
  border: 0;
}

.carousel {
  position: relative;
}

.content {
  width: 100%;
  height: 48px;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 24px;
  line-height: 24px;
}
</style>
