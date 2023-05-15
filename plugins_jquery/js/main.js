$(document).ready(function() {
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    $('#cel').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cel: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome:'Insira o nome completo.',
            email:'Digite um e-mail válido',
            cel:'Preencha o campo com seu número.',
            cpf:'Informe um CPF válido',
            endereco:'Preencha com o seu endereço.',
            cep:'Informe um CEP válido.'
        },
        
        submitHandler: function(form) {
            alert('Formulário enviado!');
            form.submit();
        }
    })
})
