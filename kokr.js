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
