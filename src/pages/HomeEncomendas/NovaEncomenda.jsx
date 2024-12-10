export default function NovaEncomenda() {
    
  const [criaPedido, setCriaPedido] = useState("");



    return (

        <div className="text-gray-700 border-b border-gray-200 hover:bg-gray-100 flex ">


            <div className="py-4 px-4 w-16.6"><input onChange={(event) => setCliente(event.target.value)}
                value={cliente} /></div>
            <div className="py-4 px-4 w-16.6"><input onChange={(event) => setEstilista(event.target.value)}
                value={estilista} /></div>
            <div className="py-4 px-4 w-16.6"><input onChange={(event) => setTipoEncomenda(event.target.value)}
                value={tipoEncomenda} /></div>
            <div className="py-4 px-4 w-16.6"><input onChange={(event) => setHorarioPedido(event.target.value)}
                value={horarioPedido} /></div>
            <div className="py-4 px-4 w-16.6"><input onChange={(event) => setValor(event.target.value)}
                value={valor} /></div>
            <div>
                <button>Registrar pedido</button>
            </div>

        </div>


    )
}