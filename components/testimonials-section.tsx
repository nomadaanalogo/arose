const testimonials = [
  {
    text: "We had an excellent experience working with Arose Contractors. Their professionalism and attention to detail exceeded our expectations. The quality of their work and the products they provided were outstanding and they completed everything on time and within budget. Their team was easy to communicate with, responsive to our needs, and truly dedicated to delivering the best results.",
    author: "Braian Torres",
    project: "Complete Renovation",
    rating: 5,
    timeAgo: "5 months ago",
  },
  {
    text: "You did a beautiful job on our three bathrooms, center hallway and most recently our new kitchen and dinette area. From the very beginning of the planning stage through the completion of our project we appreciated your advice, design, workmanship, communication, follow through and responsiveness. Your work is top-quality and we felt like we were in great hands.",
    author: "Peter Patraka",
    project: "Kitchen & Bathroom Renovation",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    text: "Arose contracting exceeded my expectations with my remodeling project. My entire condo looks brand new with custom made cabinets and beautiful porcelain tile floor throughout. I would recommend anyone looking for an excellent contractor who communicates well and does what he says he is going to do to definitely contact Roy Delgado with Arose.",
    author: "David Cram",
    project: "Complete Condo Remodeling",
    rating: 5,
    timeAgo: "7 months ago",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm tracking-[0.2em] text-zinc-400 uppercase mb-4">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-[1.1] mb-6">
            Client
            <br />
            <span className="text-zinc-400">Experiences</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4">
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-red-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-zinc-600 font-light leading-relaxed italic">"{testimonial.text}"</p>
              <div className="space-y-1">
                <div className="font-medium text-zinc-900">{testimonial.author}</div>
                <div className="text-sm text-zinc-400 tracking-wide uppercase">{testimonial.project}</div>
                <div className="text-xs text-zinc-400">{testimonial.timeAgo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
