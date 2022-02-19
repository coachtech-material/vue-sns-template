<script setup>
import { toRefs } from "@vue/runtime-core";

const emit = defineEmits(["click:select"]);

const props = defineProps({
    track: Object,
});
const { track } = toRefs(props);

const emitSelect = (track) => emit("click:select", track);
</script>

<template>
    <div class="card" @click="emitSelect(track)">
        <div class="card__img-wrapper">
            <img
                class="card__img"
                alt="trackImage"
                :src="track.artworkUrl100"
            />
        </div>
        <div class="card__body">
            <div class="card__item">
                <small class="card__item-small">曲名</small>
                <p class="card__item-p">{{ track.trackName }}</p>
            </div>
            <div class="card__item">
                <small class="card__item-small">アーティスト</small>
                <p class="card__item-p">{{ track.artistName }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    overflow: hidden;
    margin: 12px;
    width: calc(100% / 4 - 24px);
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
}

.card__img {
    display: block;
    width: 100%;
    height: 200px;

    object-fit: contain;
}

.card__body {
    padding: 16px;
}

.card__item {
    margin: 8px 0;
}

.card__item-p {
    overflow: hidden;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>