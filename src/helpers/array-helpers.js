export function generateThresholds(steps) {
  let thresholds = []

  for (let i = 1; i <= steps; i++) {
    thresholds.push(i / steps)
  }

  thresholds.push(0)
  return thresholds
}