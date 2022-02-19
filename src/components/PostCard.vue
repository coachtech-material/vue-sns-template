<script setup>
import { toRefs } from "@vue/runtime-core";

const props = defineProps({ post: Object });
const { track, nickName, comment } = toRefs(props.post);
</script>

<template>
    <div class="post__card">
        <div class="post__img-wrapper">
            <img
                class="post__img"
                alt="trackImage"
                :src="track.artworkUrl100"
            />
        </div>
        <div class="post__body">
            <div class="post__item">
                <small class="post__item-small">曲名</small>
                <p class="post__item-p">{{ track.trackName }}</p>
            </div>
            <div class="post__item">
                <small class="post__item-small">アーティスト</small>
                <p class="post__item-p">{{ track.artistName }}</p>
            </div>
            <div class="post__item">
                <small class="post__item-small">ニックネーム</small>
                <p class="post__item-p">{{ nickName }}</p>
            </div>
            <div class="post__item">
                <small class="post__item-small">コメント</small>
                <p class="post__item-p">{{ comment }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.post__card {
    overflow: hidden;
    margin: 12px;
    width: calc(100% / 3 - 24px);
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.post__img {
    width: 100%;
    height: 260px;

    object-fit: cover;
}

.post__body {
    padding: 12px 24px;
}

.post__item {
    margin: 8px 0;
}

.post__item-p {
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>