class 콘솔 {
  /**
   * 일반 정보를 콘솔에 출력합니다.
   * @param {*} 데이터 출력할 데이터
   */
  static 출력(데이터) {
    console.log(데이터);
  }

  /**
   * 에러 메시지를 콘솔에 출력합니다.
   * @param {*} 데이터 출력할 에러 메시지
   */
  static 에러출력(데이터) {
    console.error(데이터);
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
  static get e() { return Math.E; }

  /**
   * 10의 자연 로그 값을 반환합니다.
   */
  static get 로그10() { return Math.LN10; }

  /**
   * 2의 자연 로그 값을 반환합니다.
   */
  static get 로그2() { return Math.LN2; }

  /**
   * e의 밑-2 로그 값을 반환합니다.
   */
  static get LOG2E() { return Math.LOG2E; }

  /**
   * e의 밑-10 로그 값을 반환합니다.
   */
  static get LOG10E() { return Math.LOG10E; }

  /**
   * 원의 둘레와 지름의 비율인 파이(π)를 반환합니다.
   */
  static get 파이() { return Math.PI; }

  /**
   * 0.5의 제곱근, 또는 2의 제곱근의 역수를 반환합니다.
   */
  static get 제곱근1_2() { return Math.SQRT1_2; }

  /**
   * 2의 제곱근을 반환합니다.
   */
  static get 제곱근2() { return Math.SQRT2; }

  /**
   * 주어진 수의 절대값을 반환합니다.
   * @param x 절대값을 구할 수치 표현식입니다.
   */
  static 절대값(x) { return Math.abs(x); }

  /**
   * 주어진 수의 아크코사인 값을 반환합니다.
   * @param x 아크코사인을 구할 수치 표현식입니다.
   */
  static 아크코사인(x) { return Math.acos(x); }

  /**
   * 주어진 수의 아크사인 값을 반환합니다.
   * @param x 아크사인을 구할 수치 표현식입니다.
   */
  static 아크사인(x) { return Math.asin(x); }

  /**
   * 주어진 수의 아크탄젠트 값을 반환합니다.
   * @param x 아크탄젠트를 구할 수치 표현식입니다.
   */
  static 아크탄젠트(x) { return Math.atan(x); }

  /**
   * 주어진 x, y 좌표에 대한 아크탄젠트 값을 반환합니다.
   * @param y y 좌표입니다.
   * @param x x 좌표입니다.
   */
  static 아크탄젠트2(y, x) { return Math.atan2(y, x); }

  /**
   * 주어진 수를 올림하여 가장 가까운 정수를 반환합니다.
   * @param x 올릴 수치 표현식입니다.
   */
  static 천장(x) { return Math.ceil(x); }

  /**
   * 주어진 각도의 코사인 값을 반환합니다.
   * @param x 각도(라디안)입니다.
   */
  static 코사인(x) { return Math.cos(x); }

  /**
   * 자연 상수 e를 주어진 수의 거듭제곱으로 계산합니다.
   * @param x e의 지수입니다.
   */
  static 지수(x) { return Math.exp(x); }

  /**
   * 주어진 수를 내림하여 가장 가까운 정수를 반환합니다.
   * @param x 내릴 수치 표현식입니다.
   */
  static 바닥(x) { return Math.floor(x); }

  /**
   * 주어진 수의 자연 로그(밑이 e인 로그)를 반환합니다.
   * @param x 로그를 구할 수치 표현식입니다.
   */
  static 로그(x) { return Math.log(x); }

  /**
   * 주어진 값들 중에서 가장 큰 값을 반환합니다.
   * @param 값들 비교할 수치 표현식들입니다.
   */
  static 최대(...값들) { return Math.max(...값들); }

  /**
   * 주어진 값들 중에서 가장 작은 값을 반환합니다.
   * @param 값들 비교할 수치 표현식들입니다.
   */
  static 최소(...값들) { return Math.min(...값들); }

  /**
   * 주어진 밑 값과 지수 값을 사용하여 거듭제곱 값을 계산합니다.
   * @param x 밑 값입니다.
   * @param y 지수 값입니다.
   */
  static 거듭제곱(x, y) { return Math.pow(x, y); }

  /**
   * 0과 1 사이의 난수를 반환합니다.
   */
  static 난수() { return Math.random(); }

  /**
   * 주어진 수를 가장 가까운 정수로 반올림합니다.
   * @param x 반올림할 수치 표현식입니다.
   */
  static 반올림(x) { return Math.round(x); }

  /**
   * 주어진 각도의 사인 값을 반환합니다.
   * @param x 각도(라디안)입니다.
   */
  static 사인(x) { return Math.sin(x); }

  /**
   * 주어진 수의 제곱근을 반환합니다.
   * @param x 제곱근을 구할 수치 표현식입니다.
   */
  static 제곱근(x) { return Math.sqrt(x); }

  /**
   * 주어진 각도의 탄젠트 값을 반환합니다.
   * @param x 각도(라디안)입니다.
   */
  static 탄젠트(x) { return Math.tan(x); }
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
}
