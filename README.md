# 📘 KoKrJs: 한글 JavaScript 라이브러리

## 🚀 프로젝트 소개

KoKrJs는 JavaScript의 표준 빌트인 객체를 한글화하여 제공함으로써, 사용자들이 프로그래밍 언어에 더욱 쉽게 접근할 수 있도록 돕는 프로젝트입니다. 현재 `콘솔` 클래스와 `수학` 클래스를 한글화하여 제공하고 있으며, 향후 다른 기본 클래스들도 순차적으로 한글화할 예정입니다.

## 📦 설치 방법

### 1. 라이브러리 다운로드

`KoKrJs` 프로젝트의 `kokr.js` 파일을 다운로드 받으세요. 파일을 다운로드 받은 후, 웹 프로젝트의 스크립트 폴더에 저장합니다.

### 2. HTML 파일에 연결

HTML 파일에 다음과 같은 스크립트 태그를 추가하여 `kokr.js` 파일을 연결합니다.

```html
<script src="path/to/kokr.js"></script>
```

`path/to/kokr.js`는 실제 `kokr.js` 파일의 위치로 변경해주세요.

## 🛠 사용 방법

라이브러리를 성공적으로 연결한 후, JavaScript 코드 내에서 다음과 같이 한글로 된 메서드들을 사용할 수 있습니다.

```javascript
콘솔.출력("안녕하세요, KoKrJs 라이브러리를 사용 중입니다!");
콘솔.에러출력("이 메시지는 에러를 출력합니다.");
```

## 📚 현재 구현된 클래스와 메서드

| 클래스 명      | 개발 현황 |
| -------------- | --------- |
| 콘솔(Console)  | ✅        |
| 수학(Math)     | ✅        |
| 날짜(Date)     | ✅        |
| 배열(Array)    | ✅        |
| 문자열(String) | -         |
| 객체(Object)   | -         |

<details>
<summary>콘솔 클래스 (Console)</summary>

#### 메서드

- `출력(data)` - 콘솔에 일반 정보를 출력 (`console.log`)
- `에러출력(data)` - 콘솔에 에러 메시지를 출력 (`console.error`)
- `단언(condition, ...data)` - 조건이 거짓일 경우 콘솔에 메시지 출력 (`console.assert`)
- `지우기()` - 콘솔의 모든 출력을 지웁니다 (`console.clear`)
- `카운트(label)` - 주어진 라벨로 카운트를 시작하거나 증가 (`console.count`)
- `카운트리셋(label)` - 주어진 라벨의 카운트를 리셋 (`console.countReset`)
- `디버그(...data)` - 디버그 정보를 출력 (`console.debug`)
- `디렉토리(item, options)` - 객체의 속성을 보기 좋게 출력 (`console.dir`)
- `디렉토리XML(...data)` - XML 형식의 데이터를 출력 (`console.dirxml`)
- `그룹(...data)` - 메시지 그룹을 시작 (`console.group`)
- `그룹접기(...data)` - 접힌 메시지 그룹을 시작 (`console.groupCollapsed`)
- `그룹끝()` - 현재 메시지 그룹을 종료 (`console.groupEnd`)
- `정보(...data)` - 정보 메시지를 출력 (`console.info`)
- `로그(...data)` - 로그 메시지를 출력 (`console.log`)
- `테이블(tabularData, properties)` - 테이블 형태로 데이터 출력 (`console.table`)
- `시간(label)` - 시간 측정을 시작 (`console.time`)
- `시간끝(label)` - 시작된 시간 측정을 종료 (`console.timeEnd`)
- `시간로그(label, ...data)` - 진행 중인 시간 측정에 로그 기록 (`console.timeLog`)
- `타임스탬프(label)` - 타임스탬프 기록 (`console.timeStamp`)
- `트레이스(...data)` - 호출 스택 출력 (`console.trace`)
- `경고(...data)` - 경고 메시지를 출력 (`console.warn`)
</details>

<details>
<summary>수학 클래스 (Math)</summary>

#### 속성

