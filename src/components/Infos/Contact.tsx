export function Contact() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl">
                Enviar mensagem
            </h1>
            
            <form className="mt-4 w-full flex flex-col gap-8">
                <input
                    className="pl-3 bg-transparent outline-none border-b border-blue-900 border-opacity-50 placeholder-gray-500 focus:border-opacity-100" 
                    type="text" 
                    placeholder="Nome"
                />
                <input
                    className="pl-3 bg-transparent outline-none border-b border-blue-900 border-opacity-50 placeholder-gray-500 focus:border-opacity-100" 
                    type="email" 
                    placeholder="Email"
                />
                <textarea 
                    className="p-1 h-36 bg-transparent outline-none border border-blue-900 border-opacity-50 placeholder-gray-500 resize-none focus:border-opacity-100"
                    placeholder="Mensagem"
                    />
                <button
                    className="py-3 text-lg text-white tracking-widest bg-blue-600 rounded-lg"
                    type="submit"
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}