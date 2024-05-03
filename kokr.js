class 콘솔 {
  /**
   * 일반 정보를 콘솔에 출력합니다.
   * @param {...*} 데이터 출력할 데이터
   */
  static 출력(...데이터) {
    console.log(...데이터);
  }

  /**
   * 에러 메시지를 콘솔에 출력합니다.
   * @param {...*} 데이터 출력할 에러 메시지
   */
  static 에러출력(...데이터) {
    console.error(...데이터);
  }

  /**
   * 조건이 참이 아닐 경우 콘솔에 메시지를 출력합니다.
   * @param {boolean} 조건 조건식
   * @param {*} 데이터 출력할 데이터
   */
  static 단언(조건, ...데이터) {
    console.assert(조건, ...데이터);
  }

  /**
   * 콘솔의 출력을 모두 지웁니다.
   */
  static 지우기() {
    console.clear();
  }

  /**
   * 주어진 라벨로 카운트를 시작하거나 카운트를 증가시킵니다.
   * @param {string} 라벨 카운트 라벨
   */
  static 카운트(라벨 = "") {
    console.count(라벨);
  }

  /**
   * 주어진 라벨의 카운트를 리셋합니다.
   * @param {string} 라벨 카운트 라벨
   */
  static 카운트리셋(라벨 = "") {
    console.countReset(라벨);
  }

  /**
   * 디버그 정보를 콘솔에 출력합니다.
   * @param {*} 데이터 출력할 데이터
   */
  static 디버그(...데이터) {
    console.debug(...데이터);
  }

  /**
   * 객체의 속성을 콘솔에 보기 좋게 출력합니다.
   * @param {*} 항목 출력할 객체
   * @param {*} 옵션 옵션
   */
  static 디렉토리(항목, 옵션) {
    console.dir(항목, 옵션);
  }

  /**
   * XML 형식의 데이터를 콘솔에 출력합니다.
   * @param {*} 데이터 출력할 데이터
   */
  static 디렉토리XML(...데이터) {
    console.dirxml(...데이터);
  }

  /**
   * 콘솔에 메시지 그룹을 시작합니다.
   * @param {*} 데이터 그룹의 제목
   */
  static 그룹(...데이터) {
    console.group(...데이터);
  }

  /**
   * 콘솔에 접힌 메시지 그룹을 시작합니다.
   * @param {*} 데이터 그룹의 제목
   */
  static 그룹접기(...데이터) {
    console.groupCollapsed(...데이터);
  }

  /**
   * 현재 메시지 그룹을 종료합니다.
   */
  static 그룹끝() {
    console.groupEnd();
  }

  /**
   * 정보 메시지를 콘솔에 출력합니다.
   * @param {*} 데이터 출력할 데이터
   */
  static 정보(...데이터) {
    console.info(...데이터);
  }

  /**
   * 로그 메시지를 콘솔에 출력합니다.
   * @param {*} 데이터 출력할 데이터
   */
  static 로그(...데이터) {
    console.log(...데이터);
  }

  /**
   * 테이블 형태로 데이터를 콘솔에 출력합니다.
   * @param {*} 테이블데이터 테이블로 출력할 데이터
   * @param {string[]} 속성목록 표시할 속성 목록
   */
  static 테이블(테이블데이터, 속성목록) {
    console.table(테이블데이터, 속성목록);
  }

  /**
   * 시간 측정을 시작합니다.
   * @param {string} 라벨 시간 측정 라벨
   */
  static 시간(라벨 = "") {
    console.time(라벨);
  }

  /**
   * 시작된 시간 측정을 종료합니다.
   * @param {string} 라벨 시간 측정 라벨
   */
  static 시간끝(라벨 = "") {
    console.timeEnd(라벨);
  }

  /**
   * 진행 중인 시간 측정에 로그를 기록합니다.
   * @param {string} 라벨 시간 측정 라벨
   * @param {*} 데이터 추가 출력할 데이터
   */
  static 시간로그(라벨 = "", ...데이터) {
    console.timeLog(라벨, ...데이터);
  }

  /**
   * 타임스탬프를 콘솔에 기록합니다.
   * @param {string} 라벨 타임스탬프 라벨
   */
  static 타임스탬프(라벨 = "") {
    console.timeStamp(라벨);
  }

  /**
   * 호출 스택을 콘솔에 출력합니다.
   * @param {*} 데이터 출력할 데이터
   */
  static 트레이스(...데이터) {
    console.trace(...데이터);
  }

  /**
   * 경고 메시지를 콘솔에 출력합니다.
   * @param {*} 데이터 출력할 데이터
   */
  static 경고(...데이터) {
    console.warn(...데이터);
  }
}

