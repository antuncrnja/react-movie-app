import {useEffect} from 'react'

export const ScrollToTop = (dep) => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
      }, [dep])
}
