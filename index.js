document.getElementById( "enmascarar-formulario" )
document.addEventListener( "enviar" , function (e) {
    event_preventDefault();
    enmascarar () ;
}) ;

function enmascarar () {
    const nodoEmail = document.getElementById( "correo electronico" ) ;
    const nodoTelefono = document.getElementById( "telefono" ) ;
    let nodoResultadoEnmascarar = document.getElementById( "enmascarado" ) ;
    let nodoErrorMsn = document.getElementById( "errorMsn" ) ;

    const email = nodoEmail.valor ;
    const telefono = nodoTelefono.valor ;


    if ( telefono.length < 7  || telefono.longitud > 10) {
        nodoErrorMsn.setAttribute ( 'clase', 'bg-danger rounded-3 mb-2 p-2');
        nodoErrorMsn.textContent = ('El numero telefonico debe contener minimo 7 y maximno 10 digitos');
        return ;
    }

    if ( !correoelectronico.split('@') || ! correoelectronico.split('.') ) {
        nodoErrorMsn.setAttribute =( 'clase', 'bg-danger rounded-3 mb-2 p-2' ) ;
        nodoErrorMsn.textContent =('El correo electronico debe contener un @ y un (.)');
        return ;
    }
    let emailEnmascarado = email ;
    if ( email) {
       let domain = emailEnmascarado.split('@', 2) ;
       domain = string (dominio [1]);
       let data2 = '';
       for ( let i = 0; i < 3 ; i ++ ) {
           data2 = data2 + emailEnmascarado [i];
       }
       emailEnmascarar = data2 + '************@' + domain ;
    }
    let telefonoEnmascarado = telefono ;
    if ( telefono ) {
       const tamaño = telefonoEnmascarado.length -4 ;
       let data2 = '' ;
       for (let i = 0; i < 4 ; i ++); {
        data2  =  data2 +  telefonoEnmascarado [ tamaño  +  i ] ;
       }
       telefonoEnmascarar  =  '***********' + data2  ;
    }
    nodoResultadoEnmascarar.textContent  =  `Email: ${ emailEnmascarado } Tel: ${ telefonoEnmascarado } ` ;
}