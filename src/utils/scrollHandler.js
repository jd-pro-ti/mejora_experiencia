export const applyNavbarScrollEffect = (isInternalPage) => {
    if (typeof window === 'undefined') return
  
    const nav = document.querySelector('nav')
    const links = document.querySelectorAll('.nav-link')
    const label = document.querySelector('label[for="menu-toggle"]')
    const svgIcons = label?.querySelectorAll('svg')
  
    const applyStyles = (primary) => {
      if (primary) {
        nav?.classList.add('bg-white', 'shadow-md')
        nav?.classList.remove('bg-transparent')
        nav?.classList.add('text-primary')
        nav?.classList.remove('text-white')
        label?.classList.add('text-primary')
        label?.classList.remove('text-white')
        svgIcons?.forEach(svg => svg.setAttribute('stroke', '#1d4ed8'))
        links.forEach(link => {
          link.classList.add('text-primary')
          link.classList.remove('text-white')
        })
      } else {
        nav?.classList.remove('bg-white', 'shadow-md')
        nav?.classList.add('bg-transparent')
        nav?.classList.remove('text-primary')
        nav?.classList.add('text-white')
        label?.classList.remove('text-primary')
        label?.classList.add('text-white')
        svgIcons?.forEach(svg => svg.setAttribute('stroke', '#ffffff'))
        links.forEach(link => {
          link.classList.remove('text-primary')
          link.classList.add('text-white')
        })
      }
    }
  
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      applyStyles(scrolled || isInternalPage)
    }
  
    applyStyles(isInternalPage || window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }
  