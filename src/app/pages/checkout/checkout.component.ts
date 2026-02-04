import { CartService } from '@/services/cart.service';
import { CheckoutService } from '@/services/checkout.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  isCheckoutComplete = false;
  shipCost: number = 0;

  constructor(public cartService: CartService,
    private toastrService: ToastrService,
    private checkoutService: CheckoutService,
    private fb: FormBuilder) { }

  checkoutForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    pay: [null as File | null, Validators.required],
    ship: ['', Validators.required],
    shipcost: [0]
  });

  pay: File | null = null;
  formSubmitted = false;

  handleShippingCost(value: number | string) {
    if (value === 'free') {
      this.shipCost = 0;
      this.checkoutForm.patchValue({
        shipcost: 0
      });
    } else {
      this.shipCost = value as number;
      this.checkoutForm.patchValue({
        shipcost: this.shipCost
      });
    }
  }
  onFileSelect(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.pay = file;
      this.checkoutForm.patchValue({ pay: file });   // <-----
      this.checkoutForm.get('pay')?.updateValueAndValidity();
    }
  }

  onFileDropped(event: any) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    this.pay = file;
    this.checkoutForm.patchValue({ pay: file });
    this.checkoutForm.get('pay')?.updateValueAndValidity();
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.checkoutForm.invalid) {
      console.log('Formulario incompleto');
      return;
    }

    const formValues = this.checkoutForm.value;

    const items = this.cartService.getCartProducts().map(item => {
      const finalPrice = item.discount > 0
        ? item.price - (item.price * item.discount / 100)
        : item.price;

      return {
        product_id: item.id,
        quantity: item.orderQuantity,
        price: Number(finalPrice.toFixed(2))
      };
    });

    this.checkoutService.sendCheckout(formValues, items)
      .subscribe({
        next: (res) => {
          console.log('Respuesta del servidor', res);
          this.isCheckoutComplete = true;
          this.cartService.checkout_cart();
        },
        error: (err) => console.error('Error', err)
      });
  }

  get name() {
    return this.checkoutForm.get('name');
  }

  get phone() {
    return this.checkoutForm.get('phone');
  }

  get city() {
    return this.checkoutForm.get('city');
  }

  get address() {
    return this.checkoutForm.get('address');
  }

  get ship() {
    return this.checkoutForm.get('ship');
  }
}
