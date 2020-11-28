import { Observable, Subject, BehaviorSubject } from "rxjs";

export class LancamentosPresenter {

    private _getData: BehaviorSubject<any[]> = new BehaviorSubject(null);
    readonly setData$: Observable<any[]> = this._getData.asObservable();

    constructor() { }

    /**
     * Retorno
     * 
     * @param _data Array
     */
    setData(_data) {
        this._getData.next(_data);
    }


}
