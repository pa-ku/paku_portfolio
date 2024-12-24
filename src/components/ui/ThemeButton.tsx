import React, { useEffect } from 'react'
import useLocalStorage from 'use-local-storage'

export default function ThemeButton() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  function handleTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <div className='relative flex group animate-icons  text-zinc-500'>
        <input
          className='peer size-8 cursor-pointer  appearance-none'
          type='checkbox'
          checked={theme === 'dark'}
          onChange={handleTheme}
        />
        <p className='absolute  group-hover:opacity-100 dark:text-white opacity-0 pointer-events-none duration-300 px-2 rounded-lg -bottom-8 shadow-lg dark:shadow-background-600 '>
          Theme
        </p>
        <svg
          className='pointer-events-none  absolute size-full duration-500 peer-checked:rotate-180 peer-checked:opacity-0'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          width='32'
          height='32'
          strokeWidth='1.5'
        >
          <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
          <path d='M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z'></path>
        </svg>
        <svg
          viewBox='0 0 24 24'
          className='pointer-events-none absolute dark:text-primary-300 size-full scale-95 -rotate-180 opacity-0  duration-500 peer-checked:rotate-0 peer-checked:opacity-100'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='1.3'
        >
          <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'></path>{' '}
          <path d='M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2'></path>{' '}
          <path d='M19 11h2m-1 -1v2'></path>{' '}
        </svg>
      </div>
    </>
  )
}
