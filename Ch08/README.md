## Ch08. CSS 속성 - 01. 개요
### 속성(Propertise)
+ 박스 모델
+ 글꼴, 문자
+ 배경
+ 배치
+ 플렉스(정렬)
+ 전환
+ 변환
+ 띄움
+ 애니메이션
+ 그리드
+ 다단
+ 필터

<br/><hr/><br/>

## Ch08. CSS 속성 - 02. 너비
### 박스 모델
+ width, height
    > auto : 브라우저가 너비를 계산 => 기본값 <br>
      단위 : px,em,vw 등 단위로 지정<br>
      inline 요소 : 포함한 콘텐츠 크기만큼 자동으로 줄어듬(auto)<br>
      block 요소 : 부모 요소의 크기만큼 자동으로 늘어남(너비). 포함한 콘텐츠 크기만큼 자동으로 줄어듬(높이).
+ max-width, max-height : 요소가 커질 수 있는 최대 가로/세로 너비
    > none : 최대 너비 제한 없음 => 기본값<br>
      단위 : px,em,vw 등 단위로 지정
+ min-width, min-height : 요소가 커질 수 있는 최th 가로/세로 너비
    > 0 : 최소 너비 제한 없음 => 기본값<br>
      단위 : px,em,vw 등 단위로 지정

<br/><hr/><br/>

## Ch08. CSS 속성 - 03. CSS 단위
### 단위(비교적 많이 사용되는 단위들)
+ px : 픽셀
+ % : 상대적 백분율
+ em : 요소의 글꼴 크기
+ rem : 루트(최상위) 요소(html)의 글꼴 크기
+ vw : 뷰포트 가로 너비의 백분율(viewport width)
+ vh : 뷰포트 세로 너비의 백분율(viewport height)

<br/><hr/><br/>

## Ch08. CSS 속성 - 04. 외부 여백(margin)
### margin => 음수를 사용할 수 있다.
+ 요소의 외부 여백(공간)을 지정하는 단축 속성
    > 0 : 외부 여백 없음<br>
      auto : 브라우저가 여백을 계산(가로(세로) 너비가 있는 요소의 가운데 정렬에 활용)<br>
      단위 : px, em, vw 등 단위로 지정
      % : 부모 요소의 가로너비에 대한 비율로 지정(드문 경우)
+ margin: 10px; => [top, right, bottom, left];
+ margin: 10px 20px; => [top, bottom], [right, left];
+ margin: 10px 20px 30px; => [top], [right, left], [bottom];
+ margin: 10px 20px 30px 40px; => [top], [right], [bottom], [left];

<br/><hr/><br/>

## Ch08. CSS 속성 - 05. 내부 여백(padding)
### padding => 요소의 크기가 커진다.
+ 요소의 내부 여백(공간)을 지정하는 단축 속성
    > 0 : 내부 여백 없음<br>
      단위 : px, em, vw 등 단위로 지정<br>
      % : 부모 요소의 가로너비에 대한 비율로 지정
+ padding: 10px; => [top, right, bottom, left];
+ padding: 10px 20px; => [top, bottom], [right, left];
+ padding: 10px 20px 30px; => [top], [right, left], [bottom];
+ padding: 10px 20px 30px 40px; => [top], [right], [bottom], [left];

<br/><hr/><br/>

## Ch08. CSS 속성 - 06. 테두리선(border)과 색상 표현
### border : 선-두께 선-종류 선-색상
+ 요소의 크기가 커진다.
+ 요소의 테두리 선을 지정하는 단축 속성
### border-width : 요소 테두리 선의 두께
> medium : 중간 두께<br>
  thin : 얇은 두께<br>
  thick : 두꺼운 두께<br>
  단위 : px, em, vw 등 단위로 지정
+ border-width: 10px; => [top, right, bottom, left];
+ border-width: 10px 20px; => [top, bottom], [right, left];
+ border-width: 10px 20px 30px; => [top], [right, left], [bottom];
+ border-width: 10px 20px 30px 40px; => [top], [right], [bottom], [left];
### border-style : 요소 테두리 선의 종류
> none : 선 없음<br>
  solid : 실선(일반 선)<br>
  dotted : 점선(....)<br>
  dashed : 파선(- - - - -)<br>
  double : 두 줄 선<br>
  groove : 홈이 파여있는 모양<br>
  ridge : 솟은 모양(groove의 반대)<br>
  inset : 요소 전체가 들어간 모양<br>
  outset : 요소 전체가 나온 모양
