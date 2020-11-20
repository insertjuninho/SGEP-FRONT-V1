import { Observable, Subject, BehaviorSubject } from "rxjs";

export class GlobalPresenter {

    private _userData: BehaviorSubject<any> = new BehaviorSubject(null);
    readonly setData$: Observable<any> = this._userData.asObservable();

    constructor() { }

    setData(data) {
        this._userData.next(data);
    }


}
