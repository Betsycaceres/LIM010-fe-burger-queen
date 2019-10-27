import React from 'react';
import firebase from './firebase';
import '../css/App.css';
import TituloPedidos from './TituloPedidos';
export const OrdenDetalles = ({ seleccionados, name, setSeleccionados, setTotal, total }) => {
  const Eliminar = (elegido) => {
    const productosEliminados = seleccionados.filter(element => element.nombre !== elegido)
    return setSeleccionados(productosEliminados);
  }
  const TotalPedidos = () => {
    const totalNeto = seleccionados.reduce((a, b) => (a + b.total), 0);
    return setTotal(totalNeto);
  }

  const Envio = () => {
    const añadirOrden = firebase.firestore().collection("orden").add({
      cliente: name,
      hora:new Date(),
      total: total,
      productos: seleccionados.map((element)=>({producto:element.nombre, cantidad: element.cantidad, subtotal:element.total})),
      estado: 'pendiente',
      //nombre: seleccionados.nombre,
    });
    return añadirOrden;
  }

  return (
    <React.Fragment>
      <div className="col mg-1 center-item">
        <form className="form-box">
          <TituloPedidos texto="DETALLES DE LA ORDEN" />
          <label className="mg-1">Cliente: &nbsp;{name}</label>
          <div>
            <table className="mg-1">
              <thead className="">
                <tr className="">
                  <th>Cantidad</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Total</th>

                </tr>
              </thead>
              <tbody>
                {seleccionados.map(p => (
                  <tr key={p.nombre}>
                    {/* <td> <input type="number" min="1" max="10" value={p.cantidad}></input></td> */}
                    {/* <td><label>{p.cantidad}</label></td> */}
                    <td><textarea value={p.cantidad} disabled></textarea></td>
                    <td>{p.nombre}</td>
                    <td>${p.precio}</td>
                    <td>${p.total}</td>
                    <td>
                      <button type="button" value={p.id} className="btn" onClick={() => { Eliminar(p.nombre) }}>X</button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>

            <label>TOTAL<textarea onChange={TotalPedidos()} value={total} /></label>
          </div>
          <div>
            <button type="button" className="btn" onClick={() => { Envio(name) }}>ENVIAR</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
export default OrdenDetalles;