+ border-style: 10px; => [top, right, bottom, left];
+ border-style: 10px 20px; => [top, bottom], [right, left];
+ border-style: 10px 20px 30px; => [top], [right, left], [bottom];
+ border-style: 10px 20px 30px 40px; => [top], [right], [bottom], [left];
### border-color : 요소 테두리선의 색상을 지정하는 단축 속성
> black : 검정색<br>
  색상 : 선의 색상<br>
  transparent : 투명
+ border-color: 10px; => [top, right, bottom, left];
+ border-color: 10px 20px; => [top, bottom], [right, left];
+ border-color: 10px 20px 30px; => [top], [right, left], [bottom];
+ border-color: 10px 20px 30px 40px; => [top], [right], [bottom], [left];
### 색상 표현 : 색을 사용하는 모든 속성에 적용 가능한 색상 표현
> 색상 이름 : 브라우저에서 제공하는 색상 이름 - red, tomato, royalblue<br/>
  Hex 색상코드 : 16진수 색상(Hexadecimal Colors) - #000, #ffffff<br/>
  RGB : 빛의 삼원색 - rgb(255, 255, 255)<br/>
  RGBA : 빛의 삼원색 + 투명도 - rgba(0, 0, 0, 0.5)<br/>
  HSL : 색상, 채도, 명도 - hsl(120, 100%, 50%)<br/>
  HSLA : 색상, 채도, 명도 + 투명도 - hsla(120, 100%, 50%, 0.3)<br/>
### border-방향, border-방향-속성 : 요소의 테두리 선을 지정하는 기타 속성들

<br/><hr/><br/>

## Ch08. CSS 속성 - 07. 모서리 둥글게(border-radius)
### border-radius : 요소의 모서리를 둥글게 깎음(반지름)
> 0 : 둥글게 없음<br>
  단위 : px, em, vw 등 단위로 지정

<br/><hr/><br/>

## Ch08. CSS 속성 - 08. 크기 계산(box-sizing)
### box-sizing : 요소의 크기 계산 기준을 지정
> content-box : 요소의 내용(content)으로 크기 계산<br>
  border-box : 요소의 내용 + padding + border로 크기 계산

<br/><hr/><br/>

## Ch08. CSS 속성 - 09. 넘침 제어(overflow)
### overflow : 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성
> visible : 넘친 내용을 그대로 보여줌 => 기본값<br>
  hidden : 넘친 내용을 잘라냄 => 잘라낸 내용이 보이지 않음<br>
  scroll : 넘친 내용을 잘라냄, 스크롤바 생성 => 넘치지 않는 부분도 스크롤바가 생김<br>
  auto : 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성 => 넘치는 경우에만 스크롤바가 생김
+ overflow-x : 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 개별 속성
+ overflow-y : 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 개별 속성


<br/><hr/><br/>

## Ch08. CSS 속성 - 10. 출력 특성(display)
### display : 요소의 화면 출력(보여짐) 특성
> block : 상자(레이아웃) 요소 => 각 요소에 이미 지정되어 있는 값<br>
  inline : 글자 요소 => 각 요소에 이미 지정되어 있는 값<br>
  inline-block : 글자 + 상자 요소 => 각 요소에 이미 지정되어 있는 값<br>
  flex : 플렉스 박스(1차원 레이아웃) => 따로 지정해서 사용하는 값<br>
  grid : 그리드(2차원 레이아웃) => 따로 지정해서 사용하는 값<br>
  none : 보여짐 특성 없음, 화면에서 사라짐 => 따로 지정해서 사용하는 값<br>
  기타 : table, table-row, table-cell등

<br/><hr/><br/>

## Ch08. CSS 속성 - 11. 투명도
### opacity : 요소 투명도
> 1 : 불투명 => 기본값<br>
  0 ~ 1 : 0부터 1 사이의 소숫점 숫자

<br/><hr/><br/>

## Ch08. CSS 속성 - 12. 글꼴
### font-style : 글자의 기울기
> normal : 기울기 없음<br>
  italic : 이텔릭체<br>
  oblique : 기울어진 글자
