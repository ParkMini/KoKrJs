class 콘솔 {
  /**
   * 일반 정보를 콘솔에 출력합니다.
   * @param {*} data 출력할 데이터
   */
  static 출력(data) {
    console.log(data);
  }

  /**
   * 에러 메시지를 콘솔에 출력합니다.
   * @param {*} data 출력할 에러 메시지
   */
  static 에러출력(data) {
    console.error(data);
  }

  /**
   * 조건이 참이 아닐 경우 콘솔에 메시지를 출력합니다.
   * @param {boolean} condition 조건식
   * @param {*} data 출력할 데이터
   */
  static 단언(condition, ...data) {
    console.assert(condition, ...data);
  }

  /**
   * 콘솔의 출력을 모두 지웁니다.
   */
  static 지우기() {
    console.clear();
  }

  /**
   * 주어진 라벨로 카운트를 시작하거나 카운트를 증가시킵니다.
   * @param {string} label 카운트 라벨
   */
  static 카운트(label = "") {
    console.count(label);
  }

  /**
   * 주어진 라벨의 카운트를 리셋합니다.
   * @param {string} label 카운트 라벨
   */
  static 카운트리셋(label = "") {
    console.countReset(label);
  }

  /**
   * 디버그 정보를 콘솔에 출력합니다.
   * @param {*} data 출력할 데이터
   */
  static 디버그(...data) {
    console.debug(...data);
  }

  /**
   * 객체의 속성을 콘솔에 보기 좋게 출력합니다.
   * @param {*} item 출력할 객체
   * @param {*} options 옵션
   */
  static 디렉토리(item, options) {
    console.dir(item, options);
  }

  /**
   * XML 형식의 데이터를 콘솔에 출력합니다.
   * @param {*} data 출력할 데이터
   */
  static 디렉토리XML(...data) {
    console.dirxml(...data);
  }

  /**
   * 콘솔에 메시지 그룹을 시작합니다.
   * @param {*} data 그룹의 제목
   */
  static 그룹(...data) {
    console.group(...data);
  }

  /**
   * 콘솔에 접힌 메시지 그룹을 시작합니다.
   * @param {*} data 그룹의 제목
   */
  static 그룹접기(...data) {
    console.groupCollapsed(...data);
  }

  /**
   * 현재 메시지 그룹을 종료합니다.
   */
  static 그룹끝() {
    console.groupEnd();
  }

  /**
   * 정보 메시지를 콘솔에 출력합니다.
   * @param {*} data 출력할 데이터
   */
  static 정보(...data) {
    console.info(...data);
  }

  /**
   * 로그 메시지를 콘솔에 출력합니다.
   * @param {*} data 출력할 데이터
   */
  static 로그(...data) {
    console.log(...data);
  }

  /**
   * 테이블 형태로 데이터를 콘솔에 출력합니다.
   * @param {*} tabularData 테이블로 출력할 데이터
   * @param {string[]} properties 표시할 속성 목록
   */
  static 테이블(tabularData, properties) {
    console.table(tabularData, properties);
  }

  /**
   * 시간 측정을 시작합니다.
   * @param {string} label 시간 측정 라벨
   */
  static 시간(label = "") {
    console.time(label);
  }

  /**
   * 시작된 시간 측정을 종료합니다.
   * @param {string} label 시간 측정 라벨
   */
  static 시간끝(label = "") {
    console.timeEnd(label);
  }

  /**
   * 진행 중인 시간 측정에 로그를 기록합니다.
   * @param {string} label 시간 측정 라벨
   * @param {*} data 추가 출력할 데이터
   */
  static 시간로그(label = "", ...data) {
    console.timeLog(label, ...data);
  }

  /**
   * 타임스탬프를 콘솔에 기록합니다.
   * @param {string} label 타임스탬프 라벨
   */
  static 타임스탬프(label = "") {
    console.timeStamp(label);
  }

  /**
   * 호출 스택을 콘솔에 출력합니다.
   * @param {*} data 출력할 데이터
   */
  static 트레이스(...data) {
    console.trace(...data);
  }

  /**
   * 경고 메시지를 콘솔에 출력합니다.
   * @param {*} data 출력할 데이터
   */
  static 경고(...data) {
    console.warn(...data);
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
