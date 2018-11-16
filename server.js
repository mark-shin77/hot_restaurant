// set up server
//set up add table
//set up reservation
//set up waiting
//api get request
//    -tables - waits
//api post request -
//    - reservation 
var express = require("express");
var path = require("path");
// table reserve
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;





// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
// routest
//routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/table', function (req, res) {
    res.sendFile(path.join(__dirname, 'table.html'))
})

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, 'resrve.html'))
})
//call for json tables----------------------------------------
app.get('/api/tables', function (req, res) {
    return res.json(tables)
})

app.get('/api/reserve', function (req, res) {
    return res.json(waiting)
})

//----------------------------------------------------



//switch to handle the different html pages
function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case ('/'):
            displayIndex(path, request);
            break;

        case ('/table'):
            displayTable(path, request);
            break;

        case ('/reserve'):
            displayReserve(path, request)

        default:
            return fs.readFile(__dirname + "/index.html", function (err, data) {
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(data);
            })
    }
}

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//api tables
var tables = [{
    routeName: 'test',
    name: 'test',
    email: 'test@test.com',
    phone: 'xxx-xxx-xxxx',
    unId: 3333333
}]
var waiting = [{
    routeName: 'tester',
    name: 'tester',
    email: 'tester@test.com',
    phone: 'xxx-xxx-xxxx',
    unId: 666666666
}]

app.post('/api/tables', function(req, res){
    var newTable = req.body
    console.log(newTable);

    if(tables.length <= 5){

    tables.push(newTable)
    console.log(tables)
    res.json(tables)
    }
    else{
        
        waiting.push(newTable)
        res.json(waiting)
    }
})

//functions for the HTML pages
function displayIndex(url, req, res) {
    fs.readFile(__dirname + '/index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(data)
    })

}

function displayTable(url, req, res) {
    fs.readFile(__dirname + '/table.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(data)
    })


}

function displayReserve(url, req, res) {
    fs.readFile(__dirname + '/reserve.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(data)
    })


}

