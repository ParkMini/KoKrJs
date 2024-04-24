/**
 * 콘솔 클래스 테스트 영역
 */
function 콘솔테스트() {
  콘솔.출력("콘솔 출력 테스트");
  콘솔.에러출력("콘솔 에러 출력 테스트");
  콘솔.디버그("디버그 메시지 테스트");
  콘솔.정보("정보 메시지 테스트");
  콘솔.경고("경고 메시지 테스트");
  
  콘솔.단언(false, "단언 실패 메시지");
  콘솔.그룹("그룹 시작");
  콘솔.출력("그룹 내 출력");
  콘솔.그룹끝();
  
  콘솔.시간("타이머");
  setTimeout(() => {
    콘솔.시간끝("타이머");
  }, 1000);
  
  콘솔.트레이스("트레이스 테스트");
}

/**
 * 수학 클래스 테스트 영역
 */
function 수학테스트() {
  콘솔.출력("수학 클래스 테스트 시작");
  
  // 기본 상수 테스트
  콘솔.출력("π 값: " + 수학.파이);
  콘솔.출력("자연 상수 e: " + 수학.e);
  
  // 함수 테스트
  콘솔.출력("절대값 테스트 (-5의 절대값): " + 수학.절대값(-5));
  콘솔.출력("반올림 테스트 (3.7의 반올림): " + 수학.반올림(3.7));
  콘솔.출력("최대값 테스트 (3, 7, 2 중 최대값): " + 수학.최대(3, 7, 2));
  콘솔.출력("제곱근 테스트 (16의 제곱근): " + 수학.제곱근(16));
  콘솔.출력("거듭제곱 테스트 (2^3): " + 수학.거듭제곱(2, 3));
  
  콘솔.출력("수학 클래스 테스트 종료");
}