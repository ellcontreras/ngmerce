import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Component({  
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  name = '';
  category = 'tech';
  price = '';
  description = '';
  file;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  imageChange (e) {
    console.log(e);
    this.file = e.target.files[0];
  }

  publish () {
    const storageRef = firebase.storage().ref(`/fotos/${this.file.name}`);
    const task = storageRef.put(this.file);
    task.then(res => {
      task.snapshot.ref.getDownloadURL().then(url => {
        const record = {
          name: this.name,
          price: this.price,
          description: this.description,
          category: this.category,
          image: url
        };

        const dbRef = firebase.database().ref('/productos/');
        const newProduct = dbRef.push();
        newProduct.set(record).then(resp => {
          this.router.navigate(['/']);
        }).catch(err => {
          console.log(err);
        });
      }).catch(err => {
        console.log('Ha ocurrido un error', err);
      });
    }).catch(err => {
      console.log(err);
    });
  }

}
