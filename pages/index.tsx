import { Menu } from '@/components';

export function HomePage() {
  return (
    <>
      <Menu>
        <ul>
          <li className="logo">
            <a href="/">
              <img src="/images/logo-rojo.png" />
            </a>
          </li>
          <li>
            <a href="literatura">LITERATURA</a>
          </li>
          <li>
            <a href="teatro">TEATRO IRREAL</a>
          </li>
          <li>
            <a href="cine">CINE</a>
          </li>
          <li>
            <a href="video-poemas">VIDEO-POEMAS</a>
          </li>
          <li>
            <a href="servicios">SERVICIOS</a>
          </li>
          <li>
            <a href="contacto">CONTACTO</a>
          </li>
        </ul>
      </Menu>
      <div className="container-fluid" style={{ height: '100vh' }}>
        <img className="logo-txt" src="/images/logo.png" />
        <img className="redes" src="/images/redes.png" />
        <div className="row align-items-end h-100">
          <div className="col-8" style={{ paddingBottom: '7rem' }}>
            <p className="txt1">
              Vagan los pies y andan los corazones estallados en los ojos y las
              manos, vagan también las manos entre los dedos; y hay quien vive
              para recordar, y hay quien vive para olvidar.
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: '20%',
            paddingBottom: '13.5rem',
            position: 'relative',
          }}
        >
          <div
            className="col-12"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              padding: '2rem 2.3rem 1rem 2.3rem',
            }}
          >
            <p className="txt2">
              Puedo ver, escuchar, oler, gustar, tocar, ser tocado, sentir y ser
              sentido; hablar por horas, no hablar por días; correr aunque ya no
              largas distancias, aunque sí algo rápido, aunque más bien apenas
              algunas distancias porque las rodillas casi han dicho basta de
              correr y en todo caso más que correr siempre he caminado, por
              horas, por días, caminar es tal vez mi primera forma de escritura;
              sin embargo aún puedo saltar, gritar, sentarme a leer o a escribir
              por horas; fumo finas hierbas, no exclusivas ni excluyentes;
              imagino y sueño la mayor parte del día-cada día, solía ebriarme
              hasta caer en cualquier lugar y dormir la cabeza, ausentar el
              pensar, el sentir, dejar de pensar, de sentir. Ya quizás no tenga
              más angustias del pensamiento ni del sentir, o las escribo y me
              las fumo. Después llegó el cine y la vida fue luz y movimientos de
              imaginerías, es, hasta ahora he podido hacer dos películas.
              Encontrarás aquí mi pensar-sentir desplegado en mis
              instintos-intuiciones, yo soy porque estoy desplegado en mis
              instintos y mis intuiciones, que son las palabras y es el cine.
              Aquí entonces todo es imaginería de palabras y de cine. Aquí reina
              la imaginación que es la puta de la casa. I´m almost not crazy.
              Creo en la magia, en las magas y en los magos, en la telepatía, la
              meditaición, la teletransportación y en el arte; creo que la
              democracia no ha sido más que un mísero campo de batalla o de
              explotación; - a nada temo sino a la cobardía. Nada me hace llorar
              sino el amor –* Bienvenido. Bienvenida. Bienvenides.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
