'use client';
import * as React from "react";
import { Progress } from "@/components/ui/progress";

const Loading = () => {
  const [progress, setProgress] = React.useState(0); // Change the initial value to 0

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 1000); // Change the delay to 1000ms (1 second)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center min-h-screen items-center">
      <Progress value={progress} className="w-[60%]" />
    </div>
  );
};

export default Loading;
