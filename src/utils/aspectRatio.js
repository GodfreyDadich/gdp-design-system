export function getPaddingTop (aspectRatio) {
  switch (aspectRatio) {
    case 'sixteen':
      return '56.25%'
    case 'standard':
      return '75%'
    case 'cropped':
      return '41.67%'
    case 'square':
      return '100%'
    default:
      return '0'
  }
}
