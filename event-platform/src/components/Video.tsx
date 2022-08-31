export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do Ignite Lab
            </h1>
            <p className="mt-4 text-gray-200">
              Descrição da primeira aula do ignite lab.
            </p>

          </div>

          <div></div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}