<template>
    <div class="editContact container">
        <div class="">
        <div class="popup container">
            <div class="header row justify-content-center">
                Редактирование
                <img src="@/assets/img/close-outline.svg" class="closeBtn" @click="$emit('close')">
            </div>
            <div class="row newInfo justify-content-center">
                <div class="form-group">
                    <div>
                        <label class="title" for="name">Имя</label>
                        <error-message
                                :error="error_name[0]"
                                v-show="error_name.length>0">
                        </error-message>
                    </div>
                    <input
                            id="name"
                            class="inputPlace"
                            placeholder="Введите новое имя"
                            :value="name"
                    >
                </div>

                <div class="form-group">
                    <div>
                        <label class="title" for="phone">Номер телефона</label>
                        <error-message
                                :error="error_phone[0]"
                                v-show="error_phone.length>0">
                        </error-message>
                    </div>
                    <input
                            id="phone"
                            class="inputPlace"
                            placeholder="Введите новый номер"
                            :value="phone"
                    >
                </div>
            </div>
            <div class=" row justify-content-center">
                <button class="next-btn saveBtn" @click="saveInfo">
                    Сохранить изменения
                </button>
            </div>
        </div>
    </div>
    </div>
</template>

<script src="./index.js">

</script>

<style src="./index.css" scoped>

</style>