class 수학 {
  /**
   * 자연 로그의 밑, 오일러의 수 e를 반환합니다.
   */
  static get e() {
    return Math.E;
  }

  /**
   * 10의 자연 로그 값을 반환합니다.
   */
  static get 로그10() {
    return Math.LN10;
  }

  /**
   * 2의 자연 로그 값을 반환합니다.
   */
  static get 로그2() {
    return Math.LN2;
  }

  /**
   * e의 밑-2 로그 값을 반환합니다.
   */
  static get LOG2E() {
    return Math.LOG2E;
  }

  /**
   * e의 밑-10 로그 값을 반환합니다.
   */
  static get LOG10E() {
    return Math.LOG10E;
  }

  /**
   * 원의 둘레와 지름의 비율인 파이(π)를 반환합니다.
   */
  static get 파이() {
    return Math.PI;
  }

  /**
   * 0.5의 제곱근, 또는 2의 제곱근의 역수를 반환합니다.
   */
  static get 제곱근1_2() {
    return Math.SQRT1_2;
  }

  /**
   * 2의 제곱근을 반환합니다.
   */
  static get 제곱근2() {
    return Math.SQRT2;
  }

  /**
   * 주어진 수의 절대값을 반환합니다.
   * @param x 절대값을 구할 수치 표현식입니다.
   */
  static 절대값(x) {
    return Math.abs(x);
  }

  /**
   * 주어진 수의 아크코사인 값을 반환합니다.
   * @param x 아크코사인을 구할 수치 표현식입니다.
   */
  static 아크코사인(x) {
    return Math.acos(x);
  }

  /**
   * 주어진 수의 아크사인 값을 반환합니다.
   * @param x 아크사인을 구할 수치 표현식입니다.
   */
  static 아크사인(x) {
    return Math.asin(x);
  }

  /**
   * 주어진 수의 아크탄젠트 값을 반환합니다.
   * @param x 아크탄젠트를 구할 수치 표현식입니다.
   */
  static 아크탄젠트(x) {
    return Math.atan(x);
  }

  /**
   * 주어진 x, y 좌표에 대한 아크탄젠트 값을 반환합니다.
   * @param y y 좌표입니다.
   * @param x x 좌표입니다.
   */
  static 아크탄젠트2(y, x) {
    return Math.atan2(y, x);
  }

  /**
   * 주어진 수를 올림하여 가장 가까운 정수를 반환합니다.
   * @param x 올릴 수치 표현식입니다.
   */
  static 천장(x) {
    return Math.ceil(x);
  }

  /**
   * 주어진 각도의 코사인 값을 반환합니다.
   * @param x 각도(라디안)입니다.
   */
  static 코사인(x) {
    return Math.cos(x);
  }

  /**
   * 자연 상수 e를 주어진 수의 거듭제곱으로 계산합니다.
   * @param x e의 지수입니다.
   */
  static 지수(x) {
    return Math.exp(x);
  }

  /**
   * 주어진 수를 내림하여 가장 가까운 정수를 반환합니다.
   * @param x 내릴 수치 표현식입니다.
   */
  static 바닥(x) {
    return Math.floor(x);
  }

