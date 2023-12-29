var items = [];

document.querySelector('button[type=submit]')
    .addEventListener("click", () => {
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var precoProduto = document.querySelector('input[name=price]');

        if (nomeProduto.value.trim().length < 3) {
            alert("Nome do produto deve conter pelo menos 3 caracteres.");
        } else if (precoProduto.value === "" || isNaN(parseFloat(precoProduto.value))) {
            alert("Digite um valor válido para o produto.");
        } else {
            items.push({
                nome: nomeProduto.value,
                valor: parseFloat(precoProduto.value).toFixed(2)
            });

            let listaProdutos = document.querySelector('.lista-produtos');
            let soma = 0;

            listaProdutos.innerHTML = "";
            items.forEach((val) => {
                soma += parseFloat(val.valor);
                listaProdutos.innerHTML += `
                <div class="lista-produto-single">
                     <h3>${val.nome}</h3>
                     <h3 class="price-produto">R$${val.valor}</h3>
                </div>  
                `;
            });

            soma = soma.toFixed(2);

            nomeProduto.value = "";
            precoProduto.value = "";

            let somaContent = document.querySelector('.soma-produto h1');
            somaContent.innerHTML = "R$" + soma;
        }




    })

document.querySelector('button[name=limpar]')
    .addEventListener("click", () => {
        items = [];

        document.querySelector('.lista-produtos').innerHTML = "";
        document.querySelector('.soma-produto h1').innerHTML = "R$0,00";
    })