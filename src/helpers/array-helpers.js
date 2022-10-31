export function generateThresholds(steps) {
  let thresholds = []

  for (let i = steps; i >= 1; i--) {
    thresholds.push(i / steps)
  }

  thresholds.push(0)
  return thresholds
}