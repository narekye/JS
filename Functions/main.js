// optional parameter count...
function Func(param, count) {
    if (count == undefined) {
        count = 5;
    }
    for (var i = 0; i < count; i++) {
        document.write("<p>" + param + "</p>");
    }
}

// arguments property on any function..
function Args(param1,param2,param3) {
    if (arguments.length !== 3) {
        document.write("Exception");
        return;
    } else {
        document.write("All done..");
    }
}