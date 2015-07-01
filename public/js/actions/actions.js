var React = require('react');
var mcFly = require('../dispatcher/mcflyDispatcher');
McFly = window.McFly || mcFly;

var Actions = McFly.createActions({
    getAbout: function(){
        return {
            actionType: "GET_ABOUT"
        }
    }
});

module.exports = Actions;