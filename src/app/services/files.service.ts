import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(
    private afFileStorage: AngularFireStorage
  ) { }

  async uploadPhoto(file: File, path: string, fileName: string): Promise<any> {
    return await this.afFileStorage.upload(path + '/' + fileName, file)
  }

  getDownloadLink(name: string): Observable<string> {
    return this.afFileStorage.ref(name).getDownloadURL()
  }
}