  /**
   * 주어진 수의 자연 로그(밑이 e인 로그)를 반환합니다.
   * @param x 로그를 구할 수치 표현식입니다.
   */
  static 로그(x) {
    return Math.log(x);
  }

  /**
   * 주어진 값들 중에서 가장 큰 값을 반환합니다.
   * @param 값들 비교할 수치 표현식들입니다.
   */
  static 최대(...값들) {
    return Math.max(...값들);
  }

  /**
   * 주어진 값들 중에서 가장 작은 값을 반환합니다.
   * @param 값들 비교할 수치 표현식들입니다.
   */
  static 최소(...값들) {
    return Math.min(...값들);
  }

  /**
   * 주어진 밑 값과 지수 값을 사용하여 거듭제곱 값을 계산합니다.
   * @param x 밑 값입니다.
   * @param y 지수 값입니다.
   */
  static 거듭제곱(x, y) {
    return Math.pow(x, y);
  }

  /**
   * 0과 1 사이의 난수를 반환합니다.
   */
  static 난수() {
    return Math.random();
  }

  /**
   * 주어진 수를 가장 가까운 정수로 반올림합니다.
   * @param x 반올림할 수치 표현식입니다.
   */
  static 반올림(x) {
    return Math.round(x);
  }

  /**
   * 주어진 각도의 사인 값을 반환합니다.
   * @param x 각도(라디안)입니다.
   */
  static 사인(x) {
    return Math.sin(x);
  }

  /**
   * 주어진 수의 제곱근을 반환합니다.
   * @param x 제곱근을 구할 수치 표현식입니다.
   */
  static 제곱근(x) {
    return Math.sqrt(x);
  }

  /**
   * 주어진 각도의 탄젠트 값을 반환합니다.
   * @param x 각도(라디안)입니다.
   */
  static 탄젠트(x) {
    return Math.tan(x);
  }
}

class 날짜 {
  constructor() {
    this.date = new Date();
  }

  /** 날짜를 문자열로 반환합니다. 문자열의 형식은 지역 설정에 따라 다릅니다. */
  문자열로() {
    return this.date.toString();
  }

  /** 날짜 부분을 문자열로 반환합니다. */
  날짜문자열로() {
    return this.date.toDateString();
  }

  /** 시간 부분을 문자열로 반환합니다. */
  시간문자열로() {
    return this.date.toTimeString();
  }

  /** 현지 지역 설정에 적합한 문자열로 날짜와 시간을 반환합니다. */
  지역문자열로() {
    return this.date.toLocaleString();
  }

  /** 현지 지역 설정에 적합한 문자열로 날짜를 반환합니다. */
  지역날짜문자열로() {
    return this.date.toLocaleDateString();
  }

  /** 현지 지역 설정에 적합한 문자열로 시간을 반환합니다. */
  지역시간문자열로() {
    return this.date.toLocaleTimeString();
  }

  /** 1970년 1월 1일 자정 이후의 밀리초 단위 시간 값을 반환합니다. */
  값으로() {
    return this.date.valueOf();
  }

  /** 1970년 1월 1일 자정 이후의 밀리초 단위 시간 값을 반환합니다. */
  시간가져오기() {
    return this.date.getTime();
  }

  /** 현지 시간을 기준으로 연도를 가져옵니다. */
  연도가져오기() {
    return this.date.getFullYear();
  }

  /** UTC를 기준으로 연도를 가져옵니다. */
  UTC연도가져오기() {
    return this.date.getUTCFullYear();
  }

  /** 현지 시간을 기준으로 월을 가져옵니다 (0-11). */
  월가져오기() {
    return this.date.getMonth();
  }

  /** UTC를 기준으로 월을 가져옵니다 (0-11). */
  UTC월가져오기() {
    return this.date.getUTCMonth();
  }

  /** 현지 시간을 기준으로 일(날짜)를 가져옵니다. */
  일가져오기() {
    return this.date.getDate();
  }

