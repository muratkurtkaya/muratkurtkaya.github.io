import Image from 'next/image'

import FeatImage01 from '@/public/images/ship1.png'

export default function OurCompany() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Company</h2>
            <p className="text-xl text-gray-400">Established within the structure of Torktech Repair, it offers a wide range of dry dock services, ship repair management, afloat and port repairs, ship repair consulting, and supervision. 
            With extensive expertise across all shipyard segments, we offer services delivered by a skilled and highly experienced team.</p>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-400">To provide a service or product meeting our client requirements in an ethical, professional, safe and environmentally friendly manner; to create the difference in our industry with an effective and profitable service approach in line with the service value chain at international quality standards; to maintain efficiency and quality at a high level with our continuous growth approach; to treat employees with respect and ensure a healthy, positive and safe working environment; to provide added value to our team members and our country.</p>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Vision</h2>
            <p className="text-xl text-gray-400">To carry out ship repair activities in full compliance with national and international rules; maintaining the highest quality with increasing our knowledge and experience; to be prefred by our clients with our competitiveness, customer satisfaction, to be trusted with our experience; to protect the enviroment with safety operations and adopting the enviromental requirments all the time; expanding with qualified partners and stakeholders according
to our values.</p>
          </div>

          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mt-4 mb-8 md:mb-0 md:order-1">
                <Image className="max-w-full mx-auto md:max-w-none h-auto " src={FeatImage01} width={600} height={405} alt="Features 01" />
          </div>

        </div>
      </div>
    </section>
  )
}
