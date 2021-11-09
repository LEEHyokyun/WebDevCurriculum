// base url 부분에 대한 문자열 확보
function path(url){    
    
    let path = url.split('/');
    path.shift(); //localhost: 부분은 제거
    
    // query string 부분(?~)이 있을 경우 문자열 분할
    if(path[path.length - 1].indexOf('?') !== -1){
        //query string 부분이 존재할 경우엔 query string 부분을 제외한 부분만 path에 생성.
        path[path.length - 1] = path[path.length - 1].split('?')[0];
        console.log(path);
    }

    return path;
}

// query string 부분에 대한 url 확보
function query(url){
    // ?부분을 분할한 후, 최초 url에서 마지막 부분(pop)이 string 부분
    // key와 value를 구분하기 위해 =를 기준으로 split.
    let queryStr = url.split('?').pop().split('=');
    let queryObj = {}; 

    queryStr.forEach((key, index) => {
        console.log(queryStr);
        console.log(index);
        if (index % 2 == 0 && queryStr.length > index + 1){
            const value = queryStr[index + 1];
            queryObj[key] = value;
        }
    });

    return queryObj;
}

export default { path, query };