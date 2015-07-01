var $ = require('jquery');
var React = require('react');
var _ = require('underscore');
var mcFly = require('../dispatcher/mcflyDispatcher');
McFly = window.McFly || mcFly;

var _info;

function getAjax(url){

    return new Promise(function(resolve, rej){

        if(_info){
            resolve(_info);
        }

        $.ajax({
            url: url,
            dataType: 'json',
            success: function(data){
                resolve(data);
            }
        })

    });

}

function getAbout(){

    return new Promise(function(resolve, rej){

        getAjax('public/js/data/info.json').then(function(data){
            console.log('resolve json');
            _info = data;
            resolve(data);
        });

    });

}

var Store = McFly.createStore({

    getAbout: function(){
        return _info;
    }

},function(payload){

    if(
        payload.actionType === "GET_ABOUT"
    ){
        getAbout(payload).then(function(data){
            Store.emitChange();
        });
    }

});

module.exports = Store;