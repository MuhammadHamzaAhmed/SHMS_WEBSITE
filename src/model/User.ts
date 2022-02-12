class User{
    private readonly _id:String
    private readonly _username:String
    private readonly _password:String
    private readonly _mail:String
    private readonly _phoneNumber:String
    private readonly _dob:Date
    private readonly _age:Number;
    private readonly _gender:Number;

    constructor(id: String, username: String, password: String, mail: String, phoneNumber: String, dob: Date, age: Number, gender: Number) {
        this._id = id;
        this._username = username;
        this._password = password;
        this._mail = mail;
        this._phoneNumber = phoneNumber;
        this._dob = dob;
        this._age = age;
        this._gender = gender;
    }

    get id(): String {
        return this._id;
    }

    get username(): String {
        return this._username;
    }

    get password(): String {
        return this._password;
    }

    get mail(): String {
        return this._mail;
    }

    get phoneNumber(): String {
        return this._phoneNumber;
    }

    get dob(): Date {
        return this._dob;
    }

    get age(): Number {
        return this._age;
    }

    get gender(): Number {
        return this._gender;
    }
}
export {User}