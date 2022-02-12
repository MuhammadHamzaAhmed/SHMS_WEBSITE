class Records{
    private _date:Date;
    private _sex:number; // gender of person
    private _cp:number;  // chest pain
    private _fbs:number; // fasting blood pressure
    private _restEcg:number;  // resting ecg result(0, 1, 2)
    private _exangco:number;  // exercise induced angina
    private _slope:number;  // the slope of the peak exercise ST segment
    private _ca:number;  //  number of major vessels (0-3) colored by fluoroscopy
    private _thal:number; // thal: 3 = normal; 6 = fixed defect; 7 = reversible defect
    private _prediction:number;

    constructor(date: Date, sex: number, cp: number, fbs: number, restEcg: number, exangco: number, slope: number, ca: number, thal: number, prediction: number) {
        this._date = date;
        this._sex = sex;
        this._cp = cp;
        this._fbs = fbs;
        this._restEcg = restEcg;
        this._exangco = exangco;
        this._slope = slope;
        this._ca = ca;
        this._thal = thal;
        this._prediction = prediction;
    }


    get date(): Date {
        return this._date;
    }

    get sex(): number {
        return this._sex;
    }

    get cp(): number {
        return this._cp;
    }

    get fbs(): number {
        return this._fbs;
    }

    get restEcg(): number {
        return this._restEcg;
    }

    get exangco(): number {
        return this._exangco;
    }

    get slope(): number {
        return this._slope;
    }

    get ca(): number {
        return this._ca;
    }

    get thal(): number {
        return this._thal;
    }

    get prediction(): number {
        return this._prediction;
    }

    set date(value: Date) {
        this._date = value;
    }

    set sex(value: number) {
        this._sex = value;
    }

    set cp(value: number) {
        this._cp = value;
    }

    set fbs(value: number) {
        this._fbs = value;
    }

    set restEcg(value: number) {
        this._restEcg = value;
    }

    set exangco(value: number) {
        this._exangco = value;
    }

    set slope(value: number) {
        this._slope = value;
    }

    set ca(value: number) {
        this._ca = value;
    }

    set thal(value: number) {
        this._thal = value;
    }

    set prediction(value: number) {
        this._prediction = value;
    }
}

export {Records}