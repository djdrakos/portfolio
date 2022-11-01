export function generateThresholds(steps) {
  let thresholds = []
    thresholds.push(0)
  for(let i = 1; i <= steps; i++) {
    const factor = 10 ** 2
    const num = i / steps
    thresholds.push(Math.round(num * factor) / factor)
  }
  return thresholds
}