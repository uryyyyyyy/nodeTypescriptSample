
require('es6-promise').polyfill();
import axios = require('axios');
import AxiosXHR = Axios.AxiosXHR;
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var onSuccess = function(value:any) {
	console.log(value);
};

var onFailure = function(value:any) {
	console.log("onFailure");
	console.log(value);
};

var func:() => Promise<any> = async (function () {
	var res1:AxiosXHR<any> = await(axios.get('http://date.jsontest.com/'));
	var res2:AxiosXHR<any> = await(axios.get('http://date.jsontest.com/'));
	console.log(res1);
	console.log(res2);
	return "success";
});

func().then(onSuccess).catch(onFailure);