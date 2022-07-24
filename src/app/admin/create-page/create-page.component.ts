import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DropdownContent, Product, ProductPost, TypeId} from "../../shared/interface";
import {ProductService} from "../../shared/product.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})


export class CreatePageComponent implements OnInit {


  form: FormGroup;

  typeId: DropdownContent[];

  selectedTypeId: DropdownContent;


  brandId: DropdownContent[];

  selectedBrandId: DropdownContent;

  constructor(private productService: ProductService) {
    this.typeId = [
      {name: 'Телефоны', code: '1'},
      {name: 'ПК', code: '2'}
    ];

    this.brandId = [
      {name: 'Apple', code: '1'},
      {name: 'Lenovo', code: '2'}
    ];
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      typeId: new FormControl(null, Validators.required),
      brandId: new FormControl(null, Validators.required),
      img: new FormControl(null),
      imgSource: new FormControl(null)
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        imgSource: file
      });
    }
  }

  submit() {
      if (this.form.invalid) {
        return;
      }
      //

      const product: ProductPost = {
        name: this.form.value.name,
        price: this.form.value.price,
        typeId: this.form.value.typeId.code,
        brandId: this.form.value.brandId.code,
        img: this.form.value.imgSource,
      };

    // const formData = new FormData();
    //
    // formData.append('name', this.form.get('name').value);
    // formData.append('price', this.form.get('price').value);
    // formData.append('typeId', this.form.get('typeId').value);
    // formData.append('brandId', this.form.get('brandId').value);
    // formData.append('img', this.form.get('imgSource').value);

      console.log(product)

    this.productService.create(product).subscribe(() => {
      this.form.reset();
      console.log("Товар создан")
    });
  }
}
