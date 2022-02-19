<script setup>
import { ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import TrackCard from "@/components/TrackCard.vue";
import FormModal from "@/components/FormModal.vue";

const router = useRouter();
const store = useStore();

const searchWord = ref(null);
const trackList = ref([]);
const selectTrack = ref(null);
const isShowModal = ref(false);

const getITunesMusics = async () => {};

const setTrack = (track) => {
    selectTrack.value = track;
    isShowModal.value = true;
};

const closeModal = () => (isShowModal.value = false);

const goPostListPage = (event) => {
    const post = {
        nickName: event.nickName,
        comment: event.comment,
        track: selectTrack.value,
    };

    store.commit("addPost", post);
    router.push({ name: "PostList" });
};
</script>

<template>
    <div class="search-form">
        <form class="search-form__inner" @submit.prevent="getITunesMusics">
            <div class="search-form__item">
                <input
                    class="search-form__item-input"
                    type="text"
                    v-model="searchWord"
                />
            </div>
            <div class="search-form__button">
                <button class="search-form__button-submit" type="submit">
                    検索
                </button>
            </div>
        </form>
    </div>
    <div class="card__wrapper">
        <TrackCard
            class="card"
            v-for="track in trackList"
            :key="track.collectionId"
            :track="track"
            @click:select="setTrack"
        />
    </div>
    <FormModal
        v-if="isShowModal"
        @click:close="closeModal"
        @click:confirm="goPostListPage"
    />
</template>

<style scoped>
.search-form {
    margin: 60px auto 0;
    width: 70%;
}

.search-form__inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.search-form__item {
    width: 70%;
}

.search-form__item-input {
    padding: 0 10px;
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 16px;
}

.search-form__button {
    width: 20%;
}

.search-form__button-submit {
    padding: 10px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 3px;
    background: #000;
    color: #fff;
    cursor: pointer;
}

.card__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto 0;
    width: 70%;
}
</style>