- `e` - 자연 로그의 밑, 오일러의 수 e를 반환합니다. (`Math.E`)
- `로그10` - 10의 자연 로그 값을 반환합니다. (`Math.LN10`)
- `로그2` - 2의 자연 로그 값을 반환합니다. (`Math.LN2`)
- `LOG2E` - e의 밑-2 로그 값을 반환합니다. (`Math.LOG2E`)
- `LOG10E` - e의 밑-10 로그 값을 반환합니다. (`Math.LOG10E`)
- `파이` - 원의 둘레와 지름의 비율인 파이(π)를 반환합니다. (`Math.PI`)
- `제곱근1_2` - 0.5의 제곱근을 반환합니다. (`Math.SQRT1_2`)
- `제곱근2` - 2의 제곱근을 반환합니다. (`Math.SQRT2`)

#### 메서드

- `절대값(x)` - 주어진 수의 절대값을 반환합니다. (`Math.abs`)
- `아크코사인(x)` - 주어진 수의 아크코사인 값을 반환합니다. (`Math.acos`)
- `아크사인(x)` - 주어진 수의 아크사인 값을 반환합니다. (`Math.asin`)
- `아크탄젠트(x)` - 주어진 수의 아크탄젠트 값을 반환합니다. (`Math.atan`)
- `아크탄젠트2(y, x)` - 주어진 x, y 좌표에 대한 아크탄젠트 값을 반환합니다. (`Math.atan2`)
- `천장(x)` - 주어진 수를 올림하여 가장 가까운 정수를 반환합니다. (`Math.ceil`)
- `코사인(x)` - 주어진 각도의 코사인 값을 반환합니다. (`Math.cos`)
- `지수(x)` - 자연 상수 e를 주어진 수의 거듭제곱으로 계산합니다. (`Math.exp`)
- `바닥(x)` - 주어진 수를 내림하여 가장 가까운 정수를 반환합니다. (`Math.floor`)
- `로그(x)` - 주어진 수의 자연 로그(밑이 e인 로그)를 반환합니다. (`Math.log`)
- `최대(...값들)` - 주어진 값들 중에서 가장 큰 값을 반환합니다. (`Math.max`)
- `최소(...값들)` - 주어진 값들 중에서 가장 작은 값을 반환합니다. (`Math.min`)
- `거듭제곱(x, y)` - 주어진 밑 값과 지수 값을 사용하여 거듭제곱 값을 계산합니다. (`Math.pow`)
- `난수()` - 0과 1 사이의 난수를 반환합니다. (`Math.random`)
- `반올림(x)` - 주어진 수를 가장 가까운 정수로 반올림합니다. (`Math.round`)
- `사인(x)` - 주어진 각도의 사인 값을 반환합니다. (`Math.sin`)
- `제곱근(x)` - 주어진 수의 제곱근을 반환합니다. (`Math.sqrt`)
- `탄젠트(x)` - 주어진 각도의 탄젠트 값을 반환합니다. (`Math.tan`)
</details>

<details>
<summary>날짜 클래스</summary>

#### 속성

- `date` - 내부 JavaScript Date 객체를 저장합니다. (`new Date()`)

#### 메서드

