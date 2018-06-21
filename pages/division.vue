<template>
    <section>
        <div>
            <div class="card">
  <div class="card-image">
    <figure class="image is-2by1">
      <img src="~assets/dvis.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Tom Clancy's The Division</p>
        <p class="subtitle is-6">@nyonyu</p>
      </div>
    </div>

    <div class="content">
      2001년 미국에서는 작전명 '다크 윈터'라는 시뮬레이션 훈련을 실시한다. 생화학무기 테러에 대한 위협의 위험도와 그에 따른 대처능력을 시험하기 위한 시뮬레이션이었는데, 
      시뮬레이션의 결과는 생각보다 훨씬 암울했다. 블랙 프라이데이에 2억명의 시민들이 쇼핑에 900억 달러를 소비하는 와중에 여기 쓰인 지폐를 통해 바이러스가 급속도로 퍼지면서 판데믹이 일어난다는 것이다. 
      그에 따라 불과 5일 만에 세계경제와 공공시설은 붕괴하고, 살아남기 위한 사람들의 준동으로 사회가 혼란에 빠진다는 결과가 나온다. 
      <br>
      <br>
      이에 2007년 미국 대통령은 생화학무기 테러에 국가의 위기 대응을 위한 연방대통령 훈령 51호를 법으로 통과시킨다. 
      그러던 중 정체불명의 세력이 지폐를 천연두 바이러스를 기반으로 거기에 추가로 6종류의 병원체의 유전자를 조합해 치사율도 높으면서, 
      전염성도 엄청난 생물학무기인 통칭 그린 플루로 오염시키고, 이 지폐가 뉴욕으로 유통되어 블랙 프라이데이때에 뉴욕시 전체로 바이러스가 퍼져나가면서 뉴욕은 공공질서가 사실상 박살나 무정부 사태에 빠졌다. 
      정부는 바이러스의 확산을 막기위해 뉴욕시를 봉쇄하는 등 조치를 취했지만 감염은 걷잡을 수 없이 확산되어 미국뿐만 아니라 전세계 대도시에 감염이 확산된 상태이다.
      <br>
      <br>
      이에 사회에 평범히 잠복하고 있던 통칭 '더 디비전'들이 움직이기 시작한다. 이들은 위에 언급된 훈령 51호에 의해 조직된 특수요원으로서,
      지휘체계를 포함한 모든 것이 붕괴될 때, 자율적으로 활동하는 것을 상정한 기밀 전술요원들이다.
      <br>
      플레이어들은 이 디비전 요원들이 되어 아직 세상에 남겨진 것들을 지키기 위해 움직여야 한다.
      <br>
      <br>
      뉴욕은 당신을 기다리고 있습니다!
      
    </div>
  </div>
</div>
        </div>
        <article class="message">
            <div class="message-header">나의 게임 달성도

            </div>
            <div class="message-body">
                <div id="chartArea"></div>
            </div>
        </article>
    </section>
</template>

<script>
    import myBarChart from '~/plugins/mydivchart';
    export default{
        mounted(){
            if(process.client) {myBarChart('chartArea');}
    
        }
    };
</script>
