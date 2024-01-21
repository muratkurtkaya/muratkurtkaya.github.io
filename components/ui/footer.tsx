import React from 'react'
import Image from 'next/image'

import LogoImg from '@/public/images/logo.png';


export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="flex md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={LogoImg} width={80} height={80} alt="Features 01" />
              </div>
              <div className="text-gray-400">TORKTECH İstasyon Mah. Yarış Çıkmazı Sk. No:1/B Dükkan No:359 Tuzla/İstanbul service@torktech.net.</div>
            </div>


          </div>

          

        </div>
      </div>
    </footer>
  )
}
