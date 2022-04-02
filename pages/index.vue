<style scoped>
  header {
    padding-top: 100px;
    min-height: 450px;
    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('../assets/img/boat-mountains.jpg?resize&size=1920&format=webp');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: grid;
    place-content: center
  }
  form {
    background-color: white;
    border-radius: .75em;
    display: flex
  }
  label {
    position: relative
  }
  label span {
    font-size: .75em;
    position: absolute;
    left: .75rem;
    top: 1rem;
    color: black
  }
  input {
    background-color: transparent;
    border: none;
    color: #323232;
    padding: 2.25rem .75rem 1.5rem;
    font-size: 1.1rem;
    font-family: raleway, sans-serif;
    border-right: 1px solid #323232;
    transition: background-color .5s;
    min-width: 250px;
    height: calc(100% - 2.25rem - 1.5rem)
  }
  input::placeholder {
    color: #323232
  }
  input:hover {
    background-color: rgba(0, 0, 0, .075)
  }
  form button {
    font-size: 1.1rem;
    margin: 0 1.25rem;
    transition: opacity .5s
  }
  form button:before {
    content: none
  }
  form button:hover {
    opacity: .75
  }
</style>

<template>
  <div>
    <header>
      <form class="middle">
        <label>
          <span>From</span>
          <input type="text" placeholder="Where are you travelling from?">
        </label>
        <label>
          <span>To</span>
          <input type="text" placeholder="Where are you going?">
        </label>
        <label>
          <span>Departure Date</span>
          <input type="date" placeholder="When would you like to go?">
        </label>
        <button type="submit" class="button">
          Search Trips
        </button>
      </form>
    </header>
    <div class="max-width">
      <div class="grid column-2 middle">
        <div class="grid">
          <h2 class="fancy">
            Welcome
          </h2>
          <h2>
            Go and See All You Possibly Can
          </h2>
          <hr>
          <p>
            Nulla arcu nisl, porta vel finibus quis, efficitur sed eros. Aliquam tincidunt, velit sed tincidunt dapibus, dui magna dictum nunc, et ultrices felis lectus a dui. Maecenas vitae neque sit amet purus iaculis porta rutrum sed erat. Vivamus commodo, sapien sed feugiat ultricies, justo arcu tempor magna, et lobortis justo erat at nisi. Duis turpis nisi, euismod id felis nec, elementum scelerisque nulla. Suspendisse tempus gravida purus eu vehicula. Nullam odio enim, finibus sit amet suscipit sit amet, posuere eu libero.
          </p>
          <p>
            <a class="button" href="#">
              Book Now
            </a>
          </p>
        </div>
        <div class="img--border">
          <img src="../assets/img/hot-air-balloons.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
        </div>
      </div>
    </div>
    <div class="max-width">
      <div>
        <figure>
          <blockquote cite="https://www.huxley.net/bnw/four.html">
            <p>Wherever you go becomes a part of you somehow</p>
          </blockquote>
          <figcaption>—Anita Desai</figcaption>
        </figure>
      </div>
    </div>
    <div class="max-width">
      <div class="grid column-4">
        <div class="card">
          <img src="../assets/img/sunset-plane.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <h2>
            Dubai
          </h2>
          <p>
            123 miles away
          </p>
        </div>
        <div class="card">
          <img src="../assets/img/sunset-plane.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <h2>
            Dubai
          </h2>
          <p>
            123 miles away
          </p>
        </div>
        <div class="card">
          <img src="../assets/img/sunset-plane.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <h2>
            Dubai
          </h2>
          <p>
            123 miles away
          </p>
        </div>
        <div class="card">
          <img src="../assets/img/sunset-plane.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <h2>
            Dubai
          </h2>
          <p>
            123 miles away
          </p>
        </div>
      </div>
    </div>
    <div class="max-width">
      <h2>
        Stay Connected
      </h2>
      <h3>
        If you would like to receive information about our experiences, leave your email address here.
      </h3>
      <form>
        <input type="email" placeholder="Leave your email for holidays straight to your inbox">
        <button type="submit" class="button">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: 'REPLACE' },
        { hid: 'og:title', property: 'og:title', content: 'Home' },
        { hid: 'og:description', property: 'og:description', content: 'REPLACE' },
        { hid: 'og:image', property: 'og:image', content: 'REPLACE' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Home' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'REPLACE' },
        { hid: 'twitter:img', name: 'twitter:img', content: 'REPLACE' }
      ],
      link: [
        { hid: 'canonical', rel: 'canonical', href: 'REPLACE' }
      ]
    }
  }
}
</script>
