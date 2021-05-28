import React, { FC } from 'react'
import '../styles/global.css'
import { AppProps } from 'next/app'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default CustomApp
