## Ch09. JS 선행 - 01. 개요
### 표기법
+ dash-case(kebab-case) : HTML, CSS
    + the-quick-brown-fox-jumps-over-the-lazy-dog
+ snake_case : HTML, CSS
    + the_quick_brown_fox_jumps_over_the_lazy_dog
+ camelCase : JS
    + theQuickBrownFoxJumpsOverTheLazyDog
+ ParcelCase : JS
    + TheQuickBrownFoxJumpsOverTheLazyDog
+ Zero-based Numbering : 0기반 번호 매기기! 특수한 경우를 제외하고 0부터 숫자를 시작한다.
+ 주석 : Commtents
    > // 한 줄 메모<br>
      /* 한 줄 메모 */<br>
      /**<br>
        * 여러 줄<br>
        * 메모1<br>
        * 메모2<br>
        */

<br/><hr/><br/>

## Ch09. JS 선행 - 02. 데이터 종류
### 데이터 종류
+ String(문자 데이터) => "", '', ``를 사용
    > let myName = "HEROPY";<br>
      let email ='thesecon@gmail.com';<br>
      let hello = `Hello ${myName}?!`;<br>

    > console.log(myName); // HEROPY<br>
      console.log(email); // thesecon@gmail.com<br>
      console.log(hello); // Hello HEROPY?!
+ Number(숫자 데이터) => 정수 및 부동소수점 숫자를 나타낸다.
    > let number = 123;<br>
      let opacity = 1.57;<br>

    > console.log(number); // 123<br>
      console.log(opacity); // 1.57
+ Boolean(불린 데이터) => true, false 두 가지 값밖에 없는 논리 데이터
    > let checked = true;<br>
      let isShow = false;<br>
    
    > console.log(checked); // true<br>
      console.log(isShow); // false
+ Undefined => 값이 할당되지 않은 상태를 나타낸다.
    > let undef;<br>
      let obj = { abc: 123 };<br>

    > console.log(undef); // undefined<br>
      console.log(obj.abc); // 123<br>
      console.log(obj.xyz); // undefined
+ Null => 어떤 값이 의도적으로 비어있음을 의미한다.
    > let empty = null;

    > console.log(empty); // null
+ Object(객체 데이터) => 여러 데이터를 Key:Value 형태로 저장한다. {}
    > let user = {<br>
        name : 'HEROPY',<br>
        age : 85,<br>
        isValid : true<br>
    };

    > console.log(user.name); // HEROPY<br>
      console.log(user.age); // 85<br>
      console.log(user.isValid); // true
+ Array(배열 데이터) => 여러 데이터를 순차적으로 저장한다. []
    > let fruits = ['Apple', 'Banana', 'Cherry']

    > console.log(fruits[0]); // 'Apple'<br>
      console.log(fruits[1]); // 'Banana'<br>
      console.log(fruits[2]); // 'Cherry'

<br/><hr/><br/>

## Ch09. JS 선행 - 03. 변수, 예약어
### 변수 : 데이터를 저장하고 참조(사용)하는 데이터의 이름
+ 변수는 재사용 가능
+ 변수 선언
    + var
        + 사용하지 않는 것을 권장
    + let
        + 값(데이터)의 재할당 가능
    + const
        + 값(데이터)의 재할당 불가
        + TypeError: Assignment to constant variable.
### 예약어 : 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
+ Reserved Word
    + this // SyntaxError
    + if // SyntaxError
    + break // SyntaxError

<br/><hr/><br/>

## Ch09. JS 선행 - 04. 함수
### 함수 : 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)
+ function
    + 함수 선언
    > function helloFunc() {<br>
        console.log(1234);<br>
    }
    + 함수 호출
    > hellpFunc(); // 1234
+ function return(반환)
    > function retirnFunc() {<br>
        return 123;<br>
    }<br>
    let a = returnFunc();<br>
    console.log(a); // 123
