import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-primary to-primary-second text-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Start Selling?
            </h2>
            <p className="text-white/80 md:text-xl">
              Turn your unused items into cash. Join thousands of sellers on our
              platform today.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {/* <Link href="/login">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full shadow-lg hover:shadow-secondary/20 transition-all"
                >
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link> */}
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white text-black hover:bg-white/10 transition-all"
                >
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
          {/* <div className="mx-auto lg:mx-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="CTA Image"
                className="rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-bold">
                  Join 10,000+ users already on SwapSpot
                </p>
                <div className="flex -space-x-2 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white"
                    ></div>
                  ))}
                  <div className="h-8 min-w-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold border-2 border-white px-2">
                    +5k
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