### font-weight : 글자의 두께(가중치)
> normal, 400 : 기본 두께<br>
  blod, 700 : 두껍게<br>
  bolder : 상위(부모) 요소보다 더 두껍게<br>
  lighter : 상위(부모) 요소보다 더 얇게<br>
  100 ~ 900 : 100단위의 숫자 9개, normal과 bold 이외 두께
### font-size : 글자의 크기
> 16px : 기본 크기<br>
  단위 : px, em, rem 등 단위로 지정<br>
  % : 부모 요소의 폰트 크기에 대한 비율<br>
  smaller : 상위(부모) 요소보다 작은 크기<br>
  larger : 상위(부모) 요소보다 큰 크기<br>
  xx-small ~ xx-large : 가장 작은 크기 ~ 가장 큰 크기까지 7단계의 크기를 지정
### line-height : 한 줄의 높이, 행간과 유사
> normal : 브라우저의 기본 정의를 사용<br>
  숫자 : 요소의 글꼴 크기의 배수로 지정<br>
  단위 : px, em, rem 등의 단위로 지정<br>
  % : 요소의 글꼴 크기의 비율로 지정
### font-family : 글꼴(서체) 지정 
+ 글꼴1, "글꼴2", ... 글꼴계열(필수 작성);
+ 띄어쓰기 등 특수문자가 포함된 글꼴 이름은 ""로 묶어야 한다.

<br/><hr/><br/>

## Ch08. CSS 속성 - 13. 문자
### color : 글자의 색상
> rgb(0, 0, 0) : 검정색<br>
  색상 : 기타 지정 가능한 색상
### text-align : 문자의 정렬 방식
> left : 왼쪽 정렬<br>
  right : 오른쪽 정렬<br>
  center : 가운데 정렬<br>
  justify : 양쪽 정렬
### text-decoration : 문자의 장식(선)
> none : 장식 없음<br>
  underline : 밑줄<br>
  overline : 윗줄<br>
  line-thriugh : 중앙성
### text-indent : 문자 첫 줄의 들여쓰기
+ 음수를 사용할 수 있다.
+ 반대는 내어쓰기(outdent)
> 0 : 들여쓰기 없음<br>
  단위 : px, em, vw 등 단위로 지정<br>
  % : 요소의 가로 너비에 대한 비율

<br/><hr/><br/>

## Ch08. CSS 속성 - 14. 배경
### background-color : 요소의 배경 색상
> transparent : 투명함<br>
  색상 : 지정 가능한 색상
### background-image : 요소의 배경 이미지 삽입
> none : 이미지 없음<br>
  url("경로") : 이미지 경로<br>
+ 배경 색상은 이미지 뒤에 나온다.
### background-repeat : 요소의 배경 이미지 반복
> repeat : 이미지를 수직, 수평 반복<br>
  repeat-x : 이미지를 수평 반복<br>
  repeat-y : 이미지를 수직 반복<br>
  no-repeat : 반복 없음
### background-position : 요소의 배경 이미지 위치
> 0% 0% : 0% ~ 100~ 사이의 값<br>
  방향 : top, bottom, left, right, center 방향<br>
  단위 : px, em, rem 등 단위로 지정 => X, y축의 값
### background-size : 요소의 배경 이미지 크기
> auto : 이미지의 실제 크기<br>
  단위 : px, em, rem 등 단위로 지정<br>
  cover : 비율을 유지, 요소의 더 넓은 너비에 맞춤<br>
  contain : 비율을 유지, 요소의 더 짧은 너비에 맞춤
### background-attachment : 요소의 배경 이미지 스크롤 특성
> scroll : 이미지가 요소를 따라서 같이 스크롤<br>
  fixed : 이미지가 뷰포트에 고정, 스크롤X<br>
  local : 요소 내 스크롤 시 이미지가 같이 스크롤

<br/><hr/><br/>

## Ch08. CSS 속성 - 15. 배치(1)
### position : 요소의 위치 지정 기준
+ position과 같이 사용하는 CSS 속성들
+ 모두 음수를 사용할 수 있다.
> static : 기준 없음<br>
  relative : 요소 자신을 기준<br>
  absolute : 위치 상 부모 요소를 기준 => 위치 상 부모 요소를 확인해야 한다.<br>
  fixed : 뷰포트(브라우저)를 기준<br>
  sticky : 스크롤 영역 기준
### top, bottom, left, right : 요소의 각 방향별 거리 지정
> auto : 브라우저가 계산<br>
  단위 : px, em, rem 등 단위로 지정

