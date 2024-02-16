export default function Menu() {
  return (
    <div className="flex gap-4 font-semibold text-white ">
      <div className="hover:bg-neutral-500/10 p-2 rounded-lg duration-250 cursor-default">
        Projetos
      </div>
      <div className="hover:bg-neutral-500/10 p-2 rounded-lg duration-250 cursor-default">
        Experiencia
      </div>
      <div className="hover:bg-neutral-500/10 p-2 rounded-lg duration-250 cursor-default">
        Posts
      </div>
    </div>
  );
}
