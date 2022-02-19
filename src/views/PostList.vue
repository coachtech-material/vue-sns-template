<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import PostCard from "@/components/PostCard.vue";

const store = useStore();
const posts = computed(() => store.state.posts);
</script>

<template>
    <div class="post">
        <div class="post__inner">
            <PostCard v-for="post in posts" :key="post.trackId" :post="post" />
        </div>
    </div>
</template>

<style scoped>
.post__inner {
    display: flex;
    margin: 60px auto 0;
    width: 70%;
}
</style>

