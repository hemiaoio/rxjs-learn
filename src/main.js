// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/debounceTime';

const fruitsObservable = Observable.create(function subscribe(observer) {
    observer.next('🍎');
    observer.next('🍊');
    setTimeout(function () {
        observer.next('🍋');
        observer.complete();
    }, 2000);
})

const fruitsObserver = {
    next: function (data) {
        console.log(data)
    },
    error: function (error) {
        console.log(error)
    },
    complete: function () {
        console.log('complete')
    }
}
console.log('-----before subscribe ------ ');
const fruitsSubscription = fruitsObservable.subscribe(fruitsObserver);

console.log('-----after subscribe ------ ');

setTimeout(function () {
    fruitsSubscription.unsubscribe(); // didn't print '🍋'
}, 1000);

const fruitsObservableWithFrom = Observable.from(['🍎', '🍊', '🍋']);
fruitsObservableWithFrom.subscribe({
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

// const searchObservable = Observable
//     .fromEvent(document.getElementById('search'), 'keyup')
//     .throttleTime(1000); // interval 1 second;
// searchObservable.subscribe({
//     next: data => {
//         console.log(data.key);
//     }
// });

const searchObservable = Observable
    .fromEvent(document.getElementById('search'), 'keyup')
    .debounceTime(1000); // less 1 second input will discard;
searchObservable.subscribe({
    next: data => {
        console.log(document.getElementById('search').value);
    }
});
