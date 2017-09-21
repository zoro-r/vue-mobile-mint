<template>
  <div id="mapBox" style="width:100%;height:40%;">
    <iframe src="static/html/baiduMap.html?callback=mapCallback" width="100%" height="100%" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'BaiduMap',
    data () {
      return {
        
      }
    },
    methods: {
      
    },
    computed:{
      
    },
    mounted () {
      window.mapCallback = BMap => {
        const map = new BMap.Map("mapBox")
        

        navigator.geolocation.getCurrentPosition(function(position){
          const currentLat = position.coords.latitude
          const currentLon = position.coords.longitude
          const gpsPoint = new BMap.Point(currentLon, currentLat)

          var convertor = new BMap.Convertor();
          var pointArr = [];
          pointArr.push(gpsPoint);
          convertor.translate(pointArr, 1, 5, function(data){
            console.log(data)
            if(data.status === 0) {
              var marker = new BMap.Marker(data.points[0]);
              map.addOverlay(marker);
              map.centerAndZoom(data.points[0],15)
              map.addControl(new BMap.NavigationControl())
            }
          })
        }, function(err){
          console.log(err)
          alert(err.message)
        })
      }
    }
  }
</script>