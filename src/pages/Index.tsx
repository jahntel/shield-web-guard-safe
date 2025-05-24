
import Header from "@/components/Header";
import SecurityDashboard from "@/components/SecurityDashboard";
import SecurityTools from "@/components/SecurityTools";
import BestPracticesGuide from "@/components/BestPracticesGuide";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SecurityDashboard />
      <SecurityTools />
      <BestPracticesGuide />
      <Footer />
    </div>
  );
};

export default Index;
