import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
export class CustomValidators {
    

    static existsRecipeNameValid(control: FormControl): { [key: string]: boolean } {
        if (control.value == "ozay") {
            return { "recipeNameValidError": true }
        }
        return null;
    }

    static asynExistsRecipeNameValid(control: FormControl): Observable<any> | Promise<any> {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == "ozay") {
                    resolve({ "recipeNameValidError": true }
                    );
                }
                else
                    resolve(null);
            }, 1500);
        });
        return promise;
    }
}