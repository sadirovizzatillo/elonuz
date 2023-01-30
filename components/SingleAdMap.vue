<script>
export default {
  name: 'SingleAdMap',
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 15,
      center: [41.311081, 69.240562],
      circle: {
        center: [41.311081, 69.240562],
        radius: 6,
        color: '#0B1C47',
      },
    }
  },
}
</script>

<template>
  <div class="w-full block <tablet:absolute <tablet:left-0 tablet:h-92 <tablet:h-full">
  <LMap class="z-0 w-full !tablet:h-92 !<tablet:h-full tablet:rounded tablet:rounded-tl-none border border-zinc-300" :zoom="zoom" :center="center">
    <LTileLayer class="w-full !tablet:h-92 !<tablet:h-full" :url="url" />
    <LCircleMarker
      :lat-lng="circle.center"
      :radius="circle.radius"
      :color="circle.color"
    />
  </LMap>
  </div>
</template>
