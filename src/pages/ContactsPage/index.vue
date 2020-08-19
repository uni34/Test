<template>
    <div class="contacts container">
        <div class="row justify-content-center">
        <div class="row titlePanel">
            <h2 class="title">Контакты</h2>
            <div>
                <input placeholder="Поиск" class="search" v-model="data" @change="search">
                <img src="@/assets/img/search-icon.png" class="search-icon">

            <button class="next-btn" @click="adding = true">Добавить контакт</button>
            </div>
            <add-form
                    v-if="adding"
                    @close="adding = false"
                    @add="addContact">
            </add-form>
        </div>
        </div>
        <div class="contactsTable ">
            <contact-row class="contactRows"
                v-for="(contact, index) in contacts"
                :key="index"
                :Contact="contact"
                :i="index+1"
                @delContact="deleteContact">
            </contact-row>
        </div>
    </div>
</template>

<script src="./index.js" type="application/javascript">

</script>

<style src="./index.css" scoped></style>