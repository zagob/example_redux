interface HeaderProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

export function Header({ title, description, image, className }: HeaderProps) {
  return (
    <header className="bg-gray-600 h-[400px] flex items-center justify-around">
      <div className="text-gray-200">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2>{description}</h2>
      </div>

      <div className="">
        <img width={500} src={image} alt={title} />
      </div>
    </header>
  );
}
