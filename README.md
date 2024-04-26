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

<details>
<summary>콘솔 클래스 (Console)</summary>

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

## ✨ 기여 방법

이 프로젝트에 기여하고 싶으신 분은 풀 리퀘스트를 보내주시거나, 새로운 이슈를 등록해주세요. 모든 기여에 대해 감사드립니다!

## 📝 라이선스

KoKrJs는 MIT 라이선스를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참조해주세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 [여기](이메일_주소)로 연락주세요.
