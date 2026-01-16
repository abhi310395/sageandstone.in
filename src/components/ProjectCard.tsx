interface ProjectProps {
  title: string;
  category: string;
  description: string;
  color: string;
}

export default function ProjectCard({ title, category, description, color }: ProjectProps) {
  return (
    <div className="group relative bg-white p-8 rounded-3xl border border-stone-200 hover:border-stone-400 transition-all hover:shadow-xl cursor-pointer h-full flex flex-col justify-between">
      <div>
        {/* Category Tag */}
        <div className="mb-4">
          <span className={`text-xs font-bold tracking-widest uppercase ${color}`}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-stone-900 mb-3 group-hover:text-green-700 transition-colors font-sans">
          {title}
        </h3>

        {/* Description */}
        <p className="text-stone-600 leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* Fake "View" Link */}
      <div className="flex items-center gap-2 text-stone-900 font-medium text-sm group-hover:gap-4 transition-all mt-auto">
        View Expertise <span>→</span>
      </div>
    </div>
  );
}