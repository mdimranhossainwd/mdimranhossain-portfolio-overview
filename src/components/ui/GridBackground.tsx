export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,45,120,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Top-right pink radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,45,120,0.4) 0%, transparent 60%)",
        }}
      />
      {/* Bottom-left subtle glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(255,45,120,0.3) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
