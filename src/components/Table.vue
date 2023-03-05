<template>
    <div class="wrp-table">
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

.wrp-table {
    max-width: 540px;
    width: 100%;
    margin-left: 180px;
    margin-top: 80px;
}

.table {
    background: white;
    padding: 19px 20px;
    border-radius: 8px;
}

.table-title, .table-body {
    display: flex;
}

.table-title {
    height: 53px;
    border-bottom: 1px solid #dedede;
}

.table-title__text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.table-title__transition {
    max-width: 248px;
    flex: 1 0 70%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #000000;
    border-right: 1px solid #dedede;
}

.table-title__status {
    border-right: 1px solid #dedede;
}

.table-title__start {
    border-right: 1px solid #dedede;
}

.table-title__end {
    border-right: 1px solid #dedede;
}

.table-header {
    padding-top: 12px;
    padding-bottom: 14px;
    text-align: center;
}

</style>