import { paramCase } from 'change-case'

export function formatClassName(string) {
  return paramCase(string)
}