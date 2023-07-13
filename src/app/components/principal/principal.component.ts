import { Component } from '@angular/core';

enum InventoryStatus {
  InStock = 'In Stock',
  OutOfStock = 'Out of Stock',
  LimitedStock = 'Limited Stock'
}

interface Product {
  name: string;
  price: number;
  imageUrl: string;
  inventoryStatus?: InventoryStatus;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  products: Product[] = [
    {
      name: 'Producto 1',
      price: 10.99,
      imageUrl: 'assets/layout/images/carrucel/lumity.png',
      inventoryStatus: InventoryStatus.InStock
    },
    {
      name: 'Producto 2',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity2.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 3',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity3.jpg',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 4',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity4.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 5',
      price: 10.99,
      imageUrl: 'assets/layout/images/carrucel/lumity5.png',
      inventoryStatus: InventoryStatus.InStock
    },
    {
      name: 'Producto 6',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity6.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 7',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity7.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 8',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity8.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    {
      name: 'Producto 9',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity9.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },  {
      name: 'Producto 10',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity10.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },  {
      name: 'Producto 11',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity11.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },  {
      name: 'Producto 12',
      price: 19.99,
      imageUrl: 'assets/layout/images/carrucel/lumity12.png',
      inventoryStatus: InventoryStatus.OutOfStock
    },
    // Agrega más objetos de producto con la información de las imágenes
  ];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
