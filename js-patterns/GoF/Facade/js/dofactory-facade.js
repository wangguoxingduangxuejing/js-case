var Mortage = function(name) {
    this.name = name;
}

Mortage.prototype = {
    applyFor: function(amount) {
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result + " for a " + amount + " mortage ";
    }
}

var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}

var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}

var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true
    }
}

function run () {
    var mortage = new Mortage("Joan Templeton");
    var result = mortage.applyFor("$100,000");

    alert(result);
}