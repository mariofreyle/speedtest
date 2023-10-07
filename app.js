import http from 'http';
import url from 'url';
import pathmodule from 'path';
import fetch from 'node-fetch';

const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const r = 'server-13-227-5-31.bog50.r.cloudfront.net';
const edges = {
    "BOG": {
        "ip": "13.227.5.31",
        "node": "BOG50-C1",
        "age": "2969971"
    },
    "LIM": {
        "ip": "108.158.102.75",
        "node": "LIM50-P1",
        "age": "2969971"
    },
    "QRO": {
        "ip": "3.161.41.7",
        "node": "QRO50-P1",
        "age": "2969967"
    },
    "SCL": {
        "ip": "3.162.198.9",
        "node": "SCL51-P3",
        "age": "2969965"
    },
    "EZE": {
        "ip": "18.65.46.55",
        "node": "EZE50-P1",
        "age": "2969965"
    },
    "GRU": {
        "ip": "3.163.9.26",
        "node": "GRU3-P5",
        "age": "638630"
    },
    "GIG": {
        "ip": "108.158.134.162",
        "node": "GIG51-P2",
        "age": "638630"
    },
    "FOR": {
        "ip": "108.139.114.35",
        "node": "FOR50-P2",
        "age": "638630"
    },
    "LOS": {
        "ip": "108.157.79.17",
        "node": "LOS50-P1",
        "age": "638630"
    },
    "NBO": {
        "ip": "52.84.97.16",
        "node": "NBO50-C1",
        "age": "524557"
    },
    "JNB": {
        "ip": "52.85.183.8",
        "node": "JNB50-C1",
        "age": "638631"
    },
    "CPT": {
        "ip": "52.85.42.6",
        "node": "CPT52-C1",
        "age": "638631"
    },
    "TLV": {
        "ip": "13.226.4.44",
        "node": "TLV50-C1",
        "age": "639019"
    },
    "BAH": {
        "ip": "18.66.153.31",
        "node": "BAH52-C1",
        "age": "265312"
    },
    "DXB": {
        "ip": "18.161.66.30",
        "node": "DXB52-P1",
        "age": "2969959"
    },
    "FJR": {
        "ip": "13.35.169.84",
        "node": "FJR50-C1",
        "age": "523574"
    },
    "MCT": {
        "ip": "18.64.142.57",
        "node": "MCT50-P1",
        "age": "2969955"
    }
}
let edgesArr = Object.keys(edges);
let app = {
    done: 0,
    sent: 0
};
let colos = [];
const startTime = Date.now();

