import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive Bitcoin payroll insights and updates.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-bitcoin/5 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail className="h-5 w-5 text-bitcoin mr-2" />
        <h4 className="font-semibold text-gray-900">Stay in the loop</h4>
      </div>
      <p className="text-gray-600 text-sm mb-4">
        Get the latest Bitcoin payroll insights, product updates, and industry news.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={isLoading}
        />
        <Button
          type="submit"
          className="bg-bitcoin hover:bg-bitcoin-dark text-white"
          disabled={isLoading}
        >
          {isLoading ? "..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}