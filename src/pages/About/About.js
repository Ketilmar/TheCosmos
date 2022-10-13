import PageHeader from "../../components/PageHeader/PageHeader";
import { AboutP, AboutSection } from "./StyledAbout";

const AboutPage = () => {
  return (
    <AboutSection>
      <PageHeader title="About" />
      <article>
        <AboutP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis purus a tortor mattis, quis vulputate mi imperdiet. In a
          libero ut lacus dictum volutpat. Aliquam erat volutpat. Fusce neque
          sapien, finibus eget luctus id, congue nec libero. Sed auctor nulla at
          eros feugiat congue. Vestibulum non facilisis est, eu rhoncus orci.
          Sed justo justo, tristique quis lectus ut, tempor lobortis lorem.
          Suspendisse imperdiet dolor vel sapien vehicula, eget venenatis nibh
          semper. Nullam ac lacinia leo. Nunc purus erat, ultrices et arcu
          vitae, dapibus blandit felis. Ut turpis libero, placerat nec nisi a,
          hendrerit bibendum tortor. Donec sem purus, hendrerit a rutrum a,
          porttitor varius sem. Suspendisse euismod, mauris non vehicula
          facilisis, ex ante ullamcorper dolor, ac dignissim risus ipsum vel
          nisl. Sed rutrum augue nisi, imperdiet sollicitudin nulla eleifend eu.
          Proin suscipit rutrum tempor. Maecenas id rutrum tellus.
        </AboutP>
        <AboutP>
          Ut in aliquam nulla. Aliquam porta, arcu ut pretium commodo, nisi
          augue porttitor velit, in pharetra nibh ante eget erat. Aenean dictum
          sem erat, a finibus felis sodales ut. Praesent id erat sit amet ipsum
          porttitor vehicula. Duis et mi lacinia, hendrerit nunc quis,
          ullamcorper justo. Morbi vitae odio varius, fringilla eros non,
          dignissim nibh. Donec vitae blandit justo. Vivamus tristique lorem sed
          sodales facilisis. Cras volutpat nisi in felis scelerisque, vitae
          varius lectus tincidunt. Praesent luctus ultrices justo, ut aliquet
          metus accumsan non. Fusce tincidunt lorem mattis diam accumsan
          ullamcorper. Sed mollis, tellus id sollicitudin eleifend, elit dolor
          sollicitudin justo, at tincidunt orci ipsum eu ipsum.
        </AboutP>
      </article>
    </AboutSection>
  );
};

export default AboutPage;