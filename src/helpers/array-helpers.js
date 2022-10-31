export function generateThresholds(steps) {
  let thresholds = []

  for (let i = steps; i >= 1; i--) {
    const factor = 10 ** 2
    const num = i / steps
    thresholds.push(Math.round(num * factor) / factor)
  }

  thresholds.push(0)
  return thresholds
}