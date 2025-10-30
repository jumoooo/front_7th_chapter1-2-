// Ai Edit
import { Event } from '../types';

/**
 * 🔁 반복 일정 아이콘 표시 여부를 판단하는 함수
 * @param event 검사할 이벤트
 * @returns 반복 아이콘을 표시해야 하면 true, 아니면 false
 */
export function shouldShowRepeatIcon(event: Event): boolean {
  // repeatGroupId가 있고, repeat.type이 'none'이 아니면 반복 아이콘 표시
  return Boolean(event.repeatGroupId) && event.repeat.type !== 'none';
}

/**
 * 🔁 반복 일정 아이콘 문자열을 반환하는 함수
 * @param event 검사할 이벤트
 * @returns 반복 아이콘 문자열 또는 빈 문자열
 */
export function getRepeatIcon(event: Event): string {
  return shouldShowRepeatIcon(event) ? ' 🔁' : '';
}