- `문자열로()` - 날짜를 문자열로 반환합니다. (`Date.prototype.toString()`)
- `날짜문자열로()` - 날짜 부분만을 문자열로 반환합니다. (`Date.prototype.toDateString()`)
- `시간문자열로()` - 시간 부분만을 문자열로 반환합니다. (`Date.prototype.toTimeString()`)
- `지역문자열로()` - 현지 지역 설정에 적합한 문자열로 날짜와 시간을 반환합니다. (`Date.prototype.toLocaleString()`)
- `지역날짜문자열로()` - 현지 지역 설정에 적합한 문자열로 날짜 부분만을 반환합니다. (`Date.prototype.toLocaleDateString()`)
- `지역시간문자열로()` - 현지 지역 설정에 적합한 문자열로 시간 부분만을 반환합니다. (`Date.prototype.toLocaleTimeString()`)
- `값으로()` - 1970년 1월 1일 자정 이후의 밀리초 단위 시간 값을 반환합니다. (`Date.prototype.valueOf()`)
- `시간가져오기()` - 1970년 1월 1일 자정 이후의 밀리초 단위 시간 값을 반환합니다. (`Date.prototype.getTime()`)
- `연도가져오기()` - 현지 시간을 기준으로 연도를 반환합니다. (`Date.prototype.getFullYear()`)
- `UTC연도가져오기()` - UTC를 기준으로 연도를 반환합니다. (`Date.prototype.getUTCFullYear()`)
- `월가져오기()` - 현지 시간을 기준으로 월을 반환합니다 (0-11). (`Date.prototype.getMonth()`)
- `UTC월가져오기()` - UTC를 기준으로 월을 반환합니다 (0-11). (`Date.prototype.getUTCMonth()`)
- `일가져오기()` - 현지 시간을 기준으로 일(날짜)을 반환합니다. (`Date.prototype.getDate()`)
- `UTC일가져오기()` - UTC를 기준으로 일(날짜)을 반환합니다. (`Date.prototype.getUTCDate()`)
- `요일가져오기()` - 현지 시간을 기준으로 요일을 반환합니다 (0-6). (`Date.prototype.getDay()`)
- `UTC요일가져오기()` - UTC를 기준으로 요일을 반환합니다 (0-6). (`Date.prototype.getUTCDay()`)
- `시간가져오기()` - 현지 시간을 기준으로 시간을 반환합니다. (`Date.prototype.getHours()`)
- `UTC시간가져오기()` - UTC를 기준으로 시간을 반환합니다. (`Date.prototype.getUTCHours()`)
- `분가져오기()` - 현지 시간을 기준으로 분을 반환합니다. (`Date.prototype.getMinutes()`)
- `UTC분가져오기()` - UTC를 기준으로 분을 반환합니다. (`Date.prototype.getUTCMinutes()`)
- `초가져오기()` - 현지 시간을 기준으로 초를 반환합니다. (`Date.prototype.getSeconds()`)
- `UTC초가져오기()` - UTC를 기준으로 초를 반환합니다. (`Date.prototype.getUTCSeconds()`)
- `밀리초가져오기()` - 현지 시간을 기준으로 밀리초를 반환합니다. (`Date.prototype.getMilliseconds()`)
- `UTC밀리초가져오기()` - UTC를 기준으로 밀리초를 반환합니다. (`Date.prototype.getUTCMilliseconds()`)
- `시차가져오기()` - 현지 시간과 UTC의 차이(분)를 반환합니다. (`Date.prototype.getTimezoneOffset()`)
- `ISO문자열로()` - 현지 시간을 기준으로 날짜와 시간을 ISO 형식의 문자열로 반환합니다. (`Date.prototype.toISOString()`)
- `JSON으로()` - JSON 형식으로 객체의 데이터를 변환할 때 사용됩니다. (`Date.prototype.toJSON()`)

</details>

<details>
<summary>배열 클래스</summary>

#### 속성

- `배열` - 내부 JavaScript Array 객체를 저장합니다.

#### 메서드