  /** UTC를 기준으로 일(날짜)를 가져옵니다. */
  UTC일가져오기() {
    return this.date.getUTCDate();
  }

  /** 현지 시간을 기준으로 요일을 가져옵니다 (0-6). */
  요일가져오기() {
    return this.date.getDay();
  }

  /** UTC를 기준으로 요일을 가져옵니다 (0-6). */
  UTC요일가져오기() {
    return this.date.getUTCDay();
  }

  /** 현지 시간을 기준으로 시간을 가져옵니다. */
  시간가져오기() {
    return this.date.getHours();
  }

  /** UTC를 기준으로 시간을 가져옵니다. */
  UTC시간가져오기() {
    return this.date.getUTCHours();
  }

  /** 현지 시간을 기준으로 분을 가져옵니다. */
  분가져오기() {
    return this.date.getMinutes();
  }

  /** UTC를 기준으로 분을 가져옵니다. */
  UTC분가져오기() {
    return this.date.getUTCMinutes();
  }

  /** 현지 시간을 기준으로 초를 가져옵니다. */
  초가져오기() {
    return this.date.getSeconds();
  }

  /** UTC를 기준으로 초를 가져옵니다. */
  UTC초가져오기() {
    return this.date.getUTCSeconds();
  }

  /** 현지 시간을 기준으로 밀리초를 가져옵니다. */
  밀리초가져오기() {
    return this.date.getMilliseconds();
  }

  /** UTC를 기준으로 밀리초를 가져옵니다. */
  UTC밀리초가져오기() {
    return this.date.getUTCMilliseconds();
  }

  /** 현지 시간과 UTC의 차이(분)를 반환합니다. */
  시차가져오기() {
    return this.date.getTimezoneOffset();
  }

  /** 현지 시간을 기준으로 날짜와 시간을 ISO 형식의 문자열로 반환합니다. */
  ISO문자열로() {
    return this.date.toISOString();
  }

  /** JSON 형식으로 객체의 데이터를 변환할 때 사용됩니다. */
  JSON으로(키) {
    return this.date.toJSON(키);
  }

  /** 밀리초를 설정합니다. (현지 시간 기준)
   * @param {number} 밀리초 - 밀리초 값
   */
  밀리초설정하기(밀리초) {
    return this.date.setMilliseconds(밀리초);
  }

  /** 밀리초를 설정합니다. (UTC 기준)
   * @param {number} 밀리초 - 밀리초 값
   */
  UTC밀리초설정하기(밀리초) {
    return this.date.setUTCMilliseconds(밀리초);
  }

  /** 초를 설정합니다. (현지 시간 기준)
   * @param {number} 초 - 초 값
   * @param {number} [밀리초] - 밀리초 값 (선택적)
   */
  초설정하기(초, 밀리초) {
    return this.date.setSeconds(초, 밀리초);
  }

  /** 초를 설정합니다. (UTC 기준)
   * @param {number} 초 - 초 값
   * @param {number} [밀리초] - 밀리초 값 (선택적)
   */
  UTC초설정하기(초, 밀리초) {
    return this.date.setUTCSeconds(초, 밀리초);
  }

  /** 분을 설정합니다. (현지 시간 기준)
   * @param {number} 분 - 분 값
   * @param {number} [초] - 초 값 (선택적)
   * @param {number} [밀리초] - 밀리초 값 (선택적)
   */
  분설정하기(분, 초, 밀리초) {
    return this.date.setMinutes(분, 초, 밀리초);
  }

  /** 분을 설정합니다. (UTC 기준)
   * @param {number} 분 - 분 값
   * @param {number} [초] - 초 값 (선택적)
   * @param {number} [밀리초] - 밀리초 값 (선택적)
   */
  UTC분설정하기(분, 초, 밀리초) {
    return this.date.setUTCMinutes(분, 초, 밀리초);
  }

