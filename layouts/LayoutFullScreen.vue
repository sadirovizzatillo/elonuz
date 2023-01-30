<script>
import { LAYOUTS } from "~/constants";

export default {
    name: LAYOUTS.LayoutFullScreen
}
</script>

<template>
    <main class="w-screen h-screen overflow-hidden bg-white">
        <Nuxt/>
    </main>
</template>