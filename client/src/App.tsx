import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ComingSoon from "@/components/ComingSoon";
import NotFound from "@/pages/not-found";

// Lazy load the Home page (heaviest page with all components)
const Home = lazy(() => import("@/pages/Home"));

function Router() {
  return (
    <>
      <Navigation />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-bitcoin border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }>
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
      </Suspense>
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
