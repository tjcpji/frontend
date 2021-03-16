# Frontend study
## Ch01. 개요 - 01. 프론트 엔드 개발이란?
<br/>

### HTML, CSS, JS를 사용해 데이터를 그래픽 사용자 인터페이스(GUI)로 변환하고, 그것으로 사용자와 상호작용 할 수 있도록 하는 것.

<br/><hr/><br/>

## Ch01. 개요 - 02. HTML,CSS 그리고 JS
<br/>

### HTML (Hyper Text Markup Language) 기획자, 구조
> 페이지의 제목, 문단, 표, 이미지, 동영상 등 웹의 구조를 담당

### CSS (Cascading Style Sheets) 디자이너, 스타일
> 실제 화면에 표시되는 방법(색상, 크기, 폰트, 레이아웃 등)을 지정해 콘텐츠를 꾸며주는 시각적인 표현(정적)을 담당

### JS (Java Script) 개발자, 동적
> 콘텐츠를 바꾸고 움직이는 등 페이지를 동작시키는 동적처리를 담당

<br/><hr/><br/>

## Ch01. 개요 - 03. 웹앱의 동작원리
<br/>

주소창에 페이지 주소 입력 => 최초요청 (Request) => 서버에서 최초응답 (Response) <br/>
브라우저(사용자 컴퓨터)에서 개발하여 사용자가 사용할 수 있는 서버에 업로드하고 접속할 수 있도록 한다.

<br/><hr/><br/>

## Ch01. 개요 - 04. 웹에서 사용하는 이미지
<br/>

### 비트맵
> 픽셀이 모여 만들어진 정보의 집합, 레스터(Raster) 이미지라고도 부름.
>> 정교하고 다양한 색상을 자연스럽게 표현.
>> 확대 / 축소 시 계단 현상, 품질 저하.

 1. JPG(Joint Photographic coding Experts Group)는 Full-color와 Gray-scale의 압축을 위해 만들어졌으며, 압출률이 울륭해 사진이나 예술 분야에서 많이 사용.
+ 손실압축 표현 색상도(24비트, 약 1600만 색상)가 띄어남
+ 이미지의 품질과 용량을 쉽게 조절 가능
+ 가장 널리 쓰이는 이미지 포맷
<br/>

2. PNG(Portable Newwork Graphics)는 Gif의 대체 포맷으로 개발됨.
+ 비손실 압축
+ 8비트(256 색상) / 24비트(약 1600만 색상) 컬러 이미지 처리
+ Alpha Channel 지원 (투명도)
+ W3C rnjswkd vhaot

3. GIF(Graphics Interchange Format)는 이미지 파일 내에 이미지 및 문자열 긑은 정보들을 저장.
+ 비손실 압축
+ 여러 장의 이미지를 한 개의 파일에 담을 수 있음(움짤, 애니메이션)
+ 8비트 색상(256 색상)만 지원(다양한 색상 표현에는 적합하지 않음)

4. WEBP는 JPG, PNG, GIF를 모두 대체할 수 있는 구글이 개발한 이미지 포맷.
+ 완벽한 손실/비손실 압축 지원
+ GIF 같은 애니메이션 지원
+ Alpaha ChanneL 지원(손실, 비손신 모두)

### 벡터
> 점, 선, 면의 위치(좌표), 색상 등 수학적 정보의 형태(Shape)로 이루어진 이미지.
>> 확대/축소에서 자유로움, 용량 변화가 없음.
>> 정교한 이미지(인물, 풍경사진 같은)를 표현하기 어려움. 

1. SVG(Scalable Vector Graphics)는 마크업 언어(HTML/XML) 기반의 벡터 그래픽을 표현하는 포맷.
+ 해상도의 영향에서 자유로움
+ CSS와 JS로 제어 가능
+ 파일 및 코드 삽입 가능

<br/><hr/><br/>

## Ch01. 개요 - 06. 특수 기호
<br/>

+ Backtick, Grave : `
+ Tilde : ~
+ Exclamation mark : !
+ At sign : @
+ Sharp, Number sign : #
+ Dollar sign : $
+ Percent sign : %
+ Caret : ^ => ~ 이상
+ Ampersand : &
+ Asterisk : *
+ Hyphen, Dash : -
+ Underscore, Low dash : _
+ Equals sign : =
+ Quotation mark : "
+ Apostrophe : '
+ Colon : :
+ Semicolon : ;
+ Comma : ,
+ Period, Dot : .
+ Question mark : ?
+ Slash : /
+ Vertical bar : |
+ Backslash : \
+ Parenthesis : ()
+ Brace : {}
+ Bracket : []
+ Angle Bracket : <>

<br/><hr/><br/>

## Ch01. 개요 - 07. 오픈소스
<br/>

### 오픈소스란?
> 어떤 제품을 개발하는 과정에 필요한 소스코드나 설계도를 누구나 접근해서 열람할 수 있돌록 공개하는 것
1. Apache License
    + 아파치 소프트웨어 재단에서 자체 소프트웨어에 적용하기 위해 만든 라이선스, 개인적/상업적 이용, 배포, 수정, 특허 신청이 가능
2. MIT License
    + 매사추세츠공과대학(MIT)에서 소프트웨어 학생들을 위해 개발한 라이선스
    + 개인 소스에 이 라이선스를 사용하고 있다는 표시만 지켜주면 되며 나머지 사용에 대한 제약은 없음.
3. BSD License
    + BSD(Berkeley Software Distribution)는 버클리 캘리포니아 대학에서 개발한 라이선스,
    + MIT와 동일 조건
4. Beerware
    + 오픈소스 개발자에게 맥주를 사줘야 하는 라이선스. (물론 만날 수 있는 경우)