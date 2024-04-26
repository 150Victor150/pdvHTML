function addSale(productName, quantity, total) {
    const salesDiv = document.getElementById('sales');

    const saleDiv = document.createElement('div');
    saleDiv.classList.add('sale');
    saleDiv.innerHTML = `
        <p><strong>Produto:</strong> ${productName}</p>
        <p><strong>Quantidade:</strong> ${quantity}</p>
        <p><strong>Total:</strong> R$ ${total.toFixed(2)}</p>
    `;

    salesDiv.appendChild(saleDiv);
}

// Exemplo de uso: adicionar uma venda à lista
addSale('Coca-Cola', 2, 10);
addSale('Coxinha de frango', 1, 6);
addSale('Paçoca', 3, 3);