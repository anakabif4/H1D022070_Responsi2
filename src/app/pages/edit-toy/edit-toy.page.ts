import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToysService } from 'app/services/toys.service.ts';

@Component({
  selector: 'app-edit-toy',
  templateUrl: './edit-toy.page.html',
  styleUrls: ['./edit-toy.page.scss'],
})
export class EditToyPage {
  id: string;
  name = '';
  description = '';

  constructor(
    private route: ActivatedRoute,
    private toysService: ToysService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadToy();
  }

  // Fungsi untuk memuat data mainan dari Firestore
  loadToy() {
    this.toysService.getToyById(this.id).subscribe(toy => {
      this.name = toy.name;
      this.description = toy.description;
    });
  }

  // Fungsi untuk memperbarui data mainan
  async updateToy() {
    if (this.name && this.description) {
      await this.toysService.updateToy(this.id, { name: this.name, description: this.description });
      alert('Toy updated successfully!');
    } else {
      alert('Please fill in both fields');
    }
  }
}
