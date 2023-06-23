// 그래프 관련 스크립트 (C3 library 사용)

// 지역별 피해 봉군 수 현황 그래프
var chart_damage = c3.generate({
    bindto: '#chart_damage',
    data: {
        columns: [ ['지역별_피해_봉군_수', 138780, 28777, 120852, 137700, 33088, 160379, 257339, 254187, 10449, 2595, 7614, 25318, 10136, 9173, 15441, 13000] ],
        types: { 지역별_피해_봉군_수 : 'bar' }, 
        labels: true,
    },
    axis: {
        x: {
            type: 'category',
            categories: ['경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '서울', '부산', '대구', '인천', '광주', '대전', '울산']
        }
    },
    color: { pattern: ['#FC8C79'] }
});

// 농작물 상관관계 그래프
var chart_crop_almond = c3.generate({ // 농작물 - 아몬드
    bindto: '#chart_crop_relation_with_almond',
    data: { columns: [ ['꿀벌', 100],['꿀벌_외_곤충', 0],['기타', 0]], type: 'donut' },
    size: { width: 250, height: 250 },
    legend: { show: false },
    color: { pattern: ['#FFD738', '#CCA290', '#8EB3A2'] },
    donut: { title: '아몬드' }
});
var chart_crop_onion = c3.generate({ // 농작물 - 양파
    bindto: '#chart_crop_relation_with_onion',
    data: { columns: [ ['꿀벌', 90], ['꿀벌_외_곤충', 10], ['기타', 0] ], type: 'donut' },
    size: { width: 250, height: 250 },
    legend: { show: false },
    color: { pattern: ['#FFD738', '#CCA290', '#8EB3A2'] },
    donut: { title: '양파' }
});
var chart_crop_avocado = c3.generate({ // 농작물 - 아보카도
    bindto: '#chart_crop_relation_with_avocado',
    data: { columns: [ ['꿀벌', 90], ['꿀벌_외_곤충', 10], ['기타', 0] ], type: 'donut' },
    size: { width: 250, height: 250 },
    legend: { show: false },
    color: { pattern: ['#FFD738', '#CCA290', '#8EB3A2'] },
    donut: { title: '아보카도' }
});
var chart_crop_kiwi = c3.generate({ // 농작물 - 키위
    bindto: '#chart_crop_relation_with_kiwi',
    data: { columns: [ ['꿀벌', 82], ['꿀벌_외_곤충', 8], ['기타', 10] ], type: 'donut' },
    size: { width: 250, height: 250 },
    legend: { show: false },
    color: { pattern: ['#FFD738', '#CCA290', '#8EB3A2'] },
    donut: { title: '키위' }
});
var chart_crop_watermelon = c3.generate({ // 농작물 - 수박
    bindto: '#chart_crop_relation_with_watermelon',
    data: { columns: [ ['꿀벌', 63], ['꿀벌_외_곤충', 12], ['기타', 25] ], type: 'donut' },
    size: { width: 250, height: 250 },
    legend: { show: false },
    color: { pattern: ['#FFD738', '#CCA290', '#8EB3A2'] },
    donut: { title: '수박' }
});
var chart_crop_orange = c3.generate({ // 농작물 - 오렌지
    bindto: '#chart_crop_relation_with_orange',
    data: { columns: [ ['꿀벌', 26], ['꿀벌_외_곤충', 4], ['기타', 70] ], type: 'donut' },
    size: { width: 250, height: 250 },
    legend: { show: false },
    color: { pattern: ['#FFD738', '#CCA290', '#8EB3A2'] },
    donut: { title: '오렌지' }
});
var chart_crop_pumpkin = c3.generate({ // 농작물 - 호박
    bindto: '#chart_crop_relation_with_pumpkin',
    data: { columns: [ ['꿀벌', 8], ['꿀벌_외_곤충', 82], ['기타', 10] ], type: 'donut' },
    size: { width: 250, height: 250 },
    legend: { show: false },
    color: { pattern: ['#FFD738', '#CCA290', '#8EB3A2'] },
    donut: { title: '호박' }
});
