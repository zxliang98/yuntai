<template>
  <div>
    <!-- 35.4201789,113.367424,13 -->
    <!-- <el-image :src="imgWelcome"></el-image> -->
    <baidu-map
      class="map"
      :center="{lng: 113.367424, lat: 35.4201789}"
      :zoom="11"
      :scroll-wheel-zoom="true"
      @click="getMapInfo"
    ></baidu-map>
  </div>
</template>

<script>
// import imgWelcome from '@/assets/imgs/welcome.jpg'
export default {
  data () {
    return {
      // imgWelcome,
      center: { lng: 126.150394, lat: 41.9870815 },
      zoom: 0
    }
  },
  methods: {
    getMapInfo (e) {
      console.log(e)
    }
  },
  mounted () {}
}
</script>

<style>
.map {
  width: 500px;
  height: 300px;
}
</style>
