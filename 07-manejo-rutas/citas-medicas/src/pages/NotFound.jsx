export default function NotFound() {
  return (
    <div className="absolute inset-0 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Gradiente de colores */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-indigo-950/30 dark:to-pink-950/30" />

      {/* Patrón de grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center text-center h-dvh w-dvw">
        <div className="flex flex-col gap-7">
          <p className="text-white text-8xl font-extralight animate-bounce">(˶º⤙º˶)</p>
          <h1 className="bg-gradient-to-r from-gray-50 via-fuchsia-300 to-gray-50 bg-clip-text text-transparent p-1 text-7xl">(404) Algo malio sal.</h1>
          <h1 className="text-white text-1xl font-extralight italic">"No lo sé, reinicialo o algo"</h1>
        </div>
      </div>
    </div>
  );
}