<br/><hr/><br/>

## Ch08. CSS 속성 - 16. 배치(2)
### 요소 쌓임 순서(Stack order) : 어떤 요소가 사용자와 더 가깝게 있는지(위에 쌓이는지) 결정
1. 요소에 position 속성 값이 있는 경우 위에 쌓임.(기본값 static 제외)
2. 1번 조건이 같은 경우, z-index 속성의 숫자 값이 높을 수록 위에 쌓임.
3. 1번과 2번 조건까지 같은 경우, HTML의 다음 구조일수록 위에 쌓임.

<br/><hr/><br/>

## Ch08. CSS 속성 - 17. 배치(3)
### z-index : 요소의 쌓임 정도를 지정
> auto : 부모 요소와 동일한 쌓임 정도<br>
  숫자 : 숫자가 높을수록 위에 쌓임
### 요소의 display가 변경됨 : position 속성의 값으로는 absolute, fixed가 지정된 요소는, display 속성이 block으로 변경됨.

<br/><hr/><br/>

## Ch08. CSS 속성 - 18. 플랙스(정렬) Container(1)
### 플랙스(정렬) : 1차원 레이아웃
+ flex container => display: flex를 설정한 요소
+ flex items => display: flex를 설정한 요소의 자식 요소
### display : Flex Container의 화면 출력(보여짐) 특성
> flex : 블록 요소와 같이 Flex Container 정의<br>
  inline-flex : 인라인 요소와 같이 Flex Container 정의
### flex-direction : 주 축을 설정
> row : 행 축(좌 => 우)<br>
  row-reverse : 행 축(우 => 좌)<br>
  column : 열 축(위 => 아래)<br>
  colum-reverse : 열 축(아래 => 위)

<br/><hr/><br/>

## Ch08. CSS 속성 - 19. 플랙스(정렬) Container(2)
### flex-wrap : Flex Items 묶음(줄 바꿈) 여부
> no wrap : 묶음(줄 바꿈) 없음<br>
  wrap : 여러 줄로 묶음<br>
  wrap-reverse : wrap의 반대 방향으로 묶음
### justify-content : 주 축의 정렬 방법
> flex-start : Flex Items를 시작점으로 정렬<br>
  flex-end : Flex Items를 끝점으로 정렬<br>
  center : Flex Item를 가운데 정렬<br>
  space-between : 각 Flex Item 사이를 균등하게 정렬<br>
  space-around : 각 Flex Ite의 외부 여백을 균등하게 정렬
### align-content : 교차 축의 여러 줄 정렬 방법
> stretch : Flex Items를 시작점으로 정렬<br>
  flex-start : Flex Items를 시작점으로 정렬<br>
  flex-end : Flex Items를 끝점으로 정렬<br>
  center : Flex Items를 가운데 정렬<br>
  space-between : 각 Flex Item 사이를 균등하게 정렬<br>
  space-around : 각 Flex Item의 외부 여백을 균등하게 정렬
### align-items : 교차 축의 한 줄 정렬 방법
> stretch : Flex Items를 시작점으로 정렬<br>
  flex-start : Flex Items를 시작점으로 정렬<br>
  flex-end : Flex Items를 끝점으로 정렬<br>
  center : Flex Items를 가운데 정렬<br>
  baseline : Flex Items를 각 줄의 문자 기준선에 정렬

<br/><hr/><br/>

## Ch08. CSS 속성 - 20. 플랙스(정렬) Items
### order : Flex Item의 순서
> 0 : 순서 없음<br>
  숫자 : 숫자가 작을수록 먼저
### flex-grow : Flex Item의 증가 너비 비율
> 0 : 증가 비율 없음<br>
  숫자 : 증가 비율
### flex-shrink : Flex Item의 감소 너비 비율
> 1 : Flex Container 너비에 따라 감소 비율 적용<br>
  숫자 : 감소 비율
### flex-basis : Flex Item의 공간 배분 전 기본 너비
> auto : 요소의 Content 너비<br>
  단위 : px, em, vw 등 단위로 지정

<br/><hr/><br/>

