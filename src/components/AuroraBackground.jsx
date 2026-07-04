export default function AuroraBackground() {
  return (
    <div className="aurora-bg">
      <div className="aurora-circle bg-primary/30 w-[800px] h-[800px] -top-48 -left-48 animate-pulse blur-[120px] absolute rounded-full" />
      <div className="aurora-circle bg-secondary/20 w-[700px] h-[700px] top-1/4 -right-24 blur-[100px] absolute rounded-full" />
      <div className="aurora-circle bg-primary/20 w-[600px] h-[600px] bottom-0 left-1/3 animate-pulse blur-[150px] absolute rounded-full" />
    </div>
  );
}
