import { Injectable } from '@angular/core';

import {DecryptEncryptService} from './decrypt-encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor(
    /* private _decryptEncrypt: DecryptEncryptService */
  ) { }

  public getItem(ttl: string) {
    // get item
    // Jwt decode now crpto-js
    // JSON.parse
    // return
    let decrypted;
    const encryption: string = this.getRaw(ttl);

    // case []
    // encryption === '[]'
    //   ? (decrypted = '[]')
    //   : (() => {
    //       if (encryption === null || encryption === undefined) {
    //         decrypted = 'null';
    //       } else {
    //         const bytes = AES.decrypt(encryption.toString(), this.seckey);
    //         // console.log(`bytes: ${bytes}`);
    //         decrypted = bytes.toString(enc.Utf8);
    //       }
    //     })();

    // cannot use JSON.parse as everything cannot be JSON
    return encryption;
  }

  public setItem(ttl: string, data: object | string) {
    // this.setRaw(ttl, this.encrypt(this.stringify(data)));
    this.setRaw(ttl, this.stringify(data));
  }

  protected stringify(data): string {
    return JSON.stringify(data);
  }

  protected encrypt(data: string): string {
    // return this._decryptEncrypt
    // .encrypt(data);
    return '';
  }

  protected decrypt(data: string): string {
    // return this._decryptEncrypt
    // .decrypt(data);
    return '';
  }

  public removeItem(ttl: string) {
    localStorage.removeItem(ttl);
  }

  protected setRaw(ttl: string, data: string) {
    localStorage.setItem(ttl, data);
  }

  protected getRaw(ttl: string): string {
    return localStorage.getItem(ttl);
  }
}