+ function sum
    > function sum(a, b) { // a와 b는 매개변수(Parameters)<br>
        return a + b;<br>
    }<br>
      let a = sum(1, 2);<br>
      let b = sum(7, 12);<br>
      let c = sum(2, 4);<br>
      console.log(a, b, c); // 3, 19, 6
+ function hello(){ ==> 기명(이름이 있는) 함수 => 함수 선언<br>
    console.log('Hello~');<br>
}
+ let world = function () {  ==> 익명(이름이 없는) 함수 => 함수 표현<br>
    console.log('World~');<br>
}
+ 객체 데이터
> const heropy {<br>
    name: 'HETOPY',<br>
    age: 85,<br>
    // 메소드(Method)<br>
    getName: function (){<br>
        return this.name;<br>
    }<br>
};<br>
const hisName = hetopy.getName();<br>
console.log(hisName;) // HEROPY<br>
//혹은<br>
console.log(heropy.getName()); // HEROPY

<br/><hr/><br/>

## Ch09. JS 선행 - 05. 조건문
### 조건문 : 조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문
+ if
> let isShow = true;<br>
  let checked = false;<br>
  if(isShow) {<br>
      colsole.log('Show!'); // Show!<br>
  }<br>
  if(checked) {<br>
      colsole.log('Checked!')<br>
  }
+ else
> let isShow = true;<br>
  if(isShow) {<br>
      console.log('Show!');<br>
  }else{<br>
      console.log('Hide?');<br>
  }

<br/><hr/><br/>

## Ch09. JS 선행 - 06. DOM API(1)
### DOM API : Document Object Model, Application Programming Interface
1. 
    + HTML 요소(Element) 1개 검색/찾기
    > const boxEl = document.querySelector('.box');
    + HTML 요소에 적용할 수 있는 메소드
    > boxEl.addEventListener();
    + 인수(Arguments)를 추가 가능
    > boxEl.addEventListener(1, 2);
    + 1 - 이벤트(Event, 상황)
    > boxEl.addEventLitener('click', 2);
    + 2 - 핸들러(Handler, 실행할 함수)
    > boxEl.addEventLitener('click', function () {<br>
        console.log('Click~!');<br>
    })<br>
2.
    + HTML 요소(Element) 검색/찾기
    > const boxEl = document.querySelector('.box');
    + 요소의 클래스 정보 객체 활용
    > boxEl.classList.add('active');<br>
      let isContains = boxEl.classList.contains('active');<br>
      console.log(isContains); // true<br><br>
      box.classList.remove('active');<br>
      isContains = boxEl.classList.contains('active');<br>
      console.log(isContains); // false


<br/><hr/><br/>

