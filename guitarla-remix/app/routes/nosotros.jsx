import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";
import { useOutletContext } from "@remix-run/react";

export function meta() {
  return {
    title: "GuitarLA - Sobre Nosotros",
    description: "Venta de guitarras, blog de música",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  const data = useOutletContext();

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Quisque non neque vitae sapien tristique faucibus vitae nec metus.
            Nunc fringilla vestibulum ex at suscipit. Maecenas mattis elit eu
            elit varius cursus. Integer vitae auctor ex. Curabitur vitae ante
            turpis. Praesent suscipit tortor non urna consequat convallis.
            Phasellus in dignissim diam. Aliquam viverra, purus eu elementum
            viverra, magna felis aliquet ex, et malesuada sapien mauris at urna.
          </p>
          <p>
            Quisque non neque vitae sapien tristique faucibus vitae nec metus.
            Nunc fringilla vestibulum ex at suscipit. Maecenas mattis elit eu
            elit varius cursus. Integer vitae auctor ex. Curabitur vitae ante
            turpis. Praesent suscipit tortor non urna consequat convallis.
            Phasellus in dignissim diam. Aliquam viverra, purus eu elementum
            viverra, magna felis aliquet ex, et malesuada sapien mauris at urna.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
