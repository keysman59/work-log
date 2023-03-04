<template>
    <div class="table">
        <div class="table-title">
            <div class="table-title__text table-title__transition">Переход</div>
            <div class="table-title__text table-title__status">Статус</div>
            <div class="table-title__text table-title__start">Начало</div>
            <div class="table-title__text table-title__end">Окончание</div>
            <div class="table-title__text table-title__total">Всего</div>
        </div>     
        <div class="table-header">
            Иванов Иван Иванович 
        </div>     
        <div class="table-body">
            <div class="table-title__text table-title__transition">
                
            </div>
            <div class="table-title__text table-title__status">Статус</div>
            <div class="table-title__text table-title__start">Начало</div>
            <div class="table-title__text table-title__end">Окончание</div>
            <div class="table-title__text table-title__total">Всего</div>
        </div>     
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>

.table {
    background: white;
    padding: 19px 20px;
}

.table-title, .table-body {
    display: flex;
}

.table-title__text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.table-title__transition {
    max-width: 248px;
}

.table-header {
    padding-top: 12px;
    padding-bottom: 14px;
    text-align: center;
}

</style>