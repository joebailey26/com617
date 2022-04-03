
<style>
  :root {
    --primaryColor: #3FC380;
    --secondaryColor: #5EE3A0;
    --tertiaryColor: #2A9860
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--primaryFont)
  }
  h2 {
    font-size: 2rem
  }
  .fancy {
    color: var(--primaryColor);
    font-family: dancing script, cursive
  }
  .quote {
    width: fit-content;
    margin: auto
  }
  .quote blockquote {
    font-family: dancing script, cursive;
    font-size: 3rem;
    text-align: center;
    margin: 0 auto 1rem auto;
    width: fit-content
  }
  .quote blockquote + figcaption {
    text-align: right;
    font-size: 1.5rem
  }
  body {
    font-family: raleway, sans-serif;
    color: #323232;
    margin: 0;
    overflow-x: hidden;
    font-size: 1.1rem;
    letter-spacing: .05em
  }
  :focus:not(:focus-visible) {
    outline: none
  }
  .max-width {
    padding: 6rem 2rem;
    max-width: min(1376px, calc(100vw - 4rem));
    margin: auto
  }
  :any-link {
    color: var(--primaryColor);
    font-weight: bold;
    text-decoration: none
  }
  hr {
    max-width: 100px
  }
  .grid {
    display: grid;
    row-gap: 1rem;
    column-gap: 2rem
  }
  .grid * {
    margin: 0
  }
  .column-2 {
    grid-template-columns: repeat(2, 1fr)
  }
  .column-3 {
    grid-template-columns: repeat(3, 1fr)
  }
  .column-4 {
    grid-template-columns: repeat(4, 1fr)
  }
  @media (min-width: 1201px) {
    .column-2.reverse > *:last-of-type {
      grid-column: 1;
      grid-row: 1
    }
    .column-2.reverse > *:first-of-type {
      grid-column: 2;
      grid-row: 1
    }
  }
  @media (max-width: 1200px) {
    .column-4 {
      grid-template-columns: repeat(2, 1fr)
    }
  }
  @media (max-width: 768px) {
    .column-2, .column-3, .column-4 {
      grid-template-columns: 1fr
    }
  }
  .middle {
    align-items: center
  }
  .text-left {
    text-align: left
  }
  .img--border {
    position: relative;
    background-color: var(--primaryColor);
    aspect-ratio: 14/9;
    margin-left: 1rem;
    margin-top: 1rem;
    border-radius: .5em
  }
  .img--border img {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -1rem;
    top: -1rem;
    border-radius: .5em
  }
  .button {
    padding: .66em .75em;
    background-color: var(--tertiaryColor);
    border: 0;
    color: white;
    border-radius: .25em;
    display: inline-block;
    font-weight: normal;
    position: relative;
    cursor: pointer
  }
  .button span {
    z-index: 2;
    position: relative
  }
  .button:before {
    content: '';
    background-color: var(--tertiaryColor);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: .25em;
    z-index: 1
  }
  .button:after {
    content: '';
    background-color: var(--primaryColor);
    position: absolute;
    width: 100%;
    height: 100%;
    left: .5em;
    top: .5em;
    border-radius: .25em;
    z-index: 0;
    transition: left .5s, top .5s
  }
  .button:hover:after {
    left: .25em;
    top: .25em
  }

  /* Nav */
  .top-header {
    position: fixed;
    width: 100%;
    background-color: rgba(42, 152, 96, 50%);
    backdrop-filter: blur(5px);
    z-index: 10
  }
  nav.nav {
    display: grid;
    grid-auto-flow: column;
    padding: 0
  }
  .logo--container {
    display: grid;
    align-content: center;
    justify-content: left
  }
  .nav--container {
    justify-self: end;
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: column;
    align-content: center
  }
  .nav--link {
    font-size: 1rem;
    padding: .5rem;
    transition: color .5s, border .5s;
    border-bottom: .125rem solid transparent;
    font-family: var(--primaryFont);
    letter-spacing: .05rem;
    font-weight: 300;
    color: white
  }
  .nav--link:not(.button):hover, .nav--link.nuxt-link-exact-active:not(.button) {
    border-bottom: .125rem solid white
  }
  .nav--icon {
    display: none
  }
  main {
    min-height: 70vh
  }

  @media (max-width: 768px) {
    .max-width {
      padding: 1rem
    }
    .nav--icon {
      display: block;
      height: 40px;
      width: 40px;
      justify-self: end;
      align-self: center
    }
    .nav--container {
      height: 100vh;
      min-height: -webkit-fill-available;
      position: absolute;
      grid-auto-flow: row;
      left: 100vw;
      top: 0;
      bottom: 0;
      width: 200px;
      background: var(--primaryColor);
      padding: 2.5rem;
      transition: left 1s
    }
    .nav_open .nav--container {
      left: calc(100vw - 200px)
    }
    .nav_close .nav--container {
      display: none
    }
    html {
      transition: margin 1s
    }
    html.nav_open {
      margin-left: -400px;
      overflow: hidden
    }
  }

  /* Footer */
  footer {
    background-image: url('../assets/img/boat-mountains.jpg?resize&size=1920&format=webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 60px 0
  }
  footer .footer--inner {
    background-color: rgba(42, 152, 96, 50%);
    backdrop-filter: blur(5px)
  }
  footer .footer--copyright p {
    margin-bottom: 0
  }
  footer .logo {
    filter: brightness(999) grayscale(1)
  }
  footer *, footer :any-link {
    color: white;
    font-size: 1rem
  }
  footer h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem!important
  }
  footer h3, footer :any-link {
    font-weight: normal
  }
  footer nav {
    display: inline-grid;
    gap: .5rem
  }
  footer .nav--link {
    padding-left: 0;
    padding-top: 0;
    display: inline-block
  }

  /* Panels */
  .primary-panel {
    background-color: var(--primaryColor)
  }
  .secondary-panel {
    background-color: var(--secondaryColor)
  }
  .tertiary-panel {
    background-color: var(--tertiaryColor)
  }
  .primary-panel *,
  .secondary-panel *,
  .tertiary-panel * {
    color: white
  }
  .primary-panel,
  .secondary-panel,
  .tertiary-panel,
  .image-background {
    border-radius: .5rem;
    padding: 4rem 2rem;
    margin-top: -4rem;
    margin-bottom: -4rem
  }
  .image-background {
    background-image: url('../assets/img/forest-mountains.jpg?resize&size=1920&format=webp');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    aspect-ratio: 3/1;
    display: grid;
    justify-content: space-between
  }
  .image-background h2 {
    font-size: 4rem;
    color: white;
    font-weight: 900
  }
