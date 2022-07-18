import Link from 'next/link';
import Image from 'next/image';
import {
  HomeContainer,
  LogoContainer,
  FirstTextContainer,
  SecondTextContainer,
  SocialContainer,
  SocialLink,
} from './Home.styles';
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';

export const Home = () => {
  return (
    <HomeContainer>
      <LogoContainer>
        <Image width={369} height={46} src="/images/logo.png" />
      </LogoContainer>
      <FirstTextContainer className="txt1">
        Vagan los pies y andan los corazones estallados en los ojos y las manos,
        vagan también las manos entre los dedos; y hay quien vive para recordar,
        y hay quien vive para olvidar.
      </FirstTextContainer>
      <SecondTextContainer className="txt2">
        Puedo ver, escuchar, oler, gustar, tocar, ser tocado, sentir y ser
        sentido; hablar por horas, no hablar por días; correr aunque ya no
        largas distancias, aunque sí algo rápido, aunque más bien apenas algunas
        distancias porque las rodillas casi han dicho basta de correr y en todo
        caso más que correr siempre he caminado, por horas, por días, caminar es
        tal vez mi primera forma de escritura; sin embargo aún puedo saltar,
        gritar, sentarme a leer o a escribir por horas; fumo finas hierbas, no
        exclusivas ni excluyentes; imagino y sueño la mayor parte del día-cada
        día, solía ebriarme hasta caer en cualquier lugar y dormir la cabeza,
        ausentar el pensar, el sentir, dejar de pensar, de sentir. Ya quizás no
        tenga más angustias del pensamiento ni del sentir, o las escribo y me
        las fumo. Después llegó el cine y la vida fue luz y movimientos de
        imaginerías, es, hasta ahora he podido hacer dos películas. Encontrarás
        aquí mi pensar-sentir desplegado en mis instintos-intuiciones, yo soy
        porque estoy desplegado en mis instintos y mis intuiciones, que son las
        palabras y es el cine. Aquí entonces todo es imaginería de palabras y de
        cine. Aquí reina la imaginación que es la puta de la casa. I´m almost
        not crazy. Creo en la magia, en las magas y en los magos, en la
        telepatía, la meditaición, la teletransportación y en el arte; creo que
        la democracia no ha sido más que un mísero campo de batalla o de
        explotación; - a nada temo sino a la cobardía. Nada me hace llorar sino
        el amor –* Bienvenido. Bienvenida. Bienvenides.
      </SecondTextContainer>
      <SocialContainer>
        <Link href={'https://facebook.com/'} passHref>
          <SocialLink target="_blank">
            <FacebookCircle size={'4rem'} />
          </SocialLink>
        </Link>
        <Link href={'https://www.instagram.com/'} passHref>
          <SocialLink target="_blank">
            <Instagram size={'4rem'} />
          </SocialLink>
        </Link>
        <Link href={'https://twitter.com/'} passHref>
          <SocialLink target={'_blank'}>
            <Twitter size={'4rem'} />
          </SocialLink>
        </Link>
      </SocialContainer>
    </HomeContainer>
  );
};
