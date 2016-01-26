var Utils = require(__dirname+'/Utils');
var UtilsWeather = function(){
    var $this = this;

    this.get = (city,cb) => {
        // var q = Utils.q();
        return new Promise((resolve,reject) => {
            if(city){
                var req = Utils.request();
                req.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',es&lang=sp&units=metric&appid=91ace8606d31eb909caff50f9cd5bffa',function(err,res,body){
                    if (!err && res.statusCode === 200) {
                        body=JSON.parse(body);
                        if(cb) cb(null,body);
                        return resolve(body);
                    }else{
                        if(cb) cb(err);
                        return reject();
                    }
                });
            }else{
                var err = "Ha de introducir una ciudad";
                if(cb) cb(err);
                return reject(err);
            }
        });
    };

    this.write = (city,w) => {
        console.log("El tiempo en la ciudad de "+city+" es: "+w.weather[0].description+" y "+w.main.temp+"º");
    };

    this.print = (city) => {
        $this.get(city).then(function(w){
            $this.write(city,w);
        },function(){
            console.log('Ha de indicar una ciudad');
        });
    };
};

UtilsWeather.prototype = new Utils();

module.exports = UtilsWeather;
