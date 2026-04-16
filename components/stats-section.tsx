import { Building, Users, Home, Calendar } from "lucide-react"

const stats = [
  {
    icon: Building,
    number: "2,580",
    suffix: "+",
    label: "PROJECTS COMPLETED",
  },
  {
    icon: Users,
    number: "1,520",
    suffix: "+",
    label: "HAPPY CUSTOMERS",
  },
  {
    icon: Home,
    number: "250",
    suffix: "K+",
    label: "SQUARE FEET BUILT",
  },
  {
    icon: Calendar,
    number: "25",
    suffix: "+",
    label: "YEARS IN SERVICE",
  },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
            Interior Design Doesn't Have to Be
            <br />
            <span className="font-semibold">Expensive or Complicated!</span>
            <br />
            <span className="text-red-200">It Should Be Smart & User Friendly</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="h-10 w-10 md:h-12 md:w-12 text-red-200 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {stat.number}
                  <span className="text-red-200">{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-sm tracking-[0.2em] text-red-100 uppercase font-semibold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
