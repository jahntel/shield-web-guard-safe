
import { Shield, AlertTriangle, CheckCircle, Clock, Scan } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const SecurityDashboard = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const securityMetrics = [
    {
      title: "Security Score",
      value: "8.5/10",
      status: "good",
      icon: Shield,
      description: "Overall security health"
    },
    {
      title: "Vulnerabilities",
      value: "3 Found",
      status: "warning",
      icon: AlertTriangle,
      description: "Issues requiring attention"
    },
    {
      title: "Protected Endpoints",
      value: "12/15",
      status: "good",
      icon: CheckCircle,
      description: "Endpoints with security measures"
    },
    {
      title: "Last Scan",
      value: "2 hours ago",
      status: "neutral",
      icon: Clock,
      description: "Most recent security check"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-emerald-600";
      case "warning": return "text-amber-600";
      case "danger": return "text-red-600";
      default: return "text-slate-600";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "good": return "bg-emerald-50 border-emerald-200";
      case "warning": return "bg-amber-50 border-amber-200";
      case "danger": return "bg-red-50 border-red-200";
      default: return "bg-slate-50 border-slate-200";
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Security Dashboard</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Monitor your application's security status and get instant insights into potential vulnerabilities.
          </p>
        </div>

        {/* Security Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {securityMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className={`${getStatusBg(metric.status)} transition-all duration-200 hover:shadow-lg`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Icon className={`w-5 h-5 ${getStatusColor(metric.status)}`} />
                    <span className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                      {metric.value}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-sm font-medium text-slate-700 mb-1">
                    {metric.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {metric.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security Scan Section */}
        <Card className="bg-white border-slate-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-slate-800">Quick Security Scan</CardTitle>
                <CardDescription>
                  Run a comprehensive security check on your application
                </CardDescription>
              </div>
              <Button 
                onClick={startScan} 
                disabled={isScanning}
                className="security-gradient text-white"
              >
                <Scan className={`w-4 h-4 mr-2 ${isScanning ? 'scan-pulse' : ''}`} />
                {isScanning ? 'Scanning...' : 'Start Scan'}
              </Button>
            </div>
          </CardHeader>
          
          {isScanning && (
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Scanning for vulnerabilities...</span>
                  <span className="text-slate-800 font-medium">{scanProgress}%</span>
                </div>
                <Progress value={scanProgress} className="h-2" />
                <p className="text-xs text-slate-500">
                  Checking for XSS, SQL injection, CSRF, and other common vulnerabilities
                </p>
              </div>
            </CardContent>
          )}

          {!isScanning && scanProgress === 100 && (
            <CardContent>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 font-medium">Scan completed successfully!</span>
                </div>
                <p className="text-emerald-700 text-sm mt-2">
                  Found 3 potential issues. Check the detailed report below.
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </section>
  );
};

export default SecurityDashboard;
