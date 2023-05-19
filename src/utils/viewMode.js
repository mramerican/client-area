const WIDE = 1776;

export const VIEW_MODE = {
  SIMPLE: 'simple',
  WIDE: 'wide'
}

export const getViewMode = (innerWidth = window.innerWidth) => innerWidth >= WIDE ? VIEW_MODE.WIDE : VIEW_MODE.SIMPLE