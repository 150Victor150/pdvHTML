const products = {
        '1': { name: 'Coca-Cola', price: 5 },
        '2': { name: 'Coxinha de frango', price: 6 },
        '3': { name: 'Paçoca', price: 1 },
        '4': { name: 'chips', price: 6 },
        '5': { name: 'salgadinho', price: 6 },
        '6': { name: 'Salgado assado', price: 8 },
        '7': { name: 'Pão de queijo', price: 4},
        '8': { name: 'agua', price: 3},
        '9': { name: 'geladinho', price: 7},
        '10': {name: 'suco caixinha', price: 8}
    };

    let totals = [];

    document.getElementById('addProductBtn').addEventListener('click', function(event) {
        event.preventDefault();

        const code = document.getElementById('code').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const product = products[code];

        if (!product) {
            alert('Código de produto inválido!');
            return;
        }

        const total = product.price * quantity;
        totals.push(total);

        document.getElementById('total').innerText = `Total do Item: R$ ${total.toFixed(2)}`;

        // Adiciona o produto à lista
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} x${quantity} - Total: R$ ${total.toFixed(2)}`;
        document.getElementById('productList').appendChild(listItem);

        /*
        // Atualiza a tabela de códigos
        const codeTable = document.getElementById('codeTable');
        const row = codeTable.insertRow(-1);
        row.insertCell(0).textContent = code;
        row.insertCell(1).textContent = product.name;
        */

        // Calcula e exibe o valor total
        const grandTotal = totals.reduce((acc, curr) => acc + curr, 0);
        document.getElementById('grandTotal').innerText = `Total Geral: R$ ${grandTotal.toFixed(2)}`;

        // Limpa os campos de entrada
        document.getElementById('code').value = '';
        document.getElementById('quantity').value = '';
    });

    document.getElementById('quantity').addEventListener('input', function() {
        const code = document.getElementById('code').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const product = products[code];

        if (product) {
            const total = product.price * quantity;
            document.getElementById('total').innerText = `Total do Item: R$ ${total.toFixed(2)}`;
        }
    });

    document.getElementById('calculateChangeBtn').addEventListener('click', function(event) {
        event.preventDefault();
    
        document.getElementById('code').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addProduct();
            }
        });

        const amountPaid = parseFloat(document.getElementById('amountPaid').value);
        const grandTotal = totals.reduce((acc, curr) => acc + curr, 0);

        if (amountPaid < grandTotal) {
            alert('O valor pago é insuficiente.');
            return;
        }

        const change = amountPaid - grandTotal;
        alert(`Troco a ser dado: R$ ${change.toFixed(2)}`);

        // Recarrega a página
        window.location.reload();
    });