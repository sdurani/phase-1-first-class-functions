// TEST 1

function receivesAFunction(callbackFunction) {
    callbackFunction();
}

// TeST 2

function returnsANamedFunction() {
    function namedFunction(){
        
    }

    return namedFunction;
}

// TEST 3

function returnsAnAnonymousFunction() {
    return function () {
    }
}

