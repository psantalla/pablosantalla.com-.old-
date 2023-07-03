
var navbarHTML = `
  <div class="st--row sp-ga--l sp-ga--m--mobile sp-py--l st-apll--sb st-appdcl--mid sp-px--3xl sp-px--l--mobile">
  <a href="index.html">
  <img class="logo" src="/assets/logo.svg" alt="Logo of Pablo Santalla.">
</a>

    <!-- the logo has a class to control the size across different devices -->
    <nav>
      <ul class="st--row st-appdcl--mid sp-ga--l sp-ga--m--mobile ut-ul--reset">
        <li>
          <a class="t-s--m ut-link _ut-link--branch" href="about.html">About</a>
        </li>
        <li>
          <a class="t-s--m ut-link _ut-link--branch" href="work.html">Work</a>
        </li>
        <li>
          <a class="com-btn _com-btn--sp" href="mailto:pablo@pablosantalla.com?subject=pablosantalla.com%20%E2%80%94%20design%20and%2For%20development%20inquiry">
            <img src="assets/email.svg" alt="Icon of an envelope.">
            <span>Say hola</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
`;


var navbarContainer = document.getElementById('navbar-js');

// Mostrar el contenido del navbar en el contenedor
navbarContainer.innerHTML = navbarHTML;