// test-panier.js
const assert = require('assert');
const { updateCart, removeCartItem, createCartItem } = require('./panier');

describe('Panier Functions', () => {
    let cartContainer;

    beforeEach(() => {
        // Initialiser le panier avant chaque test
        cartContainer = document.createElement('div');
        cartContainer.id = 'cart-container';
        document.body.appendChild(cartContainer);
    });

    afterEach(() => {
        // Nettoyer après chaque test
        document.body.removeChild(cartContainer);
    });

    it('should update the cart and total correctly', () => {
        // Ajoutez des éléments au panier factice
        const mockCartItem1 = createCartItem("produit1.jpg", "Produit 1", 20.00, 2);
        const mockCartItem2 = createCartItem("produit2.jpg", "Produit 2", 25.00, 1);
        cartContainer.appendChild(mockCartItem1);
        cartContainer.appendChild(mockCartItem2);

        // Appel de la fonction à tester
        updateCart();

        // Vérification des résultats attendus
        assert.strictEqual(mockCartItem1.querySelector('.cart-subtotal').innerText, '$40.00');
        assert.strictEqual(mockCartItem2.querySelector('.cart-subtotal').innerText, '$25.00');
        // Vous devrez ajuster la vérification du total en fonction de votre code réel
        // assert.strictEqual(cartTotal.innerHTML, '<strong>Total: $65.00</strong>');
    });

    it('should remove an item from the cart', () => {
        // Ajoutez un élément au panier factice
        const mockCartItem = createCartItem("produit1.jpg", "Produit 1", 20.00, 1);
        cartContainer.appendChild(mockCartItem);

        // Appel de la fonction à tester
        removeCartItem(mockCartItem);

        // Vérification que l'élément a été supprimé
        assert.strictEqual(cartContainer.children.length, 0);
    });

    // Ajoutez d'autres tests en fonction de vos besoins
});