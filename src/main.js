// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { Observable } from 'rxjs/Observable'

const fruitsObservable = Observable.create(function subscribe(observer) {
    observer.next('🍎');
    observer.complete();
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

fruitsObservable.subscribe(fruitsObserver);
