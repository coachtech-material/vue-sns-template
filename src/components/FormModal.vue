<script setup>
import { ref } from "@vue/runtime-core";

const emit = defineEmits(["click:confirm", "click:close"]);

const nickName = ref(null);
const comment = ref(null);

const emitClose = () => emit("click:close");

const emitConfirm = () => {
    const event = {
        nickName: nickName.value,
        comment: comment.value,
    };

    emit("click:confirm", event);
};
</script>

<template>
    <teleport to="#modal-body">
        <div class="modal" @click.self="emitClose">
            <div class="modal-content">
                <form class="post-form" @submit.prevent="emitConfirm">
                    <div class="post-form__item">
                        <label for="nick-name" class="post-form__item-label"
                            >ニックネーム</label
                        >
                        <input
                            id="nick-name"
                            class="post-form__item-input"
                            type="text"
                            v-model="nickName"
                        />
                    </div>
                    <div class="post-form__item">
                        <label for="comment" class="post-form__item-label"
                            >コメント</label
                        >
                        <input
                            id="comment"
                            class="post-form__item-input"
                            type="text"
                            v-model="comment"
                        />
                    </div>
                    <div class="post-form__button">
                        <button class="post-form__button-submit" type="submit">
                            シェア
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </teleport>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    width: 50%;
    height: 40%;
    background: #fff;
    transform: translate(-50%, -50%);
}

.post-form {
    width: 100%;
}

.post-form__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    width: 100%;
}

.post-form__item-label {
    font-weight: bold;
}

.post-form__item-input {
    padding: 0 10px;
    width: 70%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 16px;
}

.post-form__button {
    margin: 40px auto 0;
    width: 20%;
}

.post-form__button-submit {
    padding: 10px;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 3px;
    background: #000;
    color: #fff;
    cursor: pointer;
}
</style>