</style>

<template>
  <div :style="'--motion: ' + motion">
    <header class="top-header">
      <nav class="nav max-width">
        <div class="logo--container">
          <nuxt-link class="logo" to="/">
            <img src="../assets/img/logo.png?resize=300&format=webp" width="200">
          </nuxt-link>
        </div>
        <div class="nav--icon">
          <div @click="nav" v-html="require('../assets/svg/menu.svg?include')" />
        </div>
        <div class="nav--container">
          <nuxt-link to="/" class="nav--link">
            Home
          </nuxt-link>
          <nuxt-link to="/about" class="nav--link">
            About
          </nuxt-link>
          <nuxt-link to="/experiences" class="nav--link">
            Experiences
          </nuxt-link>
          <nuxt-link to="/planner" class="nav--link">
            Planner
          </nuxt-link>
          <nuxt-link to="/info" class="nav--link">
            Info
          </nuxt-link>
          <nuxt-link to="/contact" class="nav--link">
            Contact
          </nuxt-link>
          <nuxt-link to="/sign-up" class="nav--link button">
            <span>Sign Up</span>
          </nuxt-link>
        </div>
      </nav>
    </header>
    <main>
      <nuxt keep-alive />
    </main>
    <footer>
      <div class="max-width footer--inner">
        <div class="grid column-3">
          <nuxt-link class="logo" to="/">
            <img src="../assets/img/logo.png?resize=300&format=webp" width="200">
          </nuxt-link>
          <div>
            <h3>
              More Information
            </h3>
            <nav>
              <nuxt-link to="/privacy-policy" class="nav--link">
                Privacy Policy
              </nuxt-link>
              <nuxt-link to="/terms-and-conditions" class="nav--link">
                Terms and Conditions
              </nuxt-link>
              <nuxt-link to="/data-protection" class="nav--link">
                Data Protection
              </nuxt-link>
            </nav>
          </div>
          <div>
            <h3>
              Contact
            </h3>
            <address>
              <p>
                123 Fake Street,
                <br>
                Southampton
                <br>
                SO12 3FU
              </p>
            </address>
            <br>
            <p>
              <a href="tel:01234567890">01234567890</a>
              <br>
              <a href="mailto:test@travelguide.com">test@travelguide.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motion: 'auto'
    }
  },
  watch: {
    $route () {
      document.documentElement.classList.remove('nav_open')
      setTimeout(function () {
        document.documentElement.classList.add('nav_close')
      }, 1000)
    }
  },
  async beforeMount () {
    if (await this.WebpIsSupported()) {} else {
      document.querySelector('body').classList.add('no-webp')
    }
  },
  async mounted () {
    document.documentElement.classList.add('nav_close')
    this.motion = await window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  },
  methods: {
    async WebpIsSupported () {
      // If the browser doesn't have the method createImageBitmap, you can't display webp format
      if (!self.createImageBitmap) {
        return false
      }

      // Base64 representation of a white point image
      const webpData = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA='

      // Retrieve the Image in Blob Format
      const blob = await fetch(webpData).then(r => r.blob())

      // If the createImageBitmap method succeeds, return true, otherwise false
      return createImageBitmap(blob).then(() => true, () => false)
    },
    nav () {
      if (document.documentElement.classList.contains('nav_open')) {
        document.documentElement.classList.remove('nav_open')
        setTimeout(function () {
          document.documentElement.classList.add('nav_close')
        }, 1000)
      } else {
        document.documentElement.classList.remove('nav_close')
        setTimeout(function () {
          document.documentElement.classList.add('nav_open')
        }, 1)
      }
    }
  }
}
</script>