function random(){
    return ("000000000000000000" + Math.random().toString().slice(2)).slice(-12);
}
function getIp(edge){
    if(edge.$node && edge.node.slice(0, 3) == edge.$node.slice(0, 3)){
        return edge.$ip;
    }
    return edge.ip;
}
function fetchCache(){
    var status = null,
        cache = null,
        length = 0;
    
    if(app.sent == edgesArr.length){
        return;
    }
    app.sent++;
    function done(){
        app.done++;
        console.log(edge.node.slice(0, 3), status, cache, length);
        if(app.done == edgesArr.length){
            console.log("All Cache Fetched.");
            return;
        }
        fetchCache();
    }
    
    var edge = edges[edgesArr[app.sent - 1]],
        controller = new AbortController();
    
    fetch('http://' + getIp(edge) + '/download?v=' + random(), {
        method: 'GET',
        headers: {
          'Host': 'd375c8n0f70a17.cloudfront.net'
        },
        signal: controller.signal
    }).then(function(response){
        status = response.status;
        cache = (response.headers.get('X-Cache') || '').split(' ')[0];
        if(cache == 'Hit' && (new Date()).getDate() % 2 == 0){
            controller.abort();
            done();
            return;
        }
        response.text().then(function(text){
            length = text.length;
            done();
        });
    }).catch(function(error){
        done();
    });
}
function fetchDns(edge, callback){
    function done(){
        app.done++;
        console.log(edge.node.slice(0, 3), edge.$ip || null);
        if(app.done == edgesArr.length){
            console.log("All DNS Fetched.");
            app.done = 0;
            app.sent = 0;
            callback();
        }
    }
    fetch('http://' + edge.ip + '/resolve?name=d375c8n0f70a17.cloudfront.net&type=A&v=' + random(), {
        method: 'GET',
        headers: {
          'Host': 'd375c8n0f70a17.cloudfront.net'
        }
    }).then(function(response){
        response.json().then(function(data){
            if(data.Answer){
                data.Answer.sort(function(a, b){
                    return parseInt(a.data.slice(a.data.lastIndexOf(".") + 1, a.data.length)) - parseInt(b.data.slice(b.data.lastIndexOf(".") + 1, b.data.length));
                });
                edge.$ip = (data.Answer[0] || {}).data;
            }
            done();
        }).catch(function(error){
            done();
        });
    }).catch(function(error){
        done();
    });
}
function fetchNode(edge, callback){
    var controller = new AbortController(),
        status = null;
    function done(){
        app.done++;
        console.log(edge.node.slice(0, 3), status);
        if(app.done == edgesArr.length){
            console.log("All Nodes Fetched.");
            app.done = 0;
            app.sent = 0;
            callback();
        }
    }
    if(!edge.$ip){
        edge.$ip = '';
        edge.$node = '';
        done();
        return;
    }
    fetch('http://' + edge.$ip + '/download?v=' + random(), {
        method: 'GET',
        headers: {
          'Host': 'd375c8n0f70a17.cloudfront.net'
        },
        signal: controller.signal
    }).then(function(response){
        status = response.status;
        edge.$node = response.headers.get('X-Amz-Cf-Pop');
        edge.$age = response.headers.get('Age') || 'miss';
        edge.$timing = ((response.headers.get('Server-Timing') || '').match(/cdn-downstream-fbl;dur=[0-9]+/) || {})[0] || null;
        controller.abort();
        done();
    }).catch(function(error){
        done();
    });
}

const server = http.createServer(async (req, res) => {
    
    const url = new URL('http://localhost' + req.url),
          params = url.searchParams,
          path = url.pathname.replace(/^\/+|\/+$/g, '');
    
    let content = '',
        status = 200;

    if(path == 'cdn'){
        app.done = 0;
        for(let prop in edges){
            fetchDns(edges[prop], function(){
                fetchCache();
                fetchCache();
            });
        }
        
        content += edgesArr.length + ' edges refreshed ✓';
    }else if(path == 'pops'){
        
        if(params.get('colo')){
            colos.push(params.get('colo'));
        }
        
        await new Promise(function(resolve){
            for(let prop in edges){
                fetchDns(edges[prop], function(){
                    for(let _prop in edges){
                        fetchNode(edges[_prop], function(){
                            resolve();
                        });
                    }
                });
            }
        });
        
        
        if(params.get('fresh') != null){
            let prop, edge;
            for(prop in edges){
                edge = edges[prop];
                if(edge.$ip && edge.ip.slice(0, edge.ip.lastIndexOf('.')) == edge.$ip.slice(0, edge.$ip.lastIndexOf('.'))){
                    edge.ip = edge.$ip;
                    edge.node = edge.$node;
                    edge.age = edge.$age;
                }
                delete edge.$ip;
                delete edge.$node;
                delete edge.$age;
                delete edge.$timing;
            }
        }
        
        content += "Count: " + edgesArr.length + "\n\n";
        content += JSON.stringify(edges, null, 4);
        
    }else if(path == 'age'){
        content += 'Age: ' + Math.round((Date.now() - startTime) / 1000);
    }else if(path == 'age'){
        content += 'Age: ' + Math.round((Date.now() - startTime) / 1000);
    }else if(path == 'colos'){
        content += "Count: " + colos.length + "\n\n";
        content += JSON.stringify(colos, null, 4);
    }

    res.statusCode = status;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(content);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});