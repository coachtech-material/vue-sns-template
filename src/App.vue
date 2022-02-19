<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
    <TheHeader />
    <main>
        <router-view />
    </main>
</template>

<style>
@import "./assets/sanitize.css";

main {
    padding-top: 104px;
}
</style>
