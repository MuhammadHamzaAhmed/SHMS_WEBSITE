var Records = /** @class */ (function () {
    function Records(date, sex, cp, fbs, restEcg, exangco, slope, ca, thal, prediction) {
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
    Object.defineProperty(Records.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (value) {
            this._sex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "cp", {
        get: function () {
            return this._cp;
        },
        set: function (value) {
            this._cp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "fbs", {
        get: function () {
            return this._fbs;
        },
        set: function (value) {
            this._fbs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "restEcg", {
        get: function () {
            return this._restEcg;
        },
        set: function (value) {
            this._restEcg = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "exangco", {
        get: function () {
            return this._exangco;
        },
        set: function (value) {
            this._exangco = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "slope", {
        get: function () {
            return this._slope;
        },
        set: function (value) {
            this._slope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "ca", {
        get: function () {
            return this._ca;
        },
        set: function (value) {
            this._ca = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "thal", {
        get: function () {
            return this._thal;
        },
        set: function (value) {
            this._thal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Records.prototype, "prediction", {
        get: function () {
            return this._prediction;
        },
        set: function (value) {
            this._prediction = value;
        },
        enumerable: false,
        configurable: true
    });
    return Records;
}());

export default Records;