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

  /* Cards */
  .card {
    position: relative;
    border-radius: .5em
  }
  .card .card--inner {
    padding: 1rem;
    padding-bottom: 5rem;
    color: white
  }
  .card,
  .card:nth-of-type(2n):before {
    background-color: var(--primaryColor)
  }
  .card:nth-of-type(2n),
  .card:before {
    background-color: var(--tertiaryColor)
  }
  .card:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: .75em;
    top: .75em;
    border-radius: .5em;
    z-index: -1;
    transition: left .5s, top .5s
  }
  .card:hover:before {
    left: .5em;
    top: .5em
  }
  .card .card--inner * {
    margin: 0;
    font-weight: normal
  }
  .card img {
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: .5em .5em 0 0
  }

  /* Stay Connected */
  #stay-connected {
    text-align: center
  }
  #stay-connected h2 {
    margin: 0
  }
  #stay-connected h3 {
    font-weight: normal;
    margin: 1.5rem 0
  }
  #stay-connected form {
    margin: auto;
    align-items: center;
    overflow: hidden;
    width: fit-content
  }
  #stay-connected input {
    width: 500px;
    padding: 2rem .75rem
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
          <span>Search Trips</span>
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
              <span>Book Now</span>
            </a>
          </p>
        </div>
        <div class="img--border">
          <img src="../assets/img/hot-air-balloons.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
        </div>
      </div>
    </div>
    <div class="max-width">
      <div class="primary-panel">
        <figure class="quote">
          <blockquote>
            Wherever you go becomes a part of you somehow
          </blockquote>
          <figcaption>—Anita Desai</figcaption>
        </figure>
      </div>
    </div>
    <div class="max-width">
      <div class="grid column-4">
        <a class="card" href="#">
          <img src="../assets/img/scotland.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <div class="card--inner">
            <h2>
              Scotland
            </h2>
            <p>
              123 miles away
            </p>
          </div>
        </a>
        <a class="card" href="#">
          <img src="../assets/img/england.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <div class="card--inner">
            <h2>
              England
            </h2>
            <p>
              456 miles away
            </p>
          </div>
        </a>
        <a class="card" href="#">
          <img src="../assets/img/wales.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <div class="card--inner">
            <h2>
              Wales
            </h2>
            <p>
              789 miles away
            </p>
          </div>
        </a>
        <a class="card" href="#">
          <img src="../assets/img/northern-ireland.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <div class="card--inner">
            <h2>
              Northern Ireland
            </h2>
            <p>
              123 miles away
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="max-width">
      <div class="image-background">
        <h2>
          Questions<br>about<br>your trip?
        </h2>
        <p>
          <a class="button" href="#">
            <span>Ask away</span>
          </a>
        </p>
      </div>
    </div>
    <div class="max-width">
      <div class="grid column-4">
        <a class="card" href="#">
          <img src="../assets/img/sunset-plane.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <div class="card--inner">
            <h2>
              Dubai
            </h2>
            <p>
              123 miles away
            </p>
          </div>
        </a>
        <a class="card" href="#">
          <img src="../assets/img/plane-clouds.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <div class="card--inner">
            <h2>
              Spain
            </h2>
            <p>
              456 miles away
            </p>
          </div>
        </a>
        <a class="card" href="#">
          <img src="../assets/img/america.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <div class="card--inner">
            <h2>
              Abu Dhabi
            </h2>
            <p>
              789 miles away
            </p>
          </div>
        </a>
        <a class="card" href="#">
          <img src="../assets/img/cloud-mountains.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
          <div class="card--inner">
            <h2>
              France
            </h2>
            <p>
              123 miles away
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="max-width">
      <div id="stay-connected" class="tertiary-panel">
        <h2>
          Stay Connected
        </h2>
        <h3>
          If you would like to receive information about our experiences, leave your email address here.
        </h3>
        <form>
          <input type="email" placeholder="Leave your email for holidays straight to your inbox...">
          <button type="submit" class="button">
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </div>
    <div class="max-width">
      <div class="grid column-2 middle reverse">
        <div class="grid">
          <h2>
            This could be you
          </h2>
          <hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend a dolor vitae luctus. Quisque ullamcorper nibh id lacus feugiat scelerisque. Duis malesuada est vel dolor hendrerit, ac malesuada ligula porttitor. Nulla facilisi. Aenean quis tortor in orci porta faucibus. Donec ac condimentum libero, nec congue metus. Vestibulum et aliquet augue.
          </p>
          <h2 class="fancy">
            Let us take you away
          </h2>
          <p>
            <a class="button" href="#">
              <span>Book Now</span>
            </a>
          </p>
        </div>
        <div class="img--border">
          <img src="../assets/img/hot-air-balloons.jpg?resize&size=600&format=webp" width="100%" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</template>
