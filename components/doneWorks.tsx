import Image from 'next/image'

import DoneWork_1 from '@/public/images/done_works/1.png';
import DoneWork_2 from '@/public/images/done_works/2.png';
import DoneWork_3 from '@/public/images/done_works/3.png';
import DoneWork_4 from '@/public/images/done_works/4.png';
import DoneWork_5 from '@/public/images/done_works/5.png';
import DoneWork_6 from '@/public/images/done_works/6.png';
import DoneWork_7 from '@/public/images/done_works/7.png';
import DoneWork_8 from '@/public/images/done_works/8.png';
import DoneWork_9 from '@/public/images/done_works/9.png';
import DoneWork_10 from '@/public/images/done_works/10.png';
import DoneWork_11 from '@/public/images/done_works/11.png';
import DoneWork_12 from '@/public/images/done_works/12.png';

export default function DoneWorks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Done Works</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_1} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_2} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_3} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_4} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_5} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_6} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_7} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_8} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_9} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_10} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_11} width={540} height={405} alt="Features 01" />
              </div>
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={DoneWork_12} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