## Ch08. CSS 속성 - 21. 전환
### transition : 요소의 전환(시작과 끝) 효과를 지정하는 단축 속성
+ 속성명 지속시간 타이밍함수 대기시간 - [transition-property], [transition-duration], [transition-timing-function], [transition-delay]
+ 지속시간 => 단축형으로 작성할 때 필수 포함 속성
### transition-property : 전환 효과를 사용할 속성 이름을 지정
> all : 모든 속성에 적용<br>
  속성이름 : 전환 효과를 사용할 속성 이름 명시
### transition-duration : 전환 효과의 지속시간을 지정
> 0s : 전환 효과 없음<br>
  시간 : 지속시간(s)을 지정
### transition-timing-funcrion : 전환 효과의 타이민(Easing) 함수를 지정
> ease : 느리게 - 빠르게 - 느리게 = cubic-bezier(0.25, 0.1, 0.25, 1)<br>
  liner : 일정하게 = cubic-bezier(0, 0, 1, 1)<br>
  ease-in : 느리게 - 빠르게 = cubic-bezier(0.42, 0, 1, 1)<br>
  ease-out : 빠르게 - 느리게 = cubic-bezier(0, 0, 0.58, 1)<br>
  ease-in-out : 느리게 - 빠르게 - 느리게 = cubic-bezier(0.42, 0, 0.58, 1)<br>
  cubic-bezier(n, n, n, n) : 자신만의 값을 정의(0 ~ 1)<br>
  steps(n) : n번 분할된 애니메이션<br>
+ 참고 사이트(google 검색)
    + easing functions => Easeing 함수 치트 시트
    + easing functions mdn => < easing-function > - CSS:Cascading Style Sheets | MDN
    + tweenmax easing => Docs | Easing - GreenSock
### transition-delay : 전환 효과가 몇 초 뒤에 시작할지 대기시간을 지정
> 0s : 대기시간 없음<br>
  시간 : 대기시간(s)을 지정

<br/><hr/><br/>

## Ch08. CSS 속성 - 22. 변환(1)
### transform : 요소의 변환 효과
+ transform: 변환함수1 변환함수2 변환함수3 ...;
+ trnasform: 원근법 이동 크기 회전 기울임;
### 2D 변환 함수
> translate(x, y) : 이동(x축, y축)<br>
  translateX(x) : 이동(x축)<br>
  translateY(y) : 이동(y축)<br>
  => 단위 : px

> scale(x, y) : 크기(x축, y축)<br>
  scaleX(x) : 크기(x축)<br>
  scaleY(y) : 크기(y축)<br>
  => 단위 없음(배수)

> rotate(degree) : 회전(각도)
  skew(x,y) : 기울임(x축, y축)
  skewX(x) : 기울임(x축)
  skewY(y) : 기울임(y축)
  => 담위 : deg

  > matrix(n, n, n, n, n, n) : 2차원 변환 효과
### 3D 변환 함수
> translateZ(z) : 이동(z축)<br>
  trnaslate3d(x, y, z) : 이동(x축, y축, z축)<br>
  prespectice(n) : 원근법(거리)<br>
  => 단위 : px

> scaleZ(z) : 크기(z축)
  scale3D(x, y, z) : 크기(x축, y축, z축)
  => 단위 없음(배수)

> rotateX(x) : 회전(x축)<br>
  rotateY(y) : 회전(y축)<br>
  rotateZ(z) : 회전(z축)<br>
  rotate3D(x, y, z, a) : 회전(x축, y축, z축, 각도)<br>
  => 단위 : deg

> matrix3d(n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n) : 3차원 변환 효과

<br/><hr/><br/>

## Ch08. CSS 속성 - 23. 변환(2)
### perspective : 하위 요소를 관찰하는 원근 거리를 지정
> 단위 : px 등 단위로 지정

### perspective 속성과 함수 차이점
> 속성/함수 | 적용대상 | 기준점 설명<br>
  perspective: 600px; | 관찰 대상의 부모 | perspective-origin<br>
  transform: perspective(600px) | 관찰 대상 | transform-origin<br>
### backface-visibilty : 3D 변환으로 회전된 요소의 뒷면 숨김 여부
> visible : 뒷면 보임<br>
  hidden : 뒷면 숨김

<br/><hr/><br/>

## Ch08. CSS 속성 - 24. Overwatch 캐릭터 선택 예제(1)


<br/><hr/><br/>

## Ch08. CSS 속성 - 24. Overwatch 캐릭터 선택 예제(2)


<br/><hr/><br/>