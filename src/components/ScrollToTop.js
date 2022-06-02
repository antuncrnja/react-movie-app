import {useEffect} from 'react'

export const ScrollToTop = (dep) => {
    useEffect(() => {
        window.scrollTo(0,0);
      }, [dep])
}
