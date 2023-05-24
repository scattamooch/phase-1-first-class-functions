//random function
function random() {
    console.log("This function only exists to be used in my next function.")
}

//receivesAFunction and calls it
function receivesAFunction(random) {
    random();
}

//returnsANamedFunction
function returnsANamedFunction() {
    let name;
    if (2 === 1 + 1) {
        name = "Sean";
    }
    return function madeUpUselessFunction() {
        console.log("Yep, 2 = 2, so name=Sean, and we can return this made up useless function.")
    }
}

//returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    let name;
    if (2 === 1 + 1) {
        name = "Sean";
    }
    return function() {
        console.log("Yep, 2 = 2, so name=Sean, and we can return this made up useless function.")
    }
}