
import Image from 'next/image'

import LogoImg from '@/public/images/logo.png';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className="flex md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={LogoImg} width={64} height={64} alt="Features 01" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  )
}
