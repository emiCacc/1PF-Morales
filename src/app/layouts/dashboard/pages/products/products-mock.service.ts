export class ProductsMockService {
    getProducts() {
        return [
        {
            id: 2,
            name: 'Producto Mock 1',
            price: 9999,
        },
        {
            id: 2,
            name: 'Producto Mock 2',
            price: 234324,
        },
        {
            id: 3,
            name: 'Producto Mock 3',
            price: 45336,
        }
    ];
    }
}