## Ch09. JS 선행 - 07. DOM API(2)
1. 
    + HTML 요소(Element) 모두 검색/찾기
    > const boxEls = document.querySelectorAll('.box');<br>
    console.log(boxEls);
    + 찾은 요소를 반복해서 함수 실행
    + 익명 함수를 인수로 추가
    > boxEls.forEach(function () {});

    + 첫 번째 매개변수(boxEl): 반복중인 요소
    + 두 번째 매개변수(index): 반복중인 번호
    > boxEls.forEach(function (boxEl, index){<br>
        boxEl.classList.add(`order-${index + 1});<br>
        console.log(index, boxEl);<br>
    });
2. 
    > const boxEl = document.selector('.box');
    + Getter, 값을 얻는 용도
    > console.log(boxEl.textContent); // Box!!
    + Setter, 값을 지정하는 용도
    > boxEl.textContent = 'HEROPY?!';<br>
      console.log(boxEl.textContent); // HEROPY?!

<br/><hr/><br/>

## Ch09. JS 선행 - 08. 메소드 체이닝
### 메소드 체이닝 : Method Chaining
> const a = 'Hello!';
+ split: 문자를 인수 기준으로 쪼개서 배열로 반환.
+ reverse: 배열을 뒤집기.
+ join: 배열을 인수 기준으로 문자로 병합해 반환.
> const b = a.split('').reverse().join(''); // 메소드 체이닝<br>
  console.log(a); // Hello~<br>
  console.log(b); // ~olleH

<br/><hr/><br/>

## Ch09. JS 선행 - 09. 질의응답
1. 
    > Q. The quick brown fox 를 camalCase로 작성하시오.<br>
      A. theQuickBrownFox
2. 
    > Q. let fruits = ['Apple', 'Banana', 'Cherry']; 데이터를 활용해 'Banana'를 콘솔에 출력하시오.<br>
      A. console.log(fruits[1]);
3. 
    > Q. 불린 데이터(Boolean)에서 거짓을 의미하는 데이터는?<br>
      A. false
4. 
    > Q. '값이 의도적으로 비어있음'을 의미하는 데이터는?<br>
      A. Null
5. 
    > Q. {} 데이터의 종류는?<br>
      A. Object(객체 데이터)
6. 
    > Q. let obj = {abc:123};<br>
         console.log(obj.xyz); 를 통해 콘솔에 출력될 값(데이터)은?<br>
      A. undefined
7. 
    > Q. 값(데이터)을 재할당할 수 없는 변수 선언 키워드는?<br>
      A. const
8. 
    > Q. 함수에서 값(데이터)을 반환하기 위해 사용하는 키워드는?<br>
      A. return
9. 
    > Q. sum(2, 4) 함수에서 2, 4를 무엇이라 하는가?<br>
      A. 인수(Arguments)
10. 
    > Q. function sum(a, b){<br>
        return a + b<br>
    } 함수 선언의 a,b와 같이 함수 호출에서 전달받은 인수를 함수 내부로 전달하기 위한 변수를 무엇이라 하는가?<br>
      A. 매개변수(Parameters)
11. 
    > Q. 이름이 없는 함수를 무엇이라 하는가?<br>
      A. 익명 함수(Anonymous Function)
12. 
    > Q. hello 이름의 함수 표현을 작성하고 호출하시오.<br>
      A. const hello = function (){};<br>
      hello();
13. 
    > Q. const user = {<br>
        getName : function(){}<br>
    } getName과 같이 함수가 할당된 객체 데이터의 속성(Property)을 무엇이라 하는가?<br>
      A. 메소드(Method)
14. 
    > Q. 조건이 참(true)인 조건문을 작성하시오.<br>
      A. if(true){}
15. 
    > Q. 가져온 JS파일을 HTML 문서 분석 이후에 실행하도록 지시하는 HTML 속성(Attribute)은?<br>
      A. defer
16. 
    > Q. < div class="box">Box!!</ div> HTML 요소의 내용(Content)을 콘솔에 출력하시오.<br>
      A. const boxEl = document.querySelector('.box');<br>
         console.log(boxel.textContent);
17. 
    > Q. 값(데이터)을 재할당할 목적의 변수 선언 키워드는?<br>
      A. let
18. 
    > Q. const boxEl = document.querySelector('.box'); 코드의 boxEl 요소에 클릭(Click) 이벤트를 추가해 클릭 시 'Hello~'를 콘솔에 출력하시오<br>
      A. boxEl.addEventListener('click', function(){<br>
          console.log('Hello~');<br>
      })
19. 
    > Q. < div >1</ div > < div >2</ div > 2개의 DIV 요소에 JS로 class="hello"를 추가하시오.<br>
      A. const divEls = document.querySelectorAll('div');<br>
      divEls.forEach(function (divEl){<br>
          divEl.classList.add('hello');<br>
      });
20. 
    > Q. "HEROPY".split('').reverse().join(''); 같이 메소드를 이어 작성하는 방법을 무엇이라 하는가?<br>
      A. 메소드 체이닝(Method Chaining)
21. 
    > Q. const boxEl = document.querySelector('.box'); 코드의 boxEl 요소에 HTML 클래스 속성의 값으로 'active'가 포함되어 있으면, '포함됨!'을 콘솔 출력하시오.<br>
      A. if(boxEl.classList.contains('active')){<br>
          console.log('포함됨!');<br>
      }

<br/><hr/><br/>