  /** 시간을 설정합니다. (현지 시간 기준)
   * @param {number} 시 - 시간 값
   * @param {number} [분] - 분 값 (선택적)
   * @param {number} [초] - 초 값 (선택적)
   * @param {number} [밀리초] - 밀리초 값 (선택적)
   */
  시간설정하기(시, 분, 초, 밀리초) {
    return this.date.setHours(시, 분, 초, 밀리초);
  }

  /** 시간을 설정합니다. (UTC 기준)
   * @param {number} 시 - 시간 값
   * @param {number} [분] - 분 값 (선택적)
   * @param {number} [초] - 초 값 (선택적)
   * @param {number} [밀리초] - 밀리초 값 (선택적)
   */
  UTC시간설정하기(시, 분, 초, 밀리초) {
    return this.date.setUTCHours(시, 분, 초, 밀리초);
  }

  /** 일(날짜)을 설정합니다. (현지 시간 기준)
   * @param {number} 일 - 일 값
   */
  일설정하기(일) {
    return this.date.setDate(일);
  }

  /** 일(날짜)을 설정합니다. (UTC 기준)
   * @param {number} 일 - 일 값
   */
  UTC일설정하기(일) {
    return this.date.setUTCDate(일);
  }

  /** 월을 설정합니다. (현지 시간 기준)
   * @param {number} 월 - 월 값 (0-11)
   * @param {number} [일] - 일 값 (선택적)
   */
  월설정하기(월, 일) {
    return this.date.setMonth(월, 일);
  }

  /**
   * # Issues
   * [ UTC월설정하기에 '일' 데이터를 받아 실행하면 Invaild Date 에러가 발생 ]
   * 월 설정 메서드는 월 값을 변경하기 위함으로써 '일' 파라미터를 제거
   * [ UTC연도설정하기에 '월' 또는 '일' 데이터를 받아 실행하면 Invaild Date 에러가 발생 ]
   * 연도 설정 메서드는 연도를 변경하기 위함으로써 '월' 또는 '일' 파라미터를 제거
   */

  /** 월을 설정합니다. (UTC 기준)
   * @param {number} 월 - 월 값 (0-11)
   */
  UTC월설정하기(월) {
    return this.date.setUTCMonth(월);
  }

  /** 연도를 설정합니다. (현지 시간 기준)
   * @param {number} 연도 - 연도 값
   * @param {number} [월] - 월 값 (0-11, 선택적)
   * @param {number} [일] - 일 값 (선택적)
   */
  연도설정하기(연도, 월, 일) {
    return this.date.setFullYear(연도, 월, 일);
  }

  /** 연도를 설정합니다. (UTC 기준)
   * @param {number} 연도 - 연도 값
   */
  UTC연도설정하기(연도) {
    return this.date.setUTCFullYear(연도);
  }
}

class 배열 {
  /**
   * 배열 인스턴스를 생성합니다.
   * @param {Array} 요소들 초기 배열 요소들
   */
  constructor(요소들) {
    this.배열 = Array.from(요소들);
  }

  /** 배열의 길이를 반환합니다. */
  길이가져오기() {
    return this.배열.length;
  }

  /**
   * 배열 끝에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다.
   * @param {...*} 요소들 추가할 요소들
   */
  끝에추가하기(...요소들) {
    return this.배열.push(...요소들);
  }

  /** 배열 끝의 요소를 제거하고, 그 요소를 반환합니다. */
  끝에서제거하기() {
    return this.배열.pop();
  }

  /**
   * 배열 시작에 하나 이상의 요소를 추가하고, 새로운 길이를 반환합니다.
   * @param {...*} 요소들 추가할 요소들
   */
  시작에추가하기(...요소들) {
    return this.배열.unshift(...요소들);
  }

  /** 배열 시작의 요소를 제거하고, 그 요소를 반환합니다. */
  시작에서제거하기() {
    return this.배열.shift();
  }

