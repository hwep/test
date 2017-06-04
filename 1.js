


var axios = require('axios');

axios.get('http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=1f4e0115e2b9f508ffee9546ce63b76d')
  .then(function(response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });


//==============================
/*weather data*/
//===================================
/*  <body>
      <div id="7d" class="c7d">
      	 <ul class="t clearfix">
  	        <li class="sky skyid lv3 on">
  	            <h1>3日（今天）</h1>
  	            <p class="wea" title="阴，有分散性阵雨转阴有分散性阵雨转多云">阴，有分散性阵雨转阴有分散性阵雨转多云</p>
  	            <p class="tem">
  	               28℃~36℃
  	            </p>
  	            <p class="win">
  	                3-4级转微风
  	            </p>
  	        </li>
  	    </ul>				
      </div>
  </body>

  </html>*/

