
function plotonMap(){
    console.log("hello")
    fetch("/data.json")
    .then(response => response.json())
    .then(res =>
        res.data.forEach(element =>{
            lat = element.latitude
            lon = element.longitude
            
            cases = element.infected

            if(cases>255){
                color = 'red'
            }else{
                color = `rgb(${cases}, 100, 0)`
            }


            new mapboxgl.Marker({
                color: color,
                draggable: false
                }).setLngLat([lon, lat])
                .addTo(map);
            })
    )
}

plotonMap()