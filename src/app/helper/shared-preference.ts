import { Injectable, EventEmitter } from '@angular/core';
import { SharedService } from './shared.service';



@Injectable({
    providedIn: 'root'
})
export class SharedPreference implements SharedService {


    private expireKeys: Map<string, Date> = new Map();

    constructor() {
        this.clearExpireTime();
    }

    put(key: string, value: any);

    put(key: string, value: any, expireTime: number);

    put(key: any, value: any, expireTime?: any) {
        if (expireTime) {
            let now: Date = new Date();
            now.setMilliseconds(now.getMilliseconds() + expireTime);
            this.expireKeys.set(key, now);
        }
        localStorage.setItem(key, value);
    }
    get(key: string) {
        if (key)
            return localStorage.getItem(key);
        return null;
    }
    remove(key: string) {
        if (key)
            localStorage.removeItem(key);
    }

    private clearExpireTime() {
        setInterval(() => {
            this.removeLocalStorageByExpireDate();
        }, 30000);

    }

    private removeLocalStorageByExpireDate() {
        let now: Date = new Date();
        this.expireKeys.forEach((value, key) => {
            if (value < now) {
                this.remove(key);
                this.expireKeys.delete(key);
            }
        });
    }



}