// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { Observable } from 'rxjs/Observable'

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
