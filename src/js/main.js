// 본문(content) 이미지 이벤트 관련 스크립트

// 변수
const message = "<br><br><p>(자세한 설명은 클릭!)</p>"
const title0 = "기존 (진드기) 약제가 잘 듣지 않아 방제에 실패";
const title1 = "기후변화로 인한 꿀벌 영양 부족, 면역력 약화";
const title2 = "밀원수 심기";
const title3 = "농약 사용 자제하기";
const img0 = "<img src='img/img_reason_1.png'>";
const img1 = "<img src='img/img_reason_2.png'>";
const img2 = "<img src='img/img_participate_1.png'>";
const img3 = "<img src='img/img_participate_2.png'>";
const content0 = "농촌진흥청에서 지난해 현장 모니터링을 두달 간격으로 한 결과 기후 변화와 병해충이 발생했다는 점을 확인하였는데요. 과학적으로 정확하게 규명할 수 있는 원인이 바로 '꿀벌응애'입니다. 꿀벌응애란 꿀벌에 기생하는 해충입니다. 그런데 방제제에 내성이 생겨 기존 농가에서 사용하고 있는 약제에 100% 저항성이 생긴 응애가 발생한 것으로 확인되었습니다. 저항성이 생긴 응애, 과연 무엇이 문제일까요? 꿀벌 응애가 기생한 후 성충 일벌이 되면 면역력이 낮아져서 잦은 질병에 걸리기도 쉽고 일벌까지 성장하지 못하게 됩니다. 이는 결과적으로 봉군의 면역력을 약화시키게 되는 것입니다.";
const content1 = "벌은 외부의 기온에 맞춰 체온 조절을 하는 변온동물입니다. 그렇기 때문에 기온가 높아지면 벌들이 적응하기 힘든 환경이 되죠. 개화시기가 빨라지면서 벌들이 환경에 미처 따라가지 못해 충분한 영양 공급이 되지 않습니다. 그리고 기후변화로 인해 진드기가 더 많이 기생함으로써 꿀벌들의 영양이 부족해지고 면역력이 약해집니다. 기후변화와 더불어 황사, 미세먼지 등의 대기오염도 살펴봐야 합니다. 대기오염은 꿀벌의 '길 찾기' 능력 교란의 주범이기 때문입니다. 태양의 빛이 얼마나 산란되는지를 편광이라 하는데, 꿀벌은 편광을 보고 길을 찾아갑니다. 벌의 비행시간이 평상시에는 45분이었으나 공기 질이 안 좋을 때는 77분이 되는데요. 미세먼지는 입자성 물질이고 공기가 혼탁해지면서 빛이 산란되기 때문에 곤충이 이에 영향을 받기 때문입니다.";
const content2 = "밀원수와 꿀벌은 어떤 관계일까요? 밀원수(蜜源樹)는 진한 향기가 나는 꽃을 피우며 벌이 꿀을 빨아 오는 원천입니다. 대표적으로는 아까시나무, 헛개나무, 마가목, 옻나무 등이 있죠. 밀원수 조성은 벌집군집 붕괴 현상을 막는 대책 중 하나입니다. 여기서 벌집군집 붕괴 현상이란 무엇일까요? 벌집군집 붕괴는 꿀과 꽃가루를 구하러 간 일벌들이 돌아오지 않아 집에 남은 여왕벌과 애벌레가 죽게 돼 벌집이 비는 것을 말합니다. 벌집군집 붕괴를 막기 위하여 밀원수를 심어 꿀벌들이 활발하게 활동할 수 있도록 환경을 조성해야 합니다.";
const content3 = "농가에서 사용하는 농약은 꿀벌을 위험에 빠뜨리는 요인입니다. 꿀벌은 반경 2km를 이동하는데요. 농가가 항공방제를 하는 과정에서 꿀벌이 농약에 직접 노출됩니다. 또한 물, 과수, 벼 등에 녹아 았는 농약에 간접적으로 노출돼 피해를 입게 되죠. 친환경 농사 기조 확산으로 과거와 다른 농약이 사용되지만 꿀벌에게 악영향을 주는 것은 마찬가지입니다. 친환경 농약은 작물에는 친환경이지만 꿀벌에게도 과연 친환경일까요? 꿀벌의 방향감각, 귀소본능을 상실하게 하기에 꿀벌에게는 절대 친환경이 될 수 없죠. 농약 사용 자제와 더불어 농약 식품 소비 자제도 꿀벌을 위한 하나의 방법입니다.";

// 배열에 원소 모으기
const arr_title = [title0, title1, title2, title3];
const arr_img = [img0, img1, img2, img3];
const arr_content = [content0, content1, content2, content3,];

// 함수
function showTitle(obj, idx){
    obj.innerHTML = arr_title[idx] + message;
    obj.style.textAlign = "center";
    obj.style.fontSize = "24px";
    obj.style.color = "#1A8F86";
};
function showImage(obj, idx){
    obj.innerHTML = arr_img[idx];
}
function showContent(obj, idx){
    obj.innerHTML = arr_content[idx];
    obj.style.textAlign = "justify";
    obj.style.fontSize = "20px";
    obj.style.color = "#000000";
};
