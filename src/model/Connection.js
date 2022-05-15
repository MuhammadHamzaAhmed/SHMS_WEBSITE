class User{
    constructor(email, name, pass) {
        this.email = email
        this.name = name
        this.pass = pass
    }
}
class Connection{

    constructor() {
        this.mysql = require('mysql')
        this.con = this.mysql.createConnection(
            {
                host:"mysql-78213-0.cloudclusters.net",
                port:19493,
                user:"admin",
                password:"BAuupcgf",
                database:"shms"
            }
        );
        this.con.connect(function (err){
            if(err) throw err
        })
        this.email = null
    }

    getUser(email, pass, callback){
        this.con.query("SELECT * FROM user where email=\""+email+"\" and password=\""+pass+"\";", function (err, result){
            if(err) return callback(err)
            if(result.length === 1) {
                const user = new User(email, result[0].name, pass)
                this.email = email
                callback(null, user)
            }else
                callback(null, null)
        })
    }

    getHealthRecord(email, callBack){
        const healthMonitor = []
        this.con.query("SELECT * FROM healthmonitoring where email=\""+email+"\";", function (err, result){
            if(err) callBack(err)
            if(result.length !== 0) {
                console.log("Done 5")
                for(let i=0;i<result.length;i++){
                    healthMonitor.push({
                        temp:result[i].temperature,
                        bp:result[i].bloodPressure,
                        hp:result[i].heartRate,
                        sg:result[i].sugar
                    })
                }
                callBack(null, healthMonitor)
            }else{
                callBack(null, null)
            }
        })

    }
}

const con = new Connection();
export default con


