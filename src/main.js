import { Observable } from 'rxjs/Observable'

const fruitsObservable = Observable.create(function subscribe(observer) {
    observer.next('🍎');
    observer.complete();
});