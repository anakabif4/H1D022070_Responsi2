import { Component } from '@angular/core';
import { ToysService } from '../services/toys.service.ts';

@Component({
  selector: 'app-add-toy',
  templateUrl: './add-toy.page.html',
  styleUrls: ['./add-toy.page.scss'],
})
export class AddToyPage {
  name = '';
  description = '';

  constructor(private toysService: ToysService) {}

  // Fungsi untuk menambahkan mainan
  async addToy() {
    if (this.name && this.description) {
      await this.toysService.addToy({ name: this.name, description: this.description });
      alert('Toy added successfully!');
      this.name = '';  // Reset form setelah submit
      this.description = '';
    } else {
      alert('Please fill in both fields');
    }
  }
}
