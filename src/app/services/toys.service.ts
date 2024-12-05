import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToysService {

  constructor(private firestore: AngularFirestore) { }

  // Fungsi untuk mengambil data mainan berdasarkan ID
  getToyById(id: string): Observable<any> {
    return this.firestore.collection('toys').doc(id).valueChanges();
  }

  // Fungsi untuk menambahkan mainan baru
  addToy(toy: any): Promise<void> {
    const id = this.firestore.createId(); // Membuat ID baru untuk mainan
    return this.firestore.collection('toys').doc(id).set(toy);
  }

  // Fungsi untuk memperbarui mainan yang sudah ada
  updateToy(id: string, updatedToy: any): Promise<void> {
    return this.firestore.collection('toys').doc(id).update(updatedToy);
  }

  // Fungsi untuk menghapus mainan
  deleteToy(id: string): Promise<void> {
    return this.firestore.collection('toys').doc(id).delete();
  }

  // Fungsi untuk mendapatkan semua mainan
  getAllToys(): Observable<any[]> {
    return this.firestore.collection('toys').valueChanges();
  }
}
