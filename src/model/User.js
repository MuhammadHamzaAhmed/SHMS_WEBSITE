var User = /** @class */ (function () {
    function User(id, username, password, mail, phoneNumber, dob, age, gender) {
        this._id = id;
        this._username = username;
        this._password = password;
        this._mail = mail;
        this._phoneNumber = phoneNumber;
        this._dob = dob;
        this._age = age;
        this._gender = gender;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "mail", {
        get: function () {
            return this._mail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "dob", {
        get: function () {
            return this._dob;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());

export default User;