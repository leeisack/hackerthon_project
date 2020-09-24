var mapContainer1 = document.getElementById('map1'), // 지도를 표시할 div 
    mapOption1 = {
        center: new kakao.maps.LatLng(35.279824,126.720195), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map1 = new kakao.maps.Map(mapContainer1, mapOption1); 

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

var position_title1 = new Array();
var position_address1 = new Array();
var x1 = new Array();
var y1 = new Array();
d3.csv("data/park.csv", function(error, data){
    for(var i = 0; i < data.length; i++){
        position_title1.push(data[i].name)
        position_address1.push(data[i].address)
        x1.push(data[i].y)
        y1.push(data[i].x)
        
    }
    for (var i = 0; i < x1.length; i ++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize1 = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage1 = new kakao.maps.MarkerImage(imageSrc, imageSize1); 
        
        // 마커를 생성합니다
        var marker1 = new kakao.maps.Marker({
            
            map: map1, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(x1[i], y1[i]), // 마커를 표시할 위치
            title : position_title1[i] + '\n' + position_address1[i], // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage1 // 마커 이미지 
        });
    }
})

var mapContainer2 = document.getElementById('map2'), // 지도를 표시할 div 
    mapOption2 = {
        center: new kakao.maps.LatLng(35.279824,126.720195), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map2 = new kakao.maps.Map(mapContainer2, mapOption2); 

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

var position_title2 = new Array();
var position_address2 = new Array();
var x2 = new Array();
var y2 = new Array();
d3.csv("data/hotel.csv", function(error, data){
    for(var i = 0; i < data.length; i++){
        position_title2.push(data[i].name)
        position_address2.push(data[i].address)
        x2.push(data[i].y)
        y2.push(data[i].x)
        
    }
    for (var i = 0; i < x2.length; i ++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize2 = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage2 = new kakao.maps.MarkerImage(imageSrc, imageSize2); 
        
        // 마커를 생성합니다
        var marker2 = new kakao.maps.Marker({
            
            map: map2, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(x2[i], y2[i]), // 마커를 표시할 위치
            title : position_title2[i] + '\n' + position_address2[i], // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage2 // 마커 이미지 
        });
    }
})

var mapContainer3 = document.getElementById('map3'), // 지도를 표시할 div 
    mapOption3 = {
        center: new kakao.maps.LatLng(35.279824,126.720195), // 지도의 중심좌표
        level: 8 // 지도의 확대 레벨
    };  

// 지도를 생성합니다    
var map3 = new kakao.maps.Map(mapContainer3, mapOption3); 

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

var position_title3 = new Array();
var position_address3 = new Array();
var x3 = new Array();
var y3 = new Array();
d3.csv("data/car.csv", function(error, data){
    for(var i = 0; i < data.length; i++){
        position_title3.push(data[i].name)
        position_address3.push(data[i].address)
        x3.push(data[i].y)
        y3.push(data[i].x)
        
    }
    for (var i = 0; i < x3.length; i ++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize3 = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage3 = new kakao.maps.MarkerImage(imageSrc, imageSize3); 
        
        // 마커를 생성합니다
        var marker3 = new kakao.maps.Marker({
            
            map: map3, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(x3[i], y3[i]), // 마커를 표시할 위치
            title : position_title3[i] + '\n' + position_address3[i], // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage3 // 마커 이미지 
        });
    }
})

var mapContainer = document.getElementById('map4'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(35.279824,126.720195), // 지도의 중심좌표
            level: 8 // 지도의 확대 레벨
        };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 

// 마커 이미지의 이미지 주소입니다
var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

var position_title = new Array();
var position_address = new Array();
var x = new Array();
var y = new Array();
d3.csv("data/drivethru.csv", function(error, data){
    for(var i = 0; i < data.length; i++){
        position_title.push(data[i].name)
        position_address.push(data[i].address)
        x.push(data[i].y)
        y.push(data[i].x)
        
    }
    for (var i = 0; i < x.length; i ++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(x[i], y[i]), // 마커를 표시할 위치
            title : position_title[i] + '\n' + position_address[i], // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });
    }
})

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}