import { Check, Shield, Truck } from "lucide-react";

const Trust = () => {
  return (
    <section className="w-full py-8 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 items-center justify-center">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-medium">Secure Payments</h3>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-medium">Fast Delivery</h3>
          </div>
          {/* <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-medium">Easy Returns</h3>
          </div> */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-sm font-medium">Quality Guarantee</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
