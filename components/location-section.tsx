import Image from "next/image"

export default function LocationSection() {
  const serviceAreas = [
    "West Palm Beach",
    "Boynton Beach",
    "Delray Beach",
    "Boca Raton",
    "Deerfield Beach",
    "Hillsboro Pines",
    "Parkland",
    "Hillsboro Beach",
    "Lighthouse Point",
    "Pompano Beach",
    "Sea Ranch Lakes",
    "Fort Lauderdale",
    "Coral Springs",
    "Plantation",
    "Weston",
    "Davie",
    "Southwest Ranches",
    "Cooper City",
    "Pembroke Pines",
  ]

  return (
    <section className="py-20 bg-blue-600 text-white" id="locations">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="text-sm tracking-[0.2em] text-amber-400 uppercase mb-4">Our Locations</div>
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6">
            Serving South Florida
            <br />
            <span className="text-red-200">Wherever You Need Us</span>
          </h2>
          <p className="text-lg text-red-100 font-light leading-relaxed max-w-2xl mx-auto">
            A large part of Arose Contractors' projects are located in the following areas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Image */}
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/service-area-map.png"
              alt="Map of Arose Contractors' service areas in Florida"
              fill
              className="object-contain rounded-lg shadow-xl"
              loading="lazy"
              quality={50}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>

          {/* Service Areas List */}
          <div>
            <h3 className="text-2xl font-light text-white mb-6">Cities We Serve:</h3>
            <ul className="grid grid-cols-2 gap-3 text-base text-red-100 list-disc list-inside">
              {serviceAreas.map((city, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 text-amber-400">•</span> {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
