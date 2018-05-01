// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';

const fruitsObservable = Observable.from(['🍎', '🍊', '🍋']);
fruitsObservable.subscribe({
    next: data => {
        console.log(data);
    }
});
const clickObservable = Observable.fromEvent(document, 'click');
clickObservable.subscribe({
    next: data => {
        console.log(data);
    }
});

// const keyupObservable = Observable.fromEvent(document.getElementById('search'), 'keyup');
// keyupObservable.subscribe({
//     next: data => {
//         console.log(data.key);
//     }
// });

const searchObservable = Observable
    .fromEvent(document.getElementById('search'), 'keyup')
    .throttleTime(1000); // interval 1 second;
searchObservable.subscribe({
    next: data => {
        console.log(data.key);
    }
});