- `길이가져오기()` - 배열의 길이를 반환합니다. (`Array.prototype.length`)
- `끝에추가하기(...요소들)` - 배열 끝에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다. (`Array.prototype.push`)
- `끝에서제거하기()` - 배열 끝의 요소를 제거하고, 그 요소를 반환합니다. (`Array.prototype.pop`)
- `시작에추가하기(...요소들)` - 배열 시작에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다. (`Array.prototype.unshift`)
- `시작에서제거하기()` - 배열 시작의 요소를 제거하고, 그 요소를 반환합니다. (`Array.prototype.shift`)
- `역순으로정렬하기()` - 배열의 요소를 역순으로 정렬합니다. (`Array.prototype.reverse`)
- `정렬하기(정렬함수)` - 배열의 요소를 정렬합니다. 정렬 함수를 제공할 수 있습니다. (`Array.prototype.sort`)
- `채우기(값, 시작인덱스, 끝인덱스)` - 지정된 값으로 배열의 모든 요소를 채웁니다. (`Array.prototype.fill`)
- `일부가져오기(시작, 끝)` - 배열의 일부를 얕게 복사하여 새 배열을 반환합니다. (`Array.prototype.slice`)
- `각요소에실행하기(콜백)` - 배열의 요소에 대해 제공된 함수를 한 번씩 실행합니다. (`Array.prototype.forEach`)
- `찾기(콜백)` - 배열에서 특정 조건을 만족하는 요소를 찾아 반환합니다. (`Array.prototype.find`)
- `인덱스찾기(콜백)` - 배열에서 특정 조건을 만족하는 요소의 인덱스를 반환합니다. (`Array.prototype.findIndex`)
- `모두만족하는지(콜백)` - 배열의 모든 요소가 제공된 함수를 만족하는지 확인합니다. (`Array.prototype.every`)
- `하나라도만족하는지(콜백)` - 배열의 요소 중 하나라도 제공된 함수를 만족하는지 확인합니다. (`Array.prototype.some`)
- `축약하기(콜백, 초기값)` - 배열의 모든 요소에 대해 함수를 호출하고, 그 결과를 하나의 값으로 반환합니다. (`Array.prototype.reduce`)
- `역순축약하기(콜백, 초기값)` - 배열의 모든 요소에 대해 함수를 호출하고, 그 결과를 하나의 값으로 반환합니다. (역순) (`Array.prototype.reduceRight`)
- `문자열로변환()` - 배열을 문자열로 변환합니다. (`Array.prototype.join`)
- `연결하여문자열로(연결문자)` - 지정된 값을 사용하여 배열의 요소를 연결하여 문자열을 반환합니다. (`Array.prototype.join`)
- `맵핑하기(콜백)` - 배열을 맵핑된 배열로 반환합니다. (`Array.prototype.map`)
- `필터링하기(콜백)` - 배열에서 특정 조건을 만족하는 요소들만 모아 새 배열을 반환합니다. (`Array.prototype.filter`)

</details>

<details>
<summary>문자열 클래스</summary>

#### 속성

- `문자열` - 내부 JavaScript String 객체를 저장합니다.

#### 메서드

- `길이가져오기()` - 문자열의 길이를 반환합니다. (`String.prototype.length`)
- `문자가져오기(위치)` - 문자열의 특정 인덱스에 있는 문자를 반환합니다. (`String.prototype.charAt`)
- `대체하기(찾을문자, 대체할문자)` - 문자열을 다른 문자열로 대체합니다. (`String.prototype.replace`)
- `위치찾기(찾을문자, 시작위치)` - 문자열에서 특정 문자열을 찾아 위치 인덱스를 반환합니다. (`String.prototype.indexOf`)
- `소문자로변환()` - 문자열을 소문자로 변환합니다. (`String.prototype.toLowerCase`)
- `대문자로변환()` - 문자열을 대문자로 변환합니다. (`String.prototype.toUpperCase`)
- `공백제거()` - 문자열의 앞뒤 공백을 제거합니다. (`String.prototype.trim`)
- `부분추출(시작, 끝)` - 문자열의 일부를 추출합니다. (`String.prototype.slice`)
- `나누기(구분자, 최대길이)` - 문자열을 지정된 구분자로 나누어 배열로 반환합니다. (`String.prototype.split`)
- `시작확인(문자열, 시작위치)` - 지정된 문자열로 시작하는지 확인합니다. (`String.prototype.startsWith`)
- `끝확인(문자열, 길이)` - 지정된 문자열로 끝나는지 확인합니다. (`String.prototype.endsWith`)
- `포함확인(문자열, 시작위치)` - 문자열에 특정 문자열이 포함되어 있는지 확인합니다. (`String.prototype.includes`)
- `반복하기(횟수)` - 문자열을 반복합니다. (`String.prototype.repeat`)

</details>

## ✨ 기여 방법

이 프로젝트에 기여하고 싶으신 분은 풀 리퀘스트를 보내주시거나, 새로운 이슈를 등록해주세요. 모든 기여에 대해 감사드립니다!

## 📝 라이선스

KoKrJs는 MIT 라이선스를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참조해주세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 [여기](이메일_주소)로 연락주세요.
