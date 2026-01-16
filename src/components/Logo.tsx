export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* The Icon: Stone + Sage Leaf */}
      <div className="relative w-8 h-8">
        {/* The Stone (Circle) */}
        <div className="absolute inset-0 bg-stone-800 rounded-full shadow-sm" />
        
        {/* The Sage (Leaf Accent) */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-sage-500 rounded-tr-lg rounded-bl-lg border-2 border-stone-50" />
      </div>

      {/* The Text */}
      <span className="font-heading font-bold text-xl tracking-tight text-stone-900">
        Sage <span className="text-sage-500">&</span> Stone
      </span>
    </div>
  );
}