import { paramCase, camelCase } from 'change-case'

export function formatClassName(string) {
  return paramCase(string)
}

export function formatCamelCase(string) {
  return camelCase(string)
}