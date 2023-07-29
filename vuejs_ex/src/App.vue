<script setup>
import { reactive, watch } from 'vue';

const estado = reactive({
    filtro: 'soma',
    valor1: 0,
    valor2: 0,
    resultado: 0,
});

function calcular() {
    let { filtro } = estado;

    switch(filtro) {
        case 'soma':
            estado.resultado = Number(estado.valor1) + Number(estado.valor2);
            break;
        case 'subtracao':
            estado.resultado = Number(estado.valor1) - Number(estado.valor2);
            break;
        case 'multiplicacao':
            estado.resultado = Number(estado.valor1) * Number(estado.valor2);
            break;
        default:
            estado.resultado = 0;
    }
}

watch([() => estado.valor1, () => estado.valor2, () => estado.filtro], () => {
    calcular();
});

</script>

<template>
    <div class="container">
        <header class="p-5 mb-4 mt-4 bg-light rounded-3">
            <h1>Calculadora aritmética</h1>
            <p>
                Escolha entre soma, subtração ou multiplicação.
            </p>
        </header>
        <form>
            <div class="row">
                <div class="col-md-2">
                    <select @change="evento => estado.filtro = evento.target.value" class="form-control">
                        <option value="soma">Soma</option>
                        <option value="subtracao">Subtração</option>
                        <option value="multiplicacao">Multiplicação</option>
                    </select>
                </div>
                <div class="col">
                    <input type="text" placeholder="Digite um valor" class="form-control" @keyup="evento => estado.valor1 = evento.target.value">
                </div>
                <div class="col">
                    <input type="text" placeholder="Digite outro valor" class="form-control" @keyup="evento => estado.valor2 = evento.target.value">
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn btn-primary">Efetuar</button>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mt-5">
                    <p>
                        O resultado é: {{ estado.resultado }}
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>