  /** 배열의 요소를 역순으로 정렬합니다. */
  역순으로정렬하기() {
    return this.배열.reverse();
  }

  /**
   * 배열의 요소를 정렬합니다. 정렬 함수를 제공할 수 있습니다.
   * @param {Function} [정렬함수] 정렬 기준을 제공하는 함수
   */
  정렬하기(정렬함수) {
    return this.배열.sort(정렬함수);
  }

  /**
   * 지정된 값으로 배열의 모든 요소를 채웁니다.
   * @param {*} 값 채울 값
   * @param {number} [시작인덱스=0] 시작 인덱스 (기본값: 0)
   * @param {number} [끝인덱스=this.배열.length] 끝 인덱스 (기본값: 배열 길이)
   */
  채우기(값, 시작인덱스, 끝인덱스) {
    return this.배열.fill(값, 시작인덱스, 끝인덱스);
  }

  /**
   * 배열의 일부를 얕게 복사하여 새 배열을 반환합니다.
   * @param {number} [시작=0] 시작 인덱스 (기본값: 0)
   * @param {number} [끝=this.배열.length] 끝 인덱스 (기본값: 배열 길이)
   */
  일부가져오기(시작, 끝) {
    return new 배열(this.배열.slice(시작, 끝));
  }

  /**
   * 배열의 요소에 대해 제공된 함수를 한 번씩 실행합니다.
   * @param {Function} 콜백 각 요소에 실행할 콜백 함수
   */
  각요소에실행하기(콜백) {
    this.배열.forEach(콜백);
  }

  /**
   * 배열에서 특정 조건을 만족하는 요소를 찾아 반환합니다.
   * @param {Function} 콜백 조건을 검사하는 콜백 함수
   */
  찾기(콜백) {
    return this.배열.find(콜백);
  }

  /**
   * 배열에서 특정 조건을 만족하는 요소의 인덱스를 반환합니다.
   * @param {Function} 콜백 조건을 검사하는 콜백 함수
   */
  인덱스찾기(콜백) {
    return this.배열.findIndex(콜백);
  }

  /**
   * 배열의 모든 요소가 제공된 함수를 만족하는지 확인합니다.
   * @param {Function} 콜백 조건을 검사하는 콜백 함수
   */
  모두만족하는지(콜백) {
    return this.배열.every(콜백);
  }

  /**
   * 배열의 요소 중 하나라도 제공된 함수를 만족하는지 확인합니다.
   * @param {Function} 콜백 조건을 검사하는 콜백 함수
   */
  하나라도만족하는지(콜백) {
    return this.배열.some(콜백);
  }

  /**
   * 배열의 모든 요소에 대해 함수를 호출하고, 그 결과를 하나의 값으로 반환합니다.
   * @param {Function} 콜백 축약할 때 사용할 콜백 함수
   * @param {*} [초기값] 축약을 시작할 초기 값
   */
  축약하기(콜백, 초기값) {
    return this.배열.reduce(콜백, 초기값);
  }

  /**
   * 배열의 모든 요소에 대해 함수를 호출하고, 그 결과를 하나의 값으로 반환합니다. (역순)
   * @param {Function} 콜백 축약할 때 사용할 콜백 함수
   * @param {*} [초기값] 축약을 시작할 초기 값
   */
  역순축약하기(콜백, 초기값) {
    return this.배열.reduceRight(콜백, 초기값);
  }

  /** 배열을 문자열로 변환합니다. */
  문자열로변환() {
    return this.배열.join();
  }

  /**
   * 지정된 값을 사용하여 배열의 요소를 연결하여 문자열을 반환합니다.
   * @param {string} [연결문자=','] 연결할 문자
   */
  연결하여문자열로(연결문자 = ",") {
    return this.배열.join(연결문자);
  }

  /**
   * 배열을 맵핑된 배열로 반환합니다.
   * @param {Function} 콜백 매 요소에 적용할 변환 함수
   */
  맵핑하기(콜백) {
    return new 배열(this.배열.map(콜백));
  }

