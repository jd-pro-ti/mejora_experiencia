export function getWeatherIcon(code) {
    if ([0].includes(code)) return '☀️'
    if ([1, 2, 3].includes(code)) return '⛅'
    if ([45, 48].includes(code)) return '🌫️'
    if ([51, 53, 55, 56, 57].includes(code)) return '🌦️'
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return '🌧️'
    if ([71, 73, 75, 77, 85, 86].includes(code)) return '❄️'
    if ([95, 96, 99].includes(code)) return '⛈️'
    return '🌡️'
  }
  