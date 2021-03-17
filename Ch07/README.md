## Ch07. CSS 개요 - 01. 기본 문법, 주석

+ 선택자 {속성:값; 속성:값;}
    + 선택자 : 스타일(CSS)을 적용할 대상(Selector)
    + 속성 : 스타일(CSS)의 종류(Property)
    + 값 : 스타일(CSS)의 값(Value)

<br/><hr/><br/>

## Ch07. CSS 개요 - 02. 선언 방식
1. 내장 방식
    + style 태그의 내용(contents)으로 스타일을 작성하는 방식
2. 인라인 방식
    + 요소의 style 속성에 직접 스타일을 작성하는 방식(선택자 없음)
3. 링크 방식
    + link 태그로 외부 CSS문서를 가져와서 연결하는 방식
4. @import 방식
    + CSS의 @import 규칙으로 CSS 문서 안에서 또 다른 CSS 문서를 가져와 연결하는 방식

<br/><hr/><br/>

## Ch07. CSS 개요 - 03. 선택자_기본
### 기본
+ 전체 선택자(Univercal Selector) : 모든 요소를 선택. (*)
+ 태그 선택자(Type Selector) : 태그 이름에 해당하는 요소 선택. (ABC)
+ 클래스 선택자(Class Selector) : HTML class 속성의 값에 해당하는 요소 선택. (.abc)
+ 아이디 선택자(ID Selector) : HTML id 속성에 해당하는 요소 선택. (#abc)

<br/><hr/><br/>

## Ch07. CSS 개요 - 04. 선택자_복합
### 복합
+ 일치 선택자(Basic Combinator) : ABC와 XYZ 선택자를 동시에 만족하는 요소 선택. (ABCXYZ)
+ 자식 선택자(Child Combinator) : 선택자의 ABC우ㅏ 자식 요소 XYZ 선택. (ABC > XYZ)
+ 하위(후손) 선택자(Descendant Combinator) : 선택자 ABC의 하위 요소 XYZ 선택. '띄어쓰기'가 선택자의 기호. (ABC XYZ)
+ 인접 형제 선택자(Adjacent Sibling Combinator) : 선택자 ABC의 다음 형제 요소 XYZ <u>하나</u>를 선택. (ABC + XYZ)
+ 일반 형제 선택자(General Sibling Combinator) : 선택자 ABC의 다음 형제 요소 XYZ <u>모두</u>를 선택. (ABC ~ XYZ)

<br/><hr/><br/>

## Ch07. CSS 개요 - 05. 선택자_가상 클래스(1)
### 가상(1)
+ 가상 클래스 선택자(Pseudo-Classes)
    + HOVER : 선택자 ABC 요소에 마우스 커서가 올라가 있는 동안 선택. (ABC:hover)
    + ACTICE : 선택자 ABC 요소에 마우스를 클릭하고 있는 동안 선택. (ABC:active)
    + FOCUS : 선택자 ABC 요소가 포크스되면 선택. (ABC:focus)
        > Focus가 될 수 있는 요소는 정해져있다. <br>
        > tabindex 속성을 통해 focus가 될 수 있는 요소를 만들 수 있다. <br>
        > 순서(값)로 -1이 아닌 다른 값을 넣는 것은 논리적 흐름을 방해하기 때문에 권장하지는 않는다.
 

<br/><hr/><br/>

## Ch07. CSS 개요 - 06. 선택자_가상 클래스(2)
### 가상(2)
+ 가상 클래스 선택자(Pseudo-Classes) 
    + FIRST CHILD : 선택자 ABC가 형제 요소 중 첫째라면 선택. (ABC:first-child)
    + LAST CHILD : 선택자 ABC가 형제 요소 중 막내라면 선택. ( ABC:last-child)
    + NTH CHILD : 선택자 ABC가 형제 요소 중 (n)째라면 선택. (ABC:nth-child(n))
        > n은 0부터 시작! (Zero-Based Numbering) <br>
        > nth-child(2n) => 짝수, nth-child(2n+1) => 홀수
+ 부정 선택자(Negation) - NOT : 선택자 XYZ가 아닌 ABC 요소 선택. (ABC:not(XYZ))


<br/><hr/><br/>

## Ch07. CSS 개요 - 07. 선택자_가장 요소
### 가상 요소
+ 가상 요소 선택자(Pseudo-Elements)
    + BEFORE(인라인 요소) : 선택자 ABC 요소의 내부 앞에 내용(Content)을 삽입. (ABC::before)
    + AFTER(인라인 요소) : 선택자 ABC 요소의 내부 뒤에 내용(COntent)을 삽입. (ABC::after)
> 가상 요소와 content 속성은 필수적인 요소

<br/><hr/><br/>

## Ch07. CSS 개요 - 08. 선택자_속성
### 속성
+ 속성 선택자(Attribute)
    + ATTR : 속성 ABC을 포함한 요소 선택. ([ABC])
    + ATTR=VALUE : 속성 ABC을 포함하고 값이 XYZ인 요소 선택. ([ABC="XYZ"])

<br/><hr/><br/>

## Ch07. CSS 개요 - 09. 스타일 상속
> 상속되는 CSS 속성들은 모두 글자/문자와 관련된 속성들! (모든 글자/문자 속성은 아님 주의!) <br>
> ex) font-style, font-weight, font-size 등

### 강제상속
+ inherit : 부모 요소에 적용된 속성값을 강제 상속한다.

<br/><hr/><br/>

## Ch07. CSS 개요 - 10. 선택자 우선순위
### 우선순위란
> 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 CSS 속성을 우선 적용할지 결정하는 방법
1. 점수가 높은 선언이 우선함.
2. 점수가 같으면 가장 마지막에 해석된 선언이 우선함. (선언순서)
    + !important : 9999999999점(최우선)
    + 인라인 선언 : 1000점
    + id 선택자 : 100점
    + class 선택자 : 10점
    + 태그 선택자 : 1점
    + 전체 선택자 : 0점
    + body : 상속x

<br/><hr/><br/>