  /**
   * 배열에서 특정 조건을 만족하는 요소들만 모아 새 배열을 반환합니다.
   * @param {Function} 콜백 필터 조건을 제공하는 콜백 함수
   */
  필터링하기(콜백) {
    return new 배열(this.배열.filter(콜백));
  }
}

class 문자열 {
  /**
   * 문자열 인스턴스를 생성합니다.
   * @param {string} 초기값 초기 문자열 값
   */
  constructor(초기값) {
    this.문자열 = 초기값;
  }

  /** 문자열의 길이를 반환합니다. */
  길이가져오기() {
    return this.문자열.length;
  }

  /**
   * 문자열의 특정 인덱스에 있는 문자를 반환합니다.
   * @param {number} 위치 문자의 위치
   */
  문자가져오기(위치) {
    return this.문자열.charAt(위치);
  }

  /**
   * 문자열을 다른 문자열로 대체합니다.
   * @param {string|RegExp} 찾을문자 찾을 문자열 또는 정규 표현식
   * @param {string|Function} 대체할문자 대체할 문자열 또는 함수
   */
  대체하기(찾을문자, 대체할문자) {
    return new 문자열(this.문자열.replace(찾을문자, 대체할문자));
  }

  /**
   * 문자열에서 특정 문자열을 찾아 위치 인덱스를 반환합니다.
   * @param {string} 찾을문자 찾을 문자열
   * @param {number} [시작위치=0] 검색을 시작할 위치
   */
  위치찾기(찾을문자, 시작위치) {
    return this.문자열.indexOf(찾을문자, 시작위치);
  }

  /**
   * 문자열을 소문자로 변환합니다.
   */
  소문자로변환() {
    return new 문자열(this.문자열.toLowerCase());
  }

  /**
   * 문자열을 대문자로 변환합니다.
   */
  대문자로변환() {
    return new 문자열(this.문자열.toUpperCase());
  }

  /**
   * 문자열의 앞뒤 공백을 제거합니다.
   */
  공백제거() {
    return new 문자열(this.문자열.trim());
  }

  /**
   * 문자열의 일부를 추출합니다.
   * @param {number} 시작 시작 인덱스
   * @param {number} [끝] 끝 인덱스
   */
  부분추출(시작, 끝) {
    return new 문자열(this.문자열.slice(시작, 끝));
  }

  /**
   * 문자열을 지정된 구분자로 나누어 배열로 반환합니다.
   * @param {string|RegExp} 구분자 문자열을 나눌 구분자
   * @param {number} [최대길이] 반환할 최대 배열 길이
   */
  나누기(구분자, 최대길이) {
    return this.문자열.split(구분자, 최대길이).map((요소) => new 문자열(요소));
  }

  /**
   * 지정된 문자열로 시작하는지 확인합니다.
   * @param {string} 문자열 검색할 문자열
   * @param {number} [시작위치=0] 검색을 시작할 위치
   */
  시작확인(문자열, 시작위치) {
    return this.문자열.startsWith(문자열, 시작위치);
  }

  /**
   * 지정된 문자열로 끝나는지 확인합니다.
   * @param {string} 문자열 검색할 문자열
   * @param {number} [길이=this.문자열.length] 검색할 문자열의 길이
   */
  끝확인(문자열, 길이) {
    return this.문자열.endsWith(문자열, 길이);
  }

  /**
   * 문자열에 특정 문자열이 포함되어 있는지 확인합니다.
   * @param {string} 문자열 검색할 문자열
   * @param {number} [시작위치=0] 검색을 시작할 위치
   */
  포함확인(문자열, 시작위치) {
    return this.문자열.includes(문자열, 시작위치);
  }

  /**
   * 문자열을 반복합니다.
   * @param {number} 횟수 반복할 횟수
   */
  반복하기(횟수) {
    return new 문자열(this.문자열.repeat(횟수));
  }
}
