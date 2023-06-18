<template>
  <div class="carousel">
    <carousel-3d
      :perspective="0"
      :space="400"
      :display="3"
      :controls-visible="true"
      :controls-prev-html="'&#10092; '"
      :controls-next-html="'&#10093;'"
      :controls-width="30"
      :controls-height="60"
      width="800"
      height="533"
    >
      <slide v-for="(item, i) in imgList" :index="i" :key="i">
        <div>
          <img :src="item.imgUrl" alt="" />
          <div class="content">{{ item.content }}</div>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
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
        { imgUrl: img1, content: "介绍。。。。。" },
        { imgUrl: img2, content: "介绍。。。。。" },
        { imgUrl: img3, content: "介绍。。。。。" },
        { imgUrl: img4, content: "介绍。。。。。" },
        { imgUrl: img5, content: "介绍。。。。。" },
      ],
    };
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
