// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const fruitsObservable = Observable.from(['🍎', '🍊', '🍋']);
fruitsObservable.subscribe({
    next: data => {
        console.log(data);
    }
});
