import { Routes } from '@angular/router';
import { Producto } from './components/producto/producto';
import { Cine } from './components/cine/cine';
import { Pelicula } from './components/pelicula/pelicula';
import { Padre } from './components/padre/padre';
import { Ventas } from './components/ventas/ventas';
import { Usuario } from './components/usuario/usuario';
import { App } from './app';
import { Pagina404 } from './components/pagina404/pagina404';
import { MiPerfil } from './components/mi-perfil/mi-perfil';
import { Prestamos } from './components/prestamos/prestamos';
import { Transacciones } from './components/transacciones/transacciones';
import { Cuenta } from './components/cuenta/cuenta';

export const routes: Routes = [
    { path: '', component: App },
    { path: 'inicio', component: MiPerfil },
    { path: 'cuenta', component: Cuenta },
    { path: 'transacciones', component: Transacciones },
    { path: 'prestamos', component: Prestamos },
    { path: 'componentes', component: Producto },
    { path: 'ciclos', component: Pelicula },
    { path: 'plantillas', component: Usuario },
    { path: 'directivas', component: Ventas },
    { path: 'modelos', component: Cine },
    { path: 'comunicacion', component: Padre },
    { path: '**', component: Pagina404 }

];
