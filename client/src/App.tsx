import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Home from "@/pages/Home";
import ComingSoon from "@/components/ComingSoon";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about">
          <ComingSoon pageName="About" />
        </Route>
        <Route path="/features">
          <ComingSoon pageName="Features" />
        </Route>
        <Route path="/pricing">
          <ComingSoon pageName="Pricing" />
        </Route>
        <Route path="/security">
          <ComingSoon pageName="Security" />
        </Route>
        <Route path="/contact">
          <ComingSoon pageName="Contact" />
        </Route>
        <Route path="/careers">
          <ComingSoon pageName="Careers" />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
