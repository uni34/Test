<template>
    <div class="ContactRow container" v-if="!hide">
        <div class="info col-9">
            <div class="cell col">{{i}}</div>
            <div class="cell col-5">{{Contact.name}}</div>
            <div class="cell col-4">{{Contact.phone}}</div>
        </div>
        <div>
            <button class="next-btn " @click="editing = true">Редактировать</button>
            <edit-form v-if="editing"
            :name="Contact.name"
            :phone="Contact.phone"
            @edit="editContact"
            @close="editing = false">
            </edit-form>
            <button class="next-btn " @click="del">Удалить</button>
        </div>

    </div>
</template>

<script src="./index.js" type="application/javascript">
</script>

<style scoped src="./index.css" rel="stylesheet">
</style>