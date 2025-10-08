/// <reference types="cypress" />

import Cart from "../../pages/cart";

describe('Cart', () => {
	beforeEach(() => {
		Cart.visitPage();
        Cart.checkUrl();
	});

	it('deve testar o carrinho', () => {
		expect(true).eq(true)